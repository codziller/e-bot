import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Chatbot from "../../components/chatBot";
import CookiesPropmpt from "../../components/cookiesPrompt";
import Cookies from "universal-cookie";
import "./styles.css";
const cookies = new Cookies();
const App = () => {
  const [displayCookiesPropmt, setDisplayCookiesPropmt] = useState(false);

  useEffect(() => {
    if (!cookies.get("user_name")) {
      setDisplayCookiesPropmt(true);
    }
  }, []);
  return (
    <div className="container">
      <Header />
      <Chatbot />
      <CookiesPropmpt
        display={displayCookiesPropmt}
        close={() => setDisplayCookiesPropmt(false)}
      />
    </div>
  );
};

export default App;
