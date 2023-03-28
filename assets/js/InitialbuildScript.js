var body = document.body;
var infoEl = document.createElement("div");
var h1El = document.createElement("h1");
//var formEL = document.createElement("form")
//var buttonSubmit = document.createElement("button")
//var buttonBack = document.createElement("button")
//var buttonClearScores = document.createElement("button")
var h2IntroEl = document.createElement("h2");
//var quizEL = document.createElement("div")
//var h2quizEl = document.createElement("h2");
//var button1 = document.createElement("button");
//var button2 = document.createElement("button");
//var button3 = document.createElement("button");
//var button4 = document.createElement("button");
var envelopeEl = document.createElement("div");
var beforeStartEl = document.createElement("div");
var startEl = document.createElement("div");
var buttonStart = document.createElement("button");

h1El.textContent = "Coding Quiz Challenge";
h2IntroEl.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that ten seconds will be deducted from your time with every incorrect answer."
buttonStart.textContent = "Start Quiz"


body.appendChild(infoEl);
infoEl.appendChild(h1El);
infoEl.appendChild(h2IntroEl);
infoEl.appendChild(envelopeEl);
envelopeEl.appendChild(beforeStartEl);
envelopeEl.appendChild(startEl);
startEl.appendChild(buttonStart);

body.setAttribute("style", "position: relative; display:flex; justify-content: center; align-items: center;");
infoEl.setAttribute("style", "margin:auto; width:75%; height:75%; display:flex; flex-direction: column; justify-content: center; align-items: center;");
h1El.setAttribute("style", "margin:auto; width:100%; text-align:center; padding: 50px");
h2IntroEl.setAttribute("Style", "margin:auto; width:90%; text-align:center; padding: 50px");
envelopeEl.setAttribute("Style", "width: 100%; Display: Flex; flex-direction: row; justify-content: flex-end;");
beforeStartEl.setAttribute("Style","width: 75%");
startEl.setAttribute("Style", "width: 25%; justify-content: flex-end; align-items; flex-end");
buttonStart.setAttribute("Style", "background-color:#351c75; color: white; border-radius: 12px;display: flex; justify-content: flex-end; align-items: flex-end;")
