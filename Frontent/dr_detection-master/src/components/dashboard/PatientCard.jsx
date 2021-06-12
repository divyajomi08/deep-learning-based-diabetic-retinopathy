import React from "react";
import { Progress } from "semantic-ui-react";
const Card = (props) => {
  return (
    <div className="column">
      <div className="ui card">
        <div className="content">
          <div className="header">{props.title}</div>
        </div>
        <div className="content">
          {props.title === "Pending" ? (
            <Progress percent={parseInt(props.value, 10)} progress error />
          ) : (
            <Progress percent={parseInt(props.value, 10)} progress success />
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
