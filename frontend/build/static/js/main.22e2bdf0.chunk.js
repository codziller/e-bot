(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{30:function(e,t,s){},50:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},78:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),i=s(41),c=s.n(i),r=(s(30),s(19)),o=s(45),l=s(16),d=(s(50),s(0)),u=(new l.a,function(){return Object(d.jsx)("nav",{className:"header app_back",children:Object(d.jsx)("div",{className:"header_title",children:Object(d.jsx)(r.b,{style:{fontSize:"22px",fontWeight:"bold"},to:"/",className:"white bold",children:"Bot-E"})})})}),p=s(43),h=s(4),m=s.n(h),b=s(11),f=s(10),g=s(21),j=s(22),x=s(15),y=s(24),v=s(23),O=s(18),k=s.n(O),w=s(2),_=s(84),S=s(29),N=(s(75),function(e){var t,s=e.speaks,a=e.text;return Object(d.jsx)("div",{className:"col s12 m8 offset-m2 l6 offset-l3 message",children:Object(d.jsx)("div",{className:"card-panel grey lighten-5 z-depth-1",style:{padding:"4px 16px",margin:"0.2rem 0 0.8rem"},children:Object(d.jsxs)("div",{className:"row valign-wrapper a_center ".concat("bot"===s?"j_start":"j_end"),style:{marginBottom:"3px"},children:["bot"===s&&Object(d.jsx)("div",{className:"col s2 mr_1",children:Object(d.jsx)("div",{className:"chat_title app_back row j_center a_center",children:s})}),Object(d.jsx)("div",{className:"col s10",children:Object(d.jsx)("span",{className:"black-text",children:a})}),"you"===s&&Object(d.jsx)("div",{className:"col s2 ml_1",children:Object(d.jsx)("div",(t={className:"btn-floating btn-large waves-effect waves-light red"},Object(S.a)(t,"className","chat_title app_back row j_center a_center"),Object(S.a)(t,"children",s),t))})]})})})}),T=(s(76),function(e){return Object(d.jsx)("div",{style:{height:"fit-content",paddingRight:30,float:"left",marginTop:"10px"},children:Object(d.jsxs)("div",{className:"",children:[Object(d.jsxs)("div",{className:"card-image",children:[Object(d.jsx)("img",{alt:e.payload.header,src:e.payload.image,style:{height:"100px",width:"150px"}}),Object(d.jsx)("span",{className:"card-title",children:e.payload.header})]}),Object(d.jsx)("div",{className:"card-action app_back",children:Object(d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:e.payload.link,style:{cursor:"pointer"},onClick:e.getStarted,className:"white",children:"Get started"})})]})})}),C=function(e){return e.reply.payload?Object(d.jsx)("a",{style:{margin:3},href:"/",className:"btn-floating btn-large waves-effect waves-light red",onClick:function(t){return e.click(t,e.reply.payload,e.reply.text)},children:e.reply.text}):Object(d.jsx)("a",{style:{margin:3},href:e.reply.link,className:"btn-floating btn-large waves-effect waves-light red",children:e.reply.text})},I=function(e){Object(y.a)(s,e);var t=Object(v.a)(s);function s(e){var a;return Object(g.a)(this,s),(a=t.call(this,e))._handleClick=a._handleClick.bind(Object(x.a)(a)),a}return Object(j.a)(s,[{key:"_handleClick",value:function(e,t,s){this.props.replyClick(e,t,s)}},{key:"renderQuickReply",value:function(e,t){return Object(d.jsx)(C,{click:this._handleClick,reply:e},t)}},{key:"renderQuickReplies",value:function(e){var t=this;return e?e.map((function(e,s){return t.renderQuickReply(e,s)})):null}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"col s12 m8 offset-m2 l6 offset-l3",children:Object(d.jsx)("div",{className:"card-panel grey lighten-5 z-depth-1",children:Object(d.jsxs)("div",{className:"row valign-wrapper",children:[Object(d.jsx)("div",{className:"col s2",children:Object(d.jsx)("a",{href:"/",className:"btn-floating btn-large waves-effect waves-light red",children:this.props.speaks})}),Object(d.jsxs)("div",{id:"quick-replies",className:"col s10",children:[this.props.text&&Object(d.jsx)("p",{children:this.props.text}),this.renderQuickReplies(this.props.payload)]})]})})})}}]),s}(a.Component),z=["Which software can we use for prototyping?","What type of car  and target audiences I am designing this for?","Can I use UML diagrams to describe my conceptual model and design idea.","Do I need to submit sketches of the prototype?","Is there anything in particular we need to research for in regards to in-car entertainment and navigation systems? Do we need to do a competitor analysis?","The coursework specification mentions that at least one assumption is to be tested, what do you mean by assumption?","What is the difference between a concept and a conceptual model?","How should I visualise my conceptual model?","What is the difference between 2.1. and 2.2 in the background section (annotated TOC), do I have to write about interaction design theory concepts in 2.2. again?"],q=[{answers:[{status:!0,value:"Time"},{status:!1,value:"Air"}],question:"Which one of the following options is part of the five dimensions in Interaction Design?"},{question:"Which one of the following options is part of the Design Principles in Interaction Design?",answers:[{status:!1,value:"None"},{status:!0,value:"Visibility"}]},{answers:[{status:!0,value:"Evaluating Systems"},{value:"Testing",status:!1}],question:"What do we utilize Usability Principles for?"},{answers:[{status:!0,value:"Designing Interactive Products"},{status:!1,value:"Programming"}],question:"Interaction Design is concerned with?"},{answers:[{status:!0,value:"Career option"},{status:!1,value:"Purchase"}],question:"Interaction Design can be a potential____?"}],R=s(44),Q=s(13),M=s.n(Q),B=(s(78),function(e){var t=e.display,s=e.setDisplay,a={monday:[{id:1,name:"HCI",type:"custom",startTime:M()("2018-02-23T11:30:00"),endTime:M()("2018-02-23T13:30:00")}],tuesday:[{id:2,name:"AI",type:"custom",startTime:M()("2018-02-22T12:30:00"),endTime:M()("2018-02-22T14:30:00")},{id:3,name:"ML",type:"custom",startTime:M()("2018-02-22T16:30:00"),endTime:M()("2018-02-22T18:45:00")}],wednesday:[],thursday:[],friday:[]};return t?Object(d.jsxs)("div",{style:{position:"fixed",zIndex:"9999999999",top:"20px",left:"0px",bottom:"20px",width:"70%",height:"90vh",background:"#fff",borderRadius:"10px",padding:"15px",border:"1px solid #ee6e73",overflow:"scroll"},children:[Object(d.jsxs)("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #ee6e73"},children:[Object(d.jsx)("h3",{children:"Time Table"})," ",Object(d.jsx)("button",{onClick:s,style:{cursor:"pointer",background:"#F44336",color:"#fff",border:"none"},children:"Close"})]}),Object(d.jsx)(R.a,{events:a})]}):null}),D=(s(79),new l.a),E=function(e){Object(y.a)(s,e);var t=Object(v.a)(s);function s(e){var a;return Object(g.a)(this,s),(a=t.call(this,e)).sendTextQuery=function(){var e=Object(f.a)(m.a.mark((function e(t,s){var n,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={speaks:"you",msg:{text:{text:t}}},s||a.setState({messages:[].concat(Object(b.a)(a.state.messages),[n])}),i={queryInput:{text:{text:t,languageCode:"en-US"}}},e.next=5,a.callClient(i);case 5:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),a.pushMessage=function(e){var t={speaks:"bot",msg:{text:{text:e}}};a.setState({messages:[].concat(Object(b.a)(a.state.messages),[t])})},a.welcomePracticeUser=function(){var e={speaks:"bot",msg:{text:{text:"Welcome ".concat(D.get("user_name"),'! Your course will start in a moment"')}}};a.setState({messages:[].concat(Object(b.a)(a.state.messages),[e])}),setTimeout((function(){a.sendTextQuery("teach",!0)}),1500)},a.welcomeUserToQuiz=function(){var e={speaks:"bot",msg:{text:{text:"Hold up tight ".concat(D.get("user_name"),'! Quiz will be up in a bit."')}}};a.setState({messages:[].concat(Object(b.a)(a.state.messages),[e])}),setTimeout((function(){a.setState({quizStarted:!0})}),1500)},a.ask=Object(f.a)(m.a.mark((function e(){var t,s,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=z[Math.floor(Math.random()*z.length)],s={speaks:"you",msg:{text:{text:t}}},a.setState({messages:[].concat(Object(b.a)(a.state.messages),[s])}),a.talkInput.focus(),a.messagesEnd.scrollIntoView({behavior:"smooth"}),n={queryInput:{text:{text:t,languageCode:"en-US"}}},setTimeout(Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.callClient(n);case 2:case"end":return e.stop()}}),e)}))),2e3);case 7:case"end":return e.stop()}}),e)}))),a.registerUser=Object(f.a)(m.a.mark((function e(){var t,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:a.state.name,email:a.state.email},e.prev=1,e.next=4,k.a.post("http://localhost:5000/auth/register",t);case 4:(s=e.sent)&&s.data&&(D.set("user_name",s.data.name),D.set("user_email",s.data.email),D.set("user_id",s.data._id),s.data.existing&&a.pushMessage("Looks like you're already enroled with this email, ".concat(s.data.name," ")),console.log(s.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),a.sendEventQuery=function(){var e=Object(f.a)(m.a.mark((function e(t){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={queryInput:{event:{name:t,languageCode:"en-US"}}},e.next=3,a.callClient(s);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.callClient=function(){var e=Object(f.a)(m.a.mark((function e(t){var s,n,i,c,r,o,l,d,u,h,f,g,j,y;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!1!==a.state.clientToken){e.next=6;break}return e.next=4,k.a.get("http://localhost:5000/auth/get-token");case 4:s=e.sent,a.setState({clientToken:s.data.token});case 6:return n={headers:{Authorization:"Bearer "+a.state.clientToken,"Content-Type":"application/json; charset=utf-8"}},e.next=9,k.a.post("https://dialogflow.googleapis.com/v2/projects/universitybot-pfkg/agent/sessions/randomstringfortoday!@w9dmWgyIzrF3x2MDP"+D.get("users_id")+":detectIntent",t,n);case 9:if(i=e.sent,c={},i.data.queryResult.fulfillmentMessages){r=Object(p.a)(i.data.queryResult.fulfillmentMessages);try{for(r.s();!(o=r.n()).done;)l=o.value,c={speaks:"bot",msg:l},d=l&&l.text&&l.text.text&&l.text.text[0],a.setState({messages:[].concat(Object(b.a)(a.state.messages),[c])}),d&&d.includes("course quiz")&&setTimeout((function(){a.setState({quizStarted:!0})}),1500)}catch(m){r.e(m)}finally{r.f()}}u=i.data.queryResult.parameters,h=a.state,f=h.name,g=h.email,f&&g||a.setState({name:u.name,email:u.email}),u.name&&u.email&&a.setState({notOnload:!0}),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0),e.t0&&e.t0.response&&401===e.t0.response.status&&a.state.regenerateToken<1?(a.setState({clientToken:!1,regenerateToken:1}),a.callClient(t)):e.t0&&(console.log("Inconvenience",e.t0),j={speaks:"bot",msg:{text:{text:"Aww, you might want to check you internet!"}}},a.setState({messages:[].concat(Object(b.a)(a.state.messages),[j])}),y=Object(x.a)(a),setTimeout((function(){y.setState({displayBot:!1})}),1e4));case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}(),a.handleQuickReplyPayload=function(e,t,s){switch(e.preventDefault(),t){case"recommended_yes":a.sendEventQuery("SHOW_RECOMMENDATIONS");break;case"training_masterclass":a.sendEventQuery("MASTERCLASS");break;default:a.sendTextQuery(s)}},a.setSelectedOption=function(e){var t=Object(b.a)(a.state.selectedOptions);t.push(e),a.computeScore(t),a.state.selectedOptions.length<q.length&&(a.setState({selectedOptions:t}),a.state.selectedOptions.length<q.length-1&&a.setState({quizIndex:a.state.quizIndex+1}))},a.resetQuiz=function(){a.setState({quizStarted:!1,quizIndex:0,selectedOptions:[],score:0,displayResult:!1})},a.logout=function(){D.remove("user_id"),D.remove("user_name"),D.remove("user_email"),alert("Logged out successfully"),a.setState({displayBot:!1}),window.location.reload()},a.feedbackPrompt=function(){a.setState({logoutReady:!0}),a.pushMessage("Before you logout, kindly drop a feedback for me, thank you.")},a.sendFeedback=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.put("http://localhost:5000/feedback/".concat(D.get("user_id")),{feedback:a.state.text});case 3:t=e.sent,console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,a.logout(),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])}))),a.renderCards=function(e){return e.map((function(e,t){return Object(d.jsx)(T,{payload:e,getStarted:function(){return a.sendTextQuery("Get started",!0)}},t)}))},a.renderOneMessage=function(e,t){return e.msg&&e.msg.text&&e.msg.text.text?e.msg.text.text?Object(d.jsx)(N,{speaks:e.speaks,text:e.msg.text.text},t):null:e.msg&&e.msg.payload&&e.msg.payload.cards?Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"card-panel grey lighten-5 z-depth-1",style:{padding:"4px 16px",margin:"0.2rem 0 0.8rem"},children:Object(d.jsxs)("div",{style:{overflow:"hidden"},children:[Object(d.jsx)("div",{className:"col s2",children:Object(d.jsx)("a",{href:"/",className:"chat_title app_back row j_center a_center",children:e.speaks})}),Object(d.jsx)("div",{style:{overflow:"auto",overflowY:"scroll"},children:Object(d.jsx)("div",{style:{height:"fit-content",width:270*e.msg.payload.cards.length},children:a.renderCards(e.msg.payload.cards)})})]})})},t):e.msg&&e.msg.payload&&e.msg.payload.quick_replies?Object(d.jsx)(I,{text:e.msg.payload.text?e.msg.payload.text:null,replyClick:a.handleQuickReplyPayload,speaks:e.speaks,payload:e.msg.payload.quick_replies},t):e.msg&&e.msg.payload&&e.msg.payload.points?Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"card-panel grey lighten-5 z-depth-1",style:{padding:"4px 16px",margin:"0.2rem 0 0.8rem"},children:Object(d.jsxs)("div",{style:{overflow:"hidden"},children:[Object(d.jsxs)("div",{className:"col s2",children:[Object(d.jsx)("a",{href:"/",className:"chat_title app_back row j_center a_center",children:"bot"}),Object(d.jsx)("div",{className:"col s10",style:{marginBottom:"7px"},children:Object(d.jsx)("span",{className:"black-text",children:e.msg.payload.intro})})]}),Object(d.jsx)("div",{style:{overflow:"auto",overflowY:"scroll"},children:Object(d.jsx)("div",{style:{height:"fit-content",width:"100%"},children:Object(d.jsx)("div",{children:e.msg.payload.points.map((function(e,t){return Object(d.jsx)("button",{style:{width:" fit-content",height:" fit-content",padding:"10px",borderRadius:"10px",margin:"0 10px 10px 0 "},onClick:function(){return a.sendTextQuery(e.name)},children:e.name},t+e.name)}))})})})]})})})}):void 0},a.handleTextSubmit=function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a.state.logoutReady){e.next=6;break}return e.next=4,a.sendFeedback();case 4:e.next=7;break;case 6:a.sendTextQuery(a.state.text);case 7:a.setState({text:""});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={messages:[],text:"",displayBot:!0,shopWelcomeSent:!1,clientToken:!1,regenerateToken:0,optionType:"",chatOptions:[],name:"",email:"",userSaved:!1,notOnload:!1,quizIndex:0,quizStarted:!1,selectedOptions:[],score:0,displayResult:!1,displayTable:!1,logoutReady:!1},void 0===D.get("users_id")&&D.set("users_id",Object(_.a)(),{path:"/"}),a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.sendEventQuery("Welcome"),e.prev=1,e.next=4,k.a.post("http://localhost:5000/auth/login",{email:D.get("user_email")||""});case 4:(t=e.sent)&&t.data&&t.data.name&&(D.set("user_name",t.data.name),D.set("user_email",t.data.email),D.set("user_id",t.data._id)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:this.setState({name:D.get("user_name"),email:D.get("user_email")});case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=this,t=this.state,s=t.name,a=t.email,n=t.userSaved,i=t.notOnload,c=t.displayResult;this.messagesEnd.scrollIntoView({behavior:"smooth"}),this.talkInput&&this.talkInput.focus(),s&&a&&!n&&i&&(this.registerUser(),this.setState({userSaved:!0})),c&&setTimeout((function(){e.resetQuiz()}),5)}},{key:"computeScore",value:function(e){var t,s=[];for(t=0;t<e.length;t++)!0===e[t].status&&s.push(e[t]);this.setState({score:s.length}),5===e.length&&(this.setState({displayResult:!0}),this.pushMessage("".concat(this.state.score>=3?"Good job":"Hmm,"," ").concat(this.state.name,", your scored ").concat(this.state.score," out of ").concat(q.length)))}},{key:"renderMessages",value:function(e){var t=this;return e?e.map((function(e,s){return t.renderOneMessage(e,s)})):null}},{key:"render",value:function(){var e=this,t={width:" fit-content",height:" fit-content",padding:"1px 10px",borderRadius:"10px",lineHeight:"32px",whiteSpace:"nowrap",marginRight:"10px"},s={width:" fit-content",height:" fit-content",padding:"10px",borderRadius:"10px",marginRight:"10px"},a={width:" fit-content",height:" fit-content",padding:"10px",borderRadius:"10px",marginRight:"10px",background:"#F44336"};return this.state.displayBot?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("nav",{style:{},className:"app_back bot-head",children:Object(d.jsxs)("div",{className:"nav-wrapper row a_center j_between",children:[Object(d.jsx)("a",{href:"/#",className:"brand-logo white",style:{fontSize:"24px"},children:"Bot-E"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"white pointer mr_1",href:"/#",onClick:function(){return e.setState({displayBot:!e.state.displayBot})},children:"Hide"}),D.get("user_email")&&Object(d.jsx)("span",{className:"pointer danger",onClick:function(){e.feedbackPrompt()},children:"Logout"})]})]})}),Object(d.jsxs)("div",{className:"bot-body",children:[Object(d.jsxs)("div",{id:"chatbot",children:[this.renderMessages(this.state.messages),D.get("user_name")&&D.get("user_email")&&this.state.quizStarted?Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"card-panel grey lighten-5 z-depth-1",style:{padding:"4px 16px",margin:"0.2rem 0 0.8rem"},children:Object(d.jsxs)("div",{style:{overflow:"hidden"},children:[Object(d.jsxs)("div",{className:"col s2",children:[Object(d.jsx)("a",{href:"/",className:"chat_title app_back row j_center a_center",children:"bot"}),Object(d.jsx)("div",{className:"col s10",style:{marginBottom:"7px"},children:Object(d.jsx)("span",{className:"black-text",children:q[this.state.quizIndex].question})})]}),Object(d.jsx)("div",{style:{overflow:"auto",overflowY:"scroll"},children:Object(d.jsx)("div",{style:{height:"fit-content",width:"100%"},children:Object(d.jsx)("div",{children:q[this.state.quizIndex].answers.map((function(t,n){return Object(d.jsx)("button",{style:e.state.selectedOptions&&e.state.selectedOptions[e.state.quizIndex]&&e.state.selectedOptions[e.state.quizIndex].value===t.value?a:s,disabled:e.state.quizIndex!==q.findIndex((function(t){return t.question===q[e.state.quizIndex].question})),onClick:function(){return e.setSelectedOption(t)},children:t.value},n+t.value)}))})})})]})})})}):null,Object(d.jsx)("div",{ref:function(t){e.messagesEnd=t},style:{float:"left",clear:"both"}})]}),Object(d.jsxs)("section",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"7px 20px",borderBottom:"3px solid #f8f8f8",borderTop:"3px solid #f8f8f8",overflowX:"scroll"},children:[Object(d.jsx)("button",{disabled:this.state.quizStarted,className:"btn-floating btn-auto waves-effect waves-light red",style:t,onClick:function(){e.talkInput.focus(),D.get("user_name")?e.pushMessage("Welcome back ".concat(D.get("user_name"),'! Hit the "Teaching assistant button to continue your course"')):e.sendTextQuery("recommend",!0)},children:"Course enrolment"}),Object(d.jsx)("button",{className:"btn-floating btn-auto waves-effect waves-light red",style:t,onClick:this.ask,disabled:this.state.quizStarted,children:"FAQs"})," ",Object(d.jsx)("button",{className:"btn-floating btn-auto waves-effect waves-light red",style:t,disabled:this.state.quizStarted,onClick:function(){e.talkInput.focus(),D.get("user_name")?e.welcomeUserToQuiz():e.sendTextQuery("quiz",!0)},children:"Quiz"})," ",Object(d.jsx)("button",{className:"btn-floating btn-auto waves-effect waves-light red",style:t,disabled:this.state.quizStarted,onClick:function(){e.talkInput.focus(),D.get("user_name")?e.welcomePracticeUser():e.sendTextQuery("teach",!0)},children:"Teaching assistant"}),Object(d.jsx)("button",{className:"btn-floating btn-auto waves-effect waves-light red",style:t,disabled:this.state.quizStarted,onClick:function(){return e.setState({displayTable:!e.state.displayTable})},children:"Time table"})]}),Object(d.jsx)(B,{display:this.state.displayTable,setDisplay:function(){return e.setState({displayTable:!1})}}),Object(d.jsx)("form",{className:" col s12",style:{width:"100%"},onSubmit:this.handleTextSubmit,children:Object(d.jsx)("input",{disabled:this.state.quizStarted,style:{margin:0,paddingLeft:"7px",paddingRight:"7px",width:"100%",height:"2.5rem",fontSize:"16px"},ref:function(t){e.talkInput=t},value:this.state.text,placeholder:"type a message:",id:"user_says",type:"text",onChange:function(t){return e.setState({text:t.target.value})}})})]})]}):Object(d.jsxs)("div",{className:"bot-closed",children:[Object(d.jsx)("nav",{style:{padding:"0 20px",height:"50px"},className:"app_back",children:Object(d.jsxs)("div",{className:"nav-wrapper row a_center j_between",children:[Object(d.jsx)("a",{href:"/#",className:"brand-logo white",style:{fontSize:"24px"},children:"Bot-E"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"white pointer mr_1",href:"/#",onClick:function(){return e.setState({displayBot:!e.state.displayBot})},children:"Display"}),D.get("user_email")&&Object(d.jsx)("span",{className:"pointer danger",onClick:function(){e.feedbackPrompt()},children:"Logout"})]})]})}),Object(d.jsx)("div",{ref:function(t){e.messagesEnd=t},style:{float:"left",clear:"both"}})]})}}]),s}(a.Component),P=Object(w.d)(E),W=(s(80),function(e){var t=e.display,s=e.close;return t?Object(d.jsxs)("div",{className:"black_back cookies_propmpt row a_center j_center",children:[Object(d.jsx)("p",{className:"white",children:"This website uses cookies to ensure you get the best experience on our website."}),Object(d.jsx)("button",{className:"danger_back white ml_1 pointer",onClick:s,children:"GOT IT!"})]}):null}),U=(s(81),new l.a),F=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),s=t[0],n=t[1];return Object(a.useEffect)((function(){U.get("user_name")||n(!0)}),[]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(u,{}),Object(d.jsx)(P,{}),Object(d.jsx)(W,{display:s,close:function(){return n(!1)}})]})};var L=function(){return Object(d.jsx)(r.a,{children:Object(d.jsx)(F,{})})},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,85)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))};c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root")),A()}},[[82,1,2]]]);
//# sourceMappingURL=main.22e2bdf0.chunk.js.map