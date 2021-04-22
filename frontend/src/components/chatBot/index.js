import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Cookies from "universal-cookie";
import { v4 as uuid } from "uuid";
import Message from "../message";
import Card from "../chatCard";
import QuickReplies from "../quickReplies";
import { faqs, quizQuestions } from "../../helpers/data";
import Timetable from "../timetable";
const cookies = new Cookies();

class Chatbot extends Component {
  messagesEnd;
  talkInput;
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      text: "",
      displayBot: true,
      shopWelcomeSent: false,
      clientToken: false,
      regenerateToken: 0,
      optionType: "",
      chatOptions: [],
      name: "",
      email: "",
      userSaved: false,
      notOnload: false,
      quizIndex: 0,
      quizStarted: false,
      selectedOptions: [],
      score: 0,
      displayResult: false,
      displayTable: false,
    };

    if (cookies.get("users_id") === undefined) {
      cookies.set("users_id", uuid(), { path: "/" });
    }
  }

  // Function to send text query to dialogflow
  // The parameter noPush determines weather the user message should be displayed on the screen or not
  sendTextQuery = async (text, noPush) => {
    let says = {
      speaks: "user",
      msg: {
        text: {
          text: text,
        },
      },
    };
    if (!noPush) {
      this.setState({ messages: [...this.state.messages, says] });
    }
    const request = {
      queryInput: {
        text: {
          text: text,
          languageCode: "en-US",
        },
      },
    };
    await this.callClient(request);
  };

  //   Function to push message to chatbot
  pushMessage = (text) => {
    let says = {
      speaks: "bot",
      msg: {
        text: {
          text: text,
        },
      },
    };
    this.setState({ messages: [...this.state.messages, says] });
  };

  // Function to welcome users to the course
  welcomePracticeUser = () => {
    let says = {
      speaks: "bot",
      msg: {
        text: {
          text: `Welcome ${cookies.get(
            "user_name"
          )}! Your course will start in a moment"`,
        },
      },
    };
    this.setState({ messages: [...this.state.messages, says] });

    setTimeout(() => {
      this.sendTextQuery("teach", true);
    }, 1500);
  };
  // Function to welcome users to the quiz
  welcomeUserToQuiz = () => {
    let says = {
      speaks: "bot",
      msg: {
        text: {
          text: `Hold up tight ${cookies.get(
            "user_name"
          )}! Quiz will be up in a bit."`,
        },
      },
    };
    this.setState({ messages: [...this.state.messages, says] });

    setTimeout(() => {
      this.setState({ quizStarted: true });
    }, 1500);
  };
  // Function to initiate course enrollment
  ask = async () => {
    let question = faqs[Math.floor(Math.random() * faqs.length)];
    let says = {
      speaks: "user",
      msg: {
        text: {
          text: question,
        },
      },
    };
    this.setState({ messages: [...this.state.messages, says] });
    this.talkInput.focus();
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    const request = {
      queryInput: {
        text: {
          text: question,
          languageCode: "en-US",
        },
      },
    };

    setTimeout(async () => {
      await this.callClient(request);
    }, 2000);
  };
  // Function to register users
  registerUser = async () => {
    const payload = {
      name: this.state.name,
      email: this.state.email,
    };

    try {
      let res = await axios.post(
        "https://university-bot-app.herokuapp.com/auth/register",
        payload
      );

      if (res && res.data) {
        cookies.set("user_name", res.data.name);
        cookies.set("user_email", res.data.email);

        if (res.data.existing) {
          this.pushMessage(
            `Looks like you're already enroled with this email, ${res.data.name} `
          );
        }
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //   Function to get is used to query
  sendEventQuery = async (event) => {
    const request = {
      queryInput: {
        event: {
          name: event,
          languageCode: "en-US",
        },
      },
    };

    await this.callClient(request);
  };
  // Fuction to query dialogflow with all user and bot inputs
  callClient = async (request) => {
    try {
      if (this.state.clientToken === false) {
        const res = await axios.get(
          "https://university-bot-app.herokuapp.com/auth/get-token"
        );
        this.setState({ clientToken: res.data.token });
      }

      var config = {
        headers: {
          Authorization: "Bearer " + this.state.clientToken,
          "Content-Type": "application/json; charset=utf-8",
        },
      };

      const res = await axios.post(
        "https://dialogflow.googleapis.com/v2/projects/" +
          "universitybot-pfkg" +
          "/agent/sessions/" +
          "randomstringfortoday!@w9dmWgyIzrF3x2MDP" +
          cookies.get("users_id") +
          ":detectIntent",
        request,
        config
      );

      let says = {};

      if (res.data.queryResult.fulfillmentMessages) {
        for (let msg of res.data.queryResult.fulfillmentMessages) {
          says = {
            speaks: "bot",
            msg: msg,
          };
          let newMsg = msg && msg.text && msg.text.text && msg.text.text[0];

          this.setState({ messages: [...this.state.messages, says] });

          if (newMsg) {
            if (newMsg.includes("course quiz")) {
              setTimeout(() => {
                this.setState({ quizStarted: true });
              }, 1500);
            }
          }
        }
      }

      let userData = res.data.queryResult.parameters;
      let { name, email } = this.state;
      if (!name || !email) {
        this.setState({ name: userData.name, email: userData.email });
      }

      if (userData.name && userData.email) {
        this.setState({ notOnload: true });
      }
    } catch (e) {
      console.log(e);
      if (
        e &&
        e.response &&
        e.response.status === 401 &&
        this.state.regenerateToken < 1
      ) {
        this.setState({ clientToken: false, regenerateToken: 1 });
        this.callClient(request);
      } else if (e) {
        console.log("Inconvenience", e);
        let says = {
          speaks: "bot",
          msg: {
            text: {
              text:
                "I'm having inconveniences. I have to be end. will be back afterward",
            },
          },
        };
        this.setState({ messages: [...this.state.messages, says] });
        let that = this;
        setTimeout(function () {
          that.setState({ displayBot: false });
        }, 2000);
      }
    }
  };

  resolveAfterXSeconds = (x) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, x * 1000);
    });
  };

  async componentDidMount() {
    //   Send welcome query
    this.sendEventQuery("Welcome");
    // To check if user is logged in and get user details onmount

    try {
      let response = await axios.post(
        "https://university-bot-app.herokuapp.com/auth/login",
        { email: cookies.get("user_email") || "" }
      );
      if (response && response.data && response.data.name) {
        cookies.set("user_name", response.data.name);
        cookies.set("user_email", response.data.email);
      }
    } catch (err) {
      console.log(err);
    }

    this.setState({
      name: cookies.get("user_name"),
      email: cookies.get("user_email"),
    });
  }

  componentDidUpdate() {
    let { name, email, userSaved, notOnload, displayResult } = this.state;
    // Scroll to bottom when new text get pushed to the chatbot
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    if (this.talkInput) {
      this.talkInput.focus();
    }
    // Register or get registered user
    if (name && email && !userSaved && notOnload) {
      this.registerUser();
      this.setState({ userSaved: true });
    }
    // Close quiz result
    if (displayResult) {
      setTimeout(() => {
        this.resetQuiz();
      }, 5);
    }
  }
  // To display chatbot
  display(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  //   To compute quiz score
  computeScore(state) {
    let correctAnswers = [];
    let i;
    for (i = 0; i < state.length; i++) {
      if (state[i].status === true) {
        correctAnswers.push(state[i]);
      }
    }

    this.setState({ score: correctAnswers.length });
    if (state.length === 5) {
      this.setState({ displayResult: true });
      this.pushMessage(
        `${this.state.score >= 3 ? "Good job" : "Hmm,"} ${
          this.state.name
        }, your scored ${this.state.score} out of ${quizQuestions.length}`
      );
    }
  }
  //   To

  hide = (event) => {
    event.preventDefault();

    this.setState({ displayBot: true });
  };

  handleQuickReplyPayload = (event, payload, text) => {
    event.preventDefault();

    switch (payload) {
      case "recommended_yes":
        this.sendEventQuery("SHOW_RECOMMENDATIONS");
        break;
      case "training_masterclass":
        this.sendEventQuery("MASTERCLASS");
        break;
      default:
        this.sendTextQuery(text);
        break;
    }
  };
  // Collect selected answers from quiz
  setSelectedOption = (val) => {
    let field = [...this.state.selectedOptions];
    field.push(val);
    this.computeScore(field);
    if (this.state.selectedOptions.length < quizQuestions.length) {
      this.setState({ selectedOptions: field });
    } else {
      return;
    }
    if (this.state.selectedOptions.length < quizQuestions.length - 1) {
      this.setState({
        quizIndex: this.state.quizIndex + 1,
      });
    }
  };

  // Reset quiz parameters
  resetQuiz = () => {
    this.setState({
      quizStarted: false,
      quizIndex: 0,
      selectedOptions: [],
      score: 0,
      displayResult: false,
    });
  };

  //   To display get started cards
  renderCards = (cards) => {
    return cards.map((card, i) => (
      <Card
        key={i}
        payload={card}
        getStarted={() => this.sendTextQuery("Get started", true)}
      />
    ));
  };
  // To display messages
  renderOneMessage = (message, i) => {
    if (message.msg && message.msg.text && message.msg.text.text) {
      return message.msg.text.text ? (
        <Message key={i} speaks={message.speaks} text={message.msg.text.text} />
      ) : null;
    } else if (
      message.msg &&
      message.msg.payload &&
      message.msg.payload.cards
    ) {
      return (
        <div key={i}>
          <div
            className="card-panel grey lighten-5 z-depth-1"
            style={{ padding: "4px 16px", margin: "0.2rem 0 0.8rem" }}
          >
            <div style={{ overflow: "hidden" }}>
              <div className="col s2">
                <a
                  href="/"
                  className="chat_title app_back row j_center a_center"
                >
                  {message.speaks}
                </a>
              </div>
              <div style={{ overflow: "auto", overflowY: "scroll" }}>
                <div
                  style={{
                    height: "fit-content",
                    width: message.msg.payload.cards.length * 270,
                  }}
                >
                  {this.renderCards(message.msg.payload.cards)}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (
      message.msg &&
      message.msg.payload &&
      message.msg.payload.quick_replies
    ) {
      return (
        <QuickReplies
          text={message.msg.payload.text ? message.msg.payload.text : null}
          key={i}
          replyClick={this.handleQuickReplyPayload}
          speaks={message.speaks}
          payload={message.msg.payload.quick_replies}
        />
      );
    } else if (
      message.msg &&
      message.msg.payload &&
      message.msg.payload.points
    ) {
      return (
        <div>
          <div>
            <div
              className="card-panel grey lighten-5 z-depth-1"
              style={{ padding: "4px 16px", margin: "0.2rem 0 0.8rem" }}
            >
              <div style={{ overflow: "hidden" }}>
                <div className="col s2">
                  <a
                    href="/"
                    className="chat_title app_back row j_center a_center"
                  >
                    bot
                  </a>

                  <div className="col s10" style={{ marginBottom: "7px" }}>
                    <span className="black-text">
                      {message.msg.payload.intro}
                    </span>
                  </div>
                </div>
                <div style={{ overflow: "auto", overflowY: "scroll" }}>
                  <div
                    style={{
                      height: "fit-content",
                      width: "100%",
                    }}
                  >
                    <div>
                      {message.msg.payload.points.map((item, i) => {
                        return (
                          <button
                            key={i + item.name}
                            style={{
                              width: " fit-content",
                              height: " fit-content",
                              padding: "10px",
                              borderRadius: "10px",
                              margin: "0 10px 10px 0 ",
                            }}
                            onClick={() => this.sendTextQuery(item.name)}
                          >
                            {item.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  renderMessages(returnedMessages) {
    if (returnedMessages) {
      return returnedMessages.map((message, i) => {
        return this.renderOneMessage(message, i);
      });
    } else {
      return null;
    }
  }

  handleTextSubmit = (e) => {
    e.preventDefault();
    this.sendTextQuery(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    let pillStyle = {
      width: " fit-content",
      height: " fit-content",
      padding: "1px 10px",
      borderRadius: "10px",
      lineHeight: "32px",
    };

    let optionStyle = {
      width: " fit-content",
      height: " fit-content",
      padding: "10px",
      borderRadius: "10px",
      marginRight: "10px",
    };

    let activeOptionStyle = {
      width: " fit-content",
      height: " fit-content",
      padding: "10px",
      borderRadius: "10px",
      marginRight: "10px",
      background: "#F44336",
    };

    let fixedOptionsStyle = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "7px 20px",
      borderBottom: "3px solid #f8f8f8",
      borderTop: "3px solid #f8f8f8",
    };
    if (this.state.displayBot) {
      return (
        <>
          <nav
            style={{
              width: 600,
              position: "fixed",
              bottom: "70vh",
              right: 0,
              height: "50px",
              lineHeight: "50px",
              padding: "0 20px",
            }}
            className="app_back"
          >
            <div className="nav-wrapper">
              <a
                href="/#"
                className="brand-logo white"
                style={{ fontSize: "24px" }}
              >
                ChatBot
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a
                    className="white"
                    href="/#"
                    onClick={() =>
                      this.setState({ displayBot: !this.state.displayBot })
                    }
                  >
                    Close
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div
            style={{
              minHeight: "fit-content",
              maxHeight: "70vh",
              height: "100%",
              width: 600,
              position: "fixed",
              bottom: 2,
              right: 0,
              overflowY: "scroll",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              border: "1px solid #9e9e9e",
              background: "#fff",
            }}
          >
            <div
              id="chatbot"
              style={{
                height: "100%",
                width: "100%",
                overflow: "auto",
              }}
            >
              {this.renderMessages(this.state.messages)}

              {cookies.get("user_name") &&
              cookies.get("user_email") &&
              this.state.quizStarted ? (
                <div>
                  <div>
                    <div
                      className="card-panel grey lighten-5 z-depth-1"
                      style={{ padding: "4px 16px", margin: "0.2rem 0 0.8rem" }}
                    >
                      <div style={{ overflow: "hidden" }}>
                        <div className="col s2">
                          <a
                            href="/"
                            className="chat_title app_back row j_center a_center"
                          >
                            bot
                          </a>

                          <div
                            className="col s10"
                            style={{ marginBottom: "7px" }}
                          >
                            <span className="black-text">
                              {quizQuestions[this.state.quizIndex].question}
                            </span>
                          </div>
                        </div>
                        <div style={{ overflow: "auto", overflowY: "scroll" }}>
                          <div
                            style={{
                              height: "fit-content",
                              width: "100%",
                            }}
                          >
                            <div>
                              {quizQuestions[this.state.quizIndex].answers.map(
                                (item, i) => {
                                  return (
                                    <button
                                      key={i + item.value}
                                      style={
                                        this.state.selectedOptions &&
                                        this.state.selectedOptions[
                                          this.state.quizIndex
                                        ] &&
                                        this.state.selectedOptions[
                                          this.state.quizIndex
                                        ].value === item.value
                                          ? activeOptionStyle
                                          : optionStyle
                                      }
                                      disabled={
                                        this.state.quizIndex !==
                                        quizQuestions.findIndex((ques) => {
                                          return (
                                            ques.question ===
                                            quizQuestions[this.state.quizIndex]
                                              .question
                                          );
                                        })
                                      }
                                      onClick={() =>
                                        this.setSelectedOption(item)
                                      }
                                    >
                                      {item.value}
                                    </button>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              <div
                ref={(el) => {
                  this.messagesEnd = el;
                }}
                style={{ float: "left", clear: "both" }}
              ></div>
            </div>

            <section style={fixedOptionsStyle}>
              <button
                disabled={this.state.quizStarted}
                className="btn-floating btn-auto waves-effect waves-light red"
                style={pillStyle}
                onClick={() => {
                  this.talkInput.focus();
                  if (cookies.get("user_name")) {
                    this.pushMessage(
                      `Welcome back ${cookies.get(
                        "user_name"
                      )}! Hit the "Teaching assistant button to continue your course"`
                    );
                  } else {
                    this.sendTextQuery("recommend", true);
                  }
                }}
              >
                Course enrolment
              </button>
              <button
                className="btn-floating btn-auto waves-effect waves-light red"
                style={pillStyle}
                onClick={this.ask}
                disabled={this.state.quizStarted}
              >
                FAQs
              </button>{" "}
              <button
                className="btn-floating btn-auto waves-effect waves-light red"
                style={pillStyle}
                disabled={this.state.quizStarted}
                onClick={() => {
                  this.talkInput.focus();

                  if (cookies.get("user_name")) {
                    this.welcomeUserToQuiz();
                  } else {
                    this.sendTextQuery("quiz", true);
                  }
                }}
              >
                Quiz
              </button>{" "}
              <button
                className="btn-floating btn-auto waves-effect waves-light red"
                style={pillStyle}
                disabled={this.state.quizStarted}
                onClick={() => {
                  this.talkInput.focus();
                  if (cookies.get("user_name")) {
                    this.welcomePracticeUser();
                  } else {
                    this.sendTextQuery("teach", true);
                  }
                }}
              >
                Teaching assistant
              </button>
              <button
                className="btn-floating btn-auto waves-effect waves-light red"
                style={pillStyle}
                disabled={this.state.quizStarted}
                onClick={() =>
                  this.setState({ displayTable: !this.state.displayTable })
                }
              >
                Time table
              </button>
            </section>

            <Timetable
              display={this.state.displayTable}
              setDisplay={() => this.setState({ displayTable: false })}
            />

            <form
              className=" col s12"
              style={{ width: "100%" }}
              onSubmit={this.handleTextSubmit}
            >
              <input
                disabled={this.state.quizStarted}
                style={{
                  margin: 0,
                  paddingLeft: "1%",
                  paddingRight: "1%",
                  width: "98%",
                  height: "2.5rem",
                }}
                ref={(input) => {
                  this.talkInput = input;
                }}
                value={this.state.text}
                placeholder="type a message:"
                id="user_says"
                type="text"
                onChange={(e) => this.setState({ text: e.target.value })}
              />
            </form>
          </div>
        </>
      );
    } else {
      return (
        <div
          style={{
            minHeight: 40,
            maxHeight: 500,
            width: 600,
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          <nav
            style={{ padding: "0 20px", height: "50px" }}
            className="app_back"
          >
            <div className="nav-wrapper">
              <a
                href="/"
                className="brand-logo"
                style={{ fontSize: "24px", lineHeight: "50px" }}
              >
                ChatBot
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a
                    className="white"
                    style={{ lineHeight: "50px" }}
                    href="#/"
                    onClick={() =>
                      this.setState({ displayBot: !this.state.displayBot })
                    }
                  >
                    Display
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div
            ref={(el) => {
              this.messagesEnd = el;
            }}
            style={{ float: "left", clear: "both" }}
          ></div>
        </div>
      );
    }
  }
}

export default withRouter(Chatbot);
