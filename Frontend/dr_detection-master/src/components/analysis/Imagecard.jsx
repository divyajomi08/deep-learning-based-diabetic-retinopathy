import React from 'react';

const Image = (props) => {
    return (
        <div className="column">
            <div className="ui small images">
            <img src={props.url} alt="fundus" /> 
            </div>
        </div>
    );

};
export default Image;
