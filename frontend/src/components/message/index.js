import React from "react";
import "./styles.css";
const Message = ({ speaks, text }) => {
  return (
    <div className="col s12 m8 offset-m2 l6 offset-l3 message">
      <div
        className="card-panel grey lighten-5 z-depth-1"
        style={{ padding: "4px 16px", margin: "0.2rem 0 0.8rem" }}
      >
        <div
          className={`row valign-wrapper a_center ${
            speaks === "bot" ? "j_start" : "j_end"
          }`}
          style={{ marginBottom: "3px" }}
        >
          {speaks === "bot" && (
            <div className="col s2 mr_1">
              <div className="chat_title app_back row j_center a_center">
                {speaks}
              </div>
            </div>
          )}
          <div className="col s10">
            <span className="black-text">{text}</span>
          </div>
          {speaks === "user" && (
            <div className="col s2 ml_1">
              <div
                className="btn-floating btn-large waves-effect waves-light red"
                className="chat_title app_back row j_center a_center"
              >
                {speaks}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
