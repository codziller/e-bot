import React from "react";
import "./styles.css";
const CookiesPropmpt = ({ display, close }) => {
  return display ? (
    <div className="black_back cookies_propmpt row a_center j_center">
      <p className="white">
        This website uses cookies to ensure you get the best experience on our
        website.
      </p>
      <button className="danger_back white ml_1 pointer" onClick={close}>
        GOT IT!
      </button>
    </div>
  ) : null;
};
export default CookiesPropmpt;
