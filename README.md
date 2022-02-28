# Deep Learning Based Diabetic Retinopathy
## Implementation supporting HopeScope mobile phone fundus camera & application by [Helios Opthalmics](https://download.cnet.com/HopeScope/3000-2129_4-78551288.html)

- Hopescope Mobile application is extended with a cloud deployed machine learning model to classify a fundus image for DR. 
- A cloud backend for HopeScope is to be developed to support this along with a HopeScope Web Application for fundus documentation and image labelling for training of the model.

<b>Relevance</b>
- Very low number of trained retinal specialists, so Machine Learning based diagnosis support will assist in primary diagnosis by non-trained medical practitioners 
- HopeScope assisted by Machine Learning based diagnosis can be used by primary health care providers in areas where Ophthalmologists are not available.

## Work Items in Project
1. Deep Learning Module to detect Diabetic Retinopathy: A deep Convolutional Neural Network will be trained using [dataset from Kaggle](https://www.kaggle.com/c/diabetic-retinopathy-detection/data) and the model will be deployed on a cloud service.
2. Extension of HopeScope App: Existing app will be extended with API layer to send the images to the cloud.
3. Web Application: The intended web application is for the use of Ophthalmologists to label newly captured data.


