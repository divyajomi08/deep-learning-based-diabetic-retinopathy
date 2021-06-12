from flask import Flask, request, jsonify
import numpy as np
from PIL import Image
import json
import cv2
import urllib.request
import requests
app = Flask(__name__)


@app.route('/post/', methods=['POST'])
def post_something():
    target_width = 512
    target_height = 512

    scoring_uri = 'http://3fa6bfae-9870-4847-8b99-bab105d84e4c.eastus2.azurecontainer.io/score'
    headers = headers = {'Content-Type':'application/json'}


    urllib.request.urlretrieve(request.json['path'], "fundus.png")
    im = Image.open('fundus.png')

    # Crop Image
    image_arr = np.array(im)
    n_row = image_arr.shape[0]
    n_col = image_arr.shape[1]
    s = np.sum(image_arr, axis=(2,0)) / n_col
    s = np.round(s, decimals=0)
    s = s.astype(np.int64)
        
    minVal = 10
    maxVal = (255 - minVal) * 3
    
    k = s - minVal
    s = np.clip(k, a_min=0, a_max=(maxVal))
        
    z = np.where(s != 0)[0]
        
    if z.shape[0] < 2: # image is completely black
        return json({'result':"black"})
        # Add code to show output - Blank Image
    else:
        right_edge = z[z.shape[0]-1]+1
        left_edge = z[0,]
        w = right_edge - left_edge
            
        top_edge = 0 # initially top and bottom edges are set as that of image
        bottom_edge = n_row
        h = bottom_edge - top_edge
            
        cropped = None
            
        if n_row > w: # there is space above and below
                # find top and bottom edges
                
            s = np.sum(image_arr, axis=(2,1)) / n_row
            s = np.round(s, decimals=0)
            s = s.astype(np.int64)
                
            s = np.clip((s - minVal), a_min=0, a_max=(maxVal))
            z = np.where(s != 0)[0]
                
            bottom_edge = z[z.shape[0]-1]+1
            top_edge = z[0,]
            h = bottom_edge - top_edge
        else:
            pad = int((w - h) / 2)
            newRows = np.zeros_like(image_arr[0:pad,])
            image_arr = np.vstack((newRows, image_arr))
            image_arr = np.vstack((image_arr, newRows))
            im = Image.fromarray(image_arr)
            bottom_edge = image_arr.shape[0]
                
        cropped = im.crop((left_edge, top_edge, right_edge, bottom_edge))
        cropped = cropped.resize((target_width, target_height))
            
        # Gaussian Blur and Combine

        cropped = cv2.cvtColor(np.array(cropped),cv2.COLOR_RGB2BGR)
        cropped = cv2.cvtColor(cropped, cv2.COLOR_BGR2RGB)
        cropped = cv2.resize(cropped, (512, 512))
        cropped=cv2.addWeighted ( cropped,4, cv2.GaussianBlur( cropped , (0,0) , 30) ,-4 ,128)
            
        cv2.imwrite(target_path, cropped)
            
        cropped = np.asarray(cropped, dtype='float32')
        cropped = cropped / 255
        cropped = cropped.reshape(-1, target_width, target_height, 3)
            
        input_data = json.dumps({"data":cropped.tolist()})
            
        try:
            resp = requests.post(scoring_uri, input_data, headers=headers)
            # result = json.loads(resp.text)['result']
            
            result = json.loads(resp.text)['result']
            result =  np.argmax(result)

        except urllib.error.HTTPError as error:
                # print("Request failed with states code: " + str(error,code))
                # print(error.info())
            return json({'result':"error"})
    return jsonify({'result':int(np.argmax(result))})
@app.route('/')
def index():
    return "<h1>Welcome to our server !!</h1>"

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)