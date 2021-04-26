import React from "react";
import "./styles.css";
const ChatCard = (props) => {
  return (
    <div
      style={{
        height: "fit-content",
        paddingRight: 30,
        float: "left",
        marginTop: "10px",
      }}
    >
      <div className="">
        <div className="card-image">
          <img
            alt={props.payload.header}
            src={props.payload.image}
            style={{ height: "100px", width: "150px" }}
          />
          <span className="card-title">{props.payload.header}</span>
        </div>

        <div className="card-action app_back">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.payload.link}
            style={{ cursor: "pointer" }}
            onClick={props.getStarted}
            className="white"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
