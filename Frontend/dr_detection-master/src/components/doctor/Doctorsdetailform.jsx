import React from 'react';
import DarkButton from '../DarkButton';

const Doctorform = () => {
    return (
        <form className="ui form">
            <h4 className="ui dividing header">Personal Information</h4>
            <div className="field">
                <label>Name</label>
                <div className="two fields">
                    <div className="field">
                        <input type="text" name="shipping[first-name]" placeholder="First Name"></input>
                    </div>
                    <div className="field">
                        <input type="text" name="shipping[last-name]" placeholder="Last Name"></input>
                    </div>
                </div>
            </div>
            <div className="field">
                <label>Address</label>
                <div className="fields">
                    <div className="twelve wide field">
                        <input type="text" name="shipping[address]" placeholder="Street Address"></input>
                    </div>
                    <div className="four wide field">
                        <input type="text" name="shipping[address-2]" placeholder="Apt #"></input>
                    </div>
                </div>
            </div>
            <div className="two fields">
                <div className="field">
                    <label>State</label>
                    <select className="ui fluid dropdown">
                        <option value="">State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                <div className="field">
                    <label>Country</label>
                    <select className="ui fluid dropdown">
                        <option value="">Country</option>
                        <option value="in">India</option>
                        <option value="ax">Aland Islands</option>
                        <option value="al">Albania</option>
                        <option value="dz">Algeria</option>
                        <option value="as">American Samoa</option>
                        <option value="ad">Andorra</option>
                        <option value="ao">Angola</option>
                        <option value="ai">Anguilla</option>
                        <option value="ag">Antigua</option>
                        <option value="ar">Argentina</option>
                        <option value="am">Armenia</option>
                        <option value="aw">Aruba</option>
                        <option value="au">Australia</option>
                        <option value="at">Austria</option>
                        <option value="az">Azerbaijan</option>
                        <option value="bs">Bahamas</option>
                        <option value="bh">Bahrain</option>
                        <option value="bd">Bangladesh</option>
                        <option value="bb">Barbados</option>
                        <option value="by">Belarus</option>
                        <option value="be">Belgium</option>
                        <option value="bz">Belize</option>
                        <option value="bj">Benin</option>
                        <option value="bm">Bermuda</option>
                        <option value="bt">Bhutan</option>
                        <option value="bo">Bolivia</option>
                        <option value="ba">Bosnia</option>
                        <option value="bw">Botswana</option>
                        <option value="bv">Bouvet Island</option>
                        <option value="br">Brazil</option>
                        <option value="vg">British Virgin Islands</option>
                        <option value="bn">Brunei</option>
                        <option value="bg">Bulgaria</option>
                        <option value="bf">Burkina Faso</option>
                        <option value="mm">Burma</option>
                        <option value="bi">Burundi</option>
                        <option value="tc">Caicos Islands</option>
                        <option value="kh">Cambodia</option>
                        <option value="cm">Cameroon</option>
                        <option value="ca">Canada</option>
                        <option value="cv">Cape Verde</option>
                        <option value="ky">Cayman Islands</option>
                        <option value="cf">Central African Republic</option>
                        <option value="td">Chad</option>
                        <option value="cl">Chile</option>
                        <option value="cn">China</option>
                        <option value="cx">Christmas Island</option>
                        <option value="cc">Cocos Islands</option>
                        <option value="co">Colombia</option>
                        <option value="km">Comoros</option>
                        <option value="cg">Congo Brazzaville</option>
                        <option value="cd">Congo</option>
                        <option value="ck">Cook Islands</option>
                        <option value="cr">Costa Rica</option>
                        <option value="ci">Cote Divoire</option>
                        <option value="hr">Croatia</option>
                        <option value="cu">Cuba</option>
                        <option value="cy">Cyprus</option>
                        <option value="cz">Czech Republic</option>
                        <option value="dk">Denmark</option>
                        <option value="dj">Djibouti</option>
                        <option value="dm">Dominica</option>
                        <option value="do">Dominican Republic</option>
                        <option value="ec">Ecuador</option>
                        <option value="eg">Egypt</option>
                        <option value="sv">El Salvador</option>
                        <option value="gb">England</option>
                        <option value="gq">Equatorial Guinea</option>
                        <option value="er">Eritrea</option>
                        <option value="ee">Estonia</option>
                        <option value="et">Ethiopia</option>
                        <option value="eu">European Union</option>
                        <option value="fk">Falkland Islands</option>
                        <option value="fo">Faroe Islands</option>
                        <option value="fj">Fiji</option>
                        <option value="fi">Finland</option>
                        <option value="fr">France</option>
                        <option value="gf">French Guiana</option>
                        <option value="pf">French Polynesia</option>
                        <option value="tf">French Territories</option>
                        <option value="ga">Gabon</option>
                        <option value="gm">Gambia</option>
                        <option value="ge">Georgia</option>
                        <option value="de">Germany</option>
                        <option value="gh">Ghana</option>
                        <option value="gi">Gibraltar</option>
                        <option value="gr">Greece</option>
                        <option value="gl">Greenland</option>
                        <option value="gd">Grenada</option>
                        <option value="gp">Guadeloupe</option>
                        <option value="gu">Guam</option>
                        <option value="gt">Guatemala</option>
                        <option value="gw">Guinea-Bissau</option>
                        <option value="gn">Guinea</option>
                        <option value="gy">Guyana</option>
                        <option value="ht">Haiti</option>
                        <option value="hm">Heard Island</option>
                        <option value="hn">Honduras</option>
                        <option value="hk">Hong Kong</option>
                        <option value="hu">Hungary</option>
                        <option value="is">Iceland</option>
                        <option value="af">Afganistan</option>
                        <option value="io">Indian Ocean Territory</option>
                        <option value="id">Indonesia</option>
                        <option value="ir">Iran</option>
                        <option value="iq">Iraq</option>
                        <option value="ie">Ireland</option>
                        <option value="il">Israel</option>
                        <option value="it">Italy</option>
                        <option value="jm">Jamaica</option>
                        <option value="jp">Japan</option>
                        <option value="jo">Jordan</option>
                        <option value="kz">Kazakhstan</option>
                        <option value="ke">Kenya</option>
                        <option value="ki">Kiribati</option>
                        <option value="kw">Kuwait</option>
                        <option value="kg">Kyrgyzstan</option>
                        <option value="la">Laos</option>
                        <option value="lv">Latvia</option>
                        <option value="lb">Lebanon</option>
                        <option value="ls">Lesotho</option>
                        <option value="lr">Liberia</option>
                        <option value="ly">Libya</option>
                        <option value="li">Liechtenstein</option>
                        <option value="lt">Lithuania</option>
                        <option value="lu">Luxembourg</option>
                        <option value="mo">Macau</option>
                        <option value="mk">Macedonia</option>
                        <option value="mg">Madagascar</option>
                        <option value="mw">Malawi</option>
                        <option value="my">Malaysia</option>
                        <option value="mv">Maldives</option>
                        <option value="ml">Mali</option>
                        <option value="mt">Malta</option>
                        <option value="mh">Marshall Islands</option>
                        <option value="mq">Martinique</option>
                        <option value="mr">Mauritania</option>
                        <option value="mu">Mauritius</option>
                        <option value="yt">Mayotte</option>
                        <option value="mx">Mexico</option>
                        <option value="fm">Micronesia</option>
                        <option value="md">Moldova</option>
                        <option value="mc">Monaco</option>
                        <option value="mn">Mongolia</option>
                        <option value="me">Montenegro</option>
                        <option value="ms">Montserrat</option>
                        <option value="ma">Morocco</option>
                        <option value="mz">Mozambique</option>
                        <option value="na">Namibia</option>
                        <option value="nr">Nauru</option>
                        <option value="np">Nepal</option>
                        <option value="an">Netherlands Antilles</option>
                        <option value="nl">Netherlands</option>
                        <option value="nc">New Caledonia</option>
                        <option value="pg">New Guinea</option>
                        <option value="nz">New Zealand</option>
                        <option value="ni">Nicaragua</option>
                        <option value="ne">Niger</option>
                        <option value="ng">Nigeria</option>
                        <option value="nu">Niue</option>
                        <option value="nf">Norfolk Island</option>
                        <option value="kp">North Korea</option>
                        <option value="mp">Northern Mariana Islands</option>
                        <option value="no">Norway</option>
                        <option value="om">Oman</option>
                        <option value="pk">Pakistan</option>
                        <option value="pw">Palau</option>
                        <option value="ps">Palestine</option>
                        <option value="pa">Panama</option>
                        <option value="py">Paraguay</option>
                        <option value="pe">Peru</option>
                        <option value="ph">Philippines</option>
                        <option value="pn">Pitcairn Islands</option>
                        <option value="pl">Poland</option>
                        <option value="pt">Portugal</option>
                        <option value="pr">Puerto Rico</option>
                        <option value="qa">Qatar</option>
                        <option value="re">Reunion</option>
                        <option value="ro">Romania</option>
                        <option value="ru">Russia</option>
                        <option value="rw">Rwanda</option>
                        <option value="sh">Saint Helena</option>
                        <option value="kn">Saint Kitts and Nevis</option>
                        <option value="lc">Saint Lucia</option>
                        <option value="pm">Saint Pierre</option>
                        <option value="vc">Saint Vincent</option>
                        <option value="ws">Samoa</option>
                        <option value="sm">San Marino</option>
                        <option value="gs">Sandwich Islands</option>
                        <option value="st">Sao Tome</option>
                        <option value="sa">Saudi Arabia</option>
                        <option value="sn">Senegal</option>
                        <option value="cs">Serbia</option>
                        <option value="rs">Serbia</option>
                        <option value="sc">Seychelles</option>
                        <option value="sl">Sierra Leone</option>
                        <option value="sg">Singapore</option>
                        <option value="sk">Slovakia</option>
                        <option value="si">Slovenia</option>
                        <option value="sb">Solomon Islands</option>
                        <option value="so">Somalia</option>
                        <option value="za">South Africa</option>
                        <option value="kr">South Korea</option>
                        <option value="es">Spain</option>
                        <option value="lk">Sri Lanka</option>
                        <option value="sd">Sudan</option>
                        <option value="sr">Suriname</option>
                        <option value="sj">Svalbard</option>
                        <option value="sz">Swaziland</option>
                        <option value="se">Sweden</option>
                        <option value="ch">Switzerland</option>
                        <option value="sy">Syria</option>
                        <option value="tw">Taiwan</option>
                        <option value="tj">Tajikistan</option>
                        <option value="tz">Tanzania</option>
                        <option value="th">Thailand</option>
                        <option value="tl">Timorleste</option>
                        <option value="tg">Togo</option>
                        <option value="tk">Tokelau</option>
                        <option value="to">Tonga</option>
                        <option value="tt">Trinidad</option>
                        <option value="tn">Tunisia</option>
                        <option value="tr">Turkey</option>
                        <option value="tm">Turkmenistan</option>
                        <option value="tv">Tuvalu</option>
                        <option value="ug">Uganda</option>
                        <option value="ua">Ukraine</option>
                        <option value="ae">United Arab Emirates</option>
                        <option value="us">United States</option>
                        <option value="uy">Uruguay</option>
                        <option value="um">Us Minor Islands</option>
                        <option value="vi">Us Virgin Islands</option>
                        <option value="uz">Uzbekistan</option>
                        <option value="vu">Vanuatu</option>
                        <option value="va">Vatican City</option>
                        <option value="ve">Venezuela</option>
                        <option value="vn">Vietnam</option>
                        <option value="wf">Wallis and Futuna</option>
                        <option value="eh">Western Sahara</option>
                        <option value="ye">Yemen</option>
                        <option value="zm">Zambia</option>
                        <option value="zw">Zimbabwe</option>
                    </select>
                </div>
            </div>
        <h4 className="ui dividing header">Doctor's Information</h4>
        <div className="field">
            <label>docter's ID</label>
            <div className="ui selection dropdown">
                <input type="hidden" name="ID"></input>
                <div className="default text">ID Number</div>
            </div>
        </div>
        <div className="fields">
            <div className="seven wide field">
                <label>Designation</label>
                <input type="text" ></input>
            </div>
            <div className="three wide field">
                <label>Age</label>
                <input type="text" ></input>
            </div>
            <div className="six wide field">
                <label>DOB</label>
                <div className="ui calendar" id="example1">
                    <div className="ui input left icon">
                        <i className="calendar icon"></i>
                        <input type="text" placeholder="Date/Time"></input>
                    </div>
                </div>
            </div>
            <div className="six wide field">
                <label>Gender</label>
                <input type="text" name="gender"></input>
            </div>
        </div>
        <div className="fields">
            <div className="eight wide field">
                <label>Email Address</label>
                <input type="text"></input>
            </div>
        </div>
        <h4 className="ui dividing header">Additional Details</h4>
        <DarkButton text="Submit"></DarkButton>
        </form >
                    
    );
};
export default Doctorform;