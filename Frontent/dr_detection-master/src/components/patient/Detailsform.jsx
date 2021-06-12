import React from 'react';

const Detailsform = () => {
    return (
        <div className="ui centered grid" >
            {/* <div className="ui equal width grid"> */}

            <h4 className="ui horizontal divider">Personal Information</h4>
            <div className="row">
                <div className="two wide column">
                    <div className="sub header">First Name</div>
                    <div className="ui segment">1</div>
                </div>
                <div className="two wide column">
                    <div className="sub header">Middle Name</div>
                    <div className="ui segment">2</div>
                </div>
                <div className="two wide column">
                    <div className="sub header">Last Name</div>
                    <div className="ui segment">3</div>
                </div>

            </div>
            <div className="row">
                <div className="two wide column">
                    <div className="sub header">Patient ID</div>
                    <div className="ui segment">1</div>
                </div>
                <div className="two wide column">
                    <div className="sub header">Email Address</div>
                    <div className="ui segment">2</div>
                </div>
                <div className="two wide column">
                    <div className="sub header">Phone</div>
                    <div className="ui segment">1</div>
                </div>
            </div>

            <div className="row">

                <div className="two wide column">
                    <div className="sub header">Date Of Birth</div>
                    <div className="ui segment">1</div>
                </div>
                <div className="two wide column">
                    <div className="sub header">Gender</div>
                    <div className="ui segment">2</div>
                </div>
                <div className="two wide column">
                    <div className="sub header">Age</div>
                    <div className="ui segment">3</div>
                </div>
            </div>
            {/* </div>    
                <div className="ui equal width grid"> */}

            <div className="row">
                <div className="two wide column">
                    <div className="sub header">Weight</div>
                    <div className="ui segment">2</div>
                </div>
                <div className="two wide column">
                    <div className="sub header">Height</div>
                    <div className="ui segment">2</div>
                </div>
            </div>
            <div className="row"></div>
            <h4 className="ui horizontal divider">Address</h4>
            <div className="row">
                <div className="six wide column">
                    <div className="sub header">Street Address Line 1</div>
                    <div className="ui segment">1</div>
                </div>
                <div className="six wide column">
                    <div className="sub header">Street Address Line 2</div>
                    <div className="ui segment">2</div>
                </div>
            </div>
            <div className="row">
                <div className="two wide column">
                    <div className="sub header">City</div>
                    <div className="ui segment">1</div>
                </div>
                <div className="two wide column">
                    <div className="sub header">State</div>
                    <div className="ui segment">2</div>
                </div>
                <div className="two wide column">
                    <div className="sub header">Pincode</div>
                    <div className="ui segment">1</div>
                </div>
            </div>


            {/* </div>
                <div className="ui equal width grid"> */}
            <div className="row"></div>
            <h4 className="ui horizontal divider">In Case Of Emergency</h4>

            <div className="row">

                <div className="two wide column">
                    <div className="sub header">First Name</div>
                    <div className="ui segment">2</div>
                </div>
                <div className="two wide column">
                    <div className="sub header">Middle Name</div>
                    <div className="ui segment">2</div>
                </div>
                <div className="two wide column">
                    <div className="sub header">Last Name</div>
                    <div className="ui segment">2</div>
                </div>
            </div>
            <div className="row">
                <div className="two wide column">
                    <div className="sub header">Relationship</div>
                    <div className="ui segment">2</div>
                </div>
                <div className="two wide column">
                    <div className="sub header">Phone</div>
                    <div className="ui segment">2</div>
                </div>
            </div>

            {/* </div>  */}

        </div>

    );
};
export default Detailsform;