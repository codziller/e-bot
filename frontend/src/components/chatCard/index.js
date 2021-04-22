import React from "react";

const ChatCard = (props) => {
  return (
    <div style={{ height: "fit-content", paddingRight: 30, float: "left" }}>
      <div className="card">
        <div
          className="card-image"
          style={{ width: 200, height: "fit-content" }}
        >
          <img
            alt={props.payload.header}
            src={props.payload.image}
            style={{ height: "100px" }}
          />
          <span className="card-title" style={{ fontWeight: "bolder" }}>
            {props.payload.header}
          </span>
        </div>

        <div className="card-action" style={{ padding: "7px 24px" }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.payload.link}
            style={{ cursor: "pointer" }}
            onClick={props.getStarted}
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
