import React from 'react';

const Doctordetails = () => {
    return (
        <div className="ui centered grid" >
            {/* <div className="ui equal width grid"> */}
            <div className="row"></div>
            <h4 className="ui horizontal divider">Personal Information</h4>
            <div className="row">
                <div className="four wide column">
                    <div className="sub header">First Name</div>
                    <div className="ui segment">1</div>
                </div>
                <div className="four wide column">
                    <div className="sub header">Last Name</div>
                    <div className="ui segment">3</div>
                </div>
                <div className="four wide column">
                    <div className="sub header">Doctors ID</div>
                    <div className="ui segment">1</div>
                </div>

            </div>
            <div className="row">
                <div className="four wide column">
                    <div className="sub header">Designation</div>
                    <div className="ui segment">2</div>
                </div>
                <div className="four wide column">
                    <div className="sub header">Email Address</div>
                    <div className="ui segment">1</div>
                </div>
                <div className="four wide column">
                    <div className="sub header">Phone</div>
                    <div className="ui segment">1</div>
                </div>
            </div>

            <div className="row">

                <div className="four wide column">
                    <div className="sub header">Date Of Birth</div>
                    <div className="ui segment">1</div>
                </div>
                <div className="four wide column">
                    <div className="sub header">Gender</div>
                    <div className="ui segment">2</div>
                </div>
                <div className="four wide column">
                    <div className="sub header">Age</div>
                    <div className="ui segment">3</div>
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
                <div className="four wide column">
                    <div className="sub header">State</div>
                    <div className="ui segment">1</div>
                </div>
                <div className="four wide column">
                    <div className="sub header">Country</div>
                    <div className="ui segment">2</div>
                </div>
            </div>
        </div>

    );
};
export default Doctordetails;