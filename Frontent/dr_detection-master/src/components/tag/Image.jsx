import React from 'react';

const Imagecard = (props) => {
    return (
        <div className="column">
            <div className="ui small images">
            <img src={props.url} alt="fundus"/>
            </div>
        </div>
    );

};
export default Imagecard;
