import React from "react";
import Timetable from "react-timetable-events";
import moment from "moment";
import "./styles.css";
const TimeTable = ({ display, setDisplay }) => {
  const events = {
    monday: [
      {
        id: 1,
        name: "HCI",
        type: "custom",
        startTime: moment("2018-02-23T11:30:00"),
        endTime: moment("2018-02-23T13:30:00"),
      },
    ],
    tuesday: [
      {
        id: 2,
        name: "AI",
        type: "custom",
        startTime: moment("2018-02-22T12:30:00"),
        endTime: moment("2018-02-22T14:30:00"),
      },
      {
        id: 3,
        name: "ML",
        type: "custom",
        startTime: moment("2018-02-22T16:30:00"),
        endTime: moment("2018-02-22T18:45:00"),
      },
    ],
    wednesday: [],
    thursday: [],
    friday: [],
  };
  return display ? (
    <div
      style={{
        position: "fixed",
        zIndex: "9999999999",
        top: "20px",
        left: "0px",
        bottom: "20px",
        width: "70%",
        height: "90vh",
        background: "#fff",
        borderRadius: "10px",
        padding: "15px",
        border: "1px solid #ee6e73",
        overflow: "scroll",
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
        <h3>Time Table</h3>{" "}
        <button
          onClick={setDisplay}
          style={{
            cursor: "pointer",
            background: "#F44336",
            color: "#fff",
            border: "none",
          }}
        >
          Close
        </button>
      </div>
      <Timetable events={events} />
    </div>
  ) : null;
};
export default TimeTable;
