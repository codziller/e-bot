import React from "react";
const Modal = ({ display, name, score, total, setDisplay }) => {
  return display ? (
    <div
      style={{
        position: "fixed",
        zIndex: "9999999999",
        top: "40px",
        left: "40px",
        right: "0px",
        bottom: "0px",
        width: "30%",
        height: "fit-content",
        background: "#fff",
        borderRadius: "10px",
        padding: "15px",
        border: "1px solid #ee6e73",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #ee6e73",
        }}
      >
        <h3>Quiz Result</h3>{" "}
        <span
          onClick={setDisplay}
          style={{
            cursor: "pointer",
            background: "#F44336",
            color: "#fff",
            border: "none",
          }}
        >
          Close
        </span>
      </div>

      <p>
        Weldone {name}, your scored {score} out of {total}
      </p>
    </div>
  ) : null;
};
export default Modal;
