//set up the variables
var questionArray =[{
Question:"1. Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",  
Answers: ["will work perfectly well on a Windows Machine","will be displayed as JavaScript text on the browser","will throw errors and exceptions","must be restricted to a Unix Machine only"],
Correct: "will work perfectly well on a Windows Machine",
button: "120px"},{
Question:"2. Which of the following scoping type does JavaScript use?",
Answers: ["Sequential","Segmental","Lexical","Literal"],
Correct: "Lexical"},{
Question:"3. How can a datatype be declared to be a constant type?",
Answers : ["const","var","let","constant"],
Correct: "const"},{
Question:"4. What keyword is used to check whether a given property is valid or not?",
Answers : ["in","is in","exists","lies"],
Correct: "in"},{
Question:"5. What does the Javascript “debugger” statement do?",
Answers : ["It will debug all the errors in the probgram at runtime.","It acts as a breakpoint in a program","It will debug the error in the current statement if any","It will highlight code that doesn't fit what's expected by the compilor"],
Correct: "It acts as a breakpoint in a program"},{
Question:"6. Which function is used to serialize an object into a JSON string in Javascript?",
Answers : ["stringify","parse()","makestring()","stringify()"],
Correct: "stringify()"},{
Question:"7. The 3 basic object attributes in Javascript are:",
Answers : ["Class, prototype, objects' parameters.","Class, prototype, object's extensible flag","Class, parameters, objects's extensible flag","Classes, Native object, and Interfaces and Object's parameters."],
Correct: "Class, prototype, object's extensible flag"},{
Question:"8. Which of the following methods/operation does javascript use instead of == and !=?",
Answers : ["JavaScript uses equalto()","JavaScript uses equals() and notequals() instead","JavaScript uses bitwise checking","JavaScript uses === and !== instead"],
Correct: "JavaScript uses === and !== instead"},{
Question:"9. Why event handlers is needed in JS?",
Answers : ["Allows JavaScript code to alter the behaviour of windows"," Adds innerHTML page to the code","Change the server location","Performs handling of exceptions and occurrences"],
Correct: "Allows JavaScript code to alter the behaviour of windows"},{
Question:"10. Which of the following is not a framework?",
Answers : ["JavaScript .NET","JavaScript","Cocoa JS","jQuery"],
Correct: "JavaScript"},{
Question:"11. Which of the following is the property that is triggered in response to JS errors?",
Answers : ["onclick","onerror","onmessage","onexception"],
Correct: "onerror"},{
Question:"12. Which of the following is not an error in JavaScript?",
Answers : ["Missing of Bracket","Division by zero","syntax error","Missing of semicolons"],
Correct: "Division by zero"},{
Question:"13. Among the given statements, which statement defines closures in JavaScript?",
Answers : ["JavaScript is a function that is enclosed with references to its inner function scope","JavaScript is a function that is enclosed with references to its lexical environment","JavaScript is a function that is enclosed with the object to its inner function scope","JavaScript is a function that is enclosed with references to its global scope"],
Correct: "JavaScript is a function that is enclosed with references to its lexical environment"},{
Question:"14. Arrays in JavaScript are defined by which of the following statements?",
Answers : ["It is an ordered list of values","It is an ordered list of objects","It is an ordered list of string","It is an ordered list of functions"],
Correct: "It is an ordered list of values"},{
Question:"15. Where is Client-side JavaScript code is embedded within HTML documents?",
Answers : ["A URL that uses the special javascript:code","A URL that uses the special javascript:protocol","A URL that uses the special javascript:encoding","A URL that uses the special javascript:stack"],
Correct: "A URL that uses the special javascript:protocol"},{
Question:"16. Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
Answers : ["Position","Window","Standard","Location"],
Correct: "Window",
button: "10px"},{
Question:"17. Which of the following can be used to call a JavaScript Code Snippet?",
Answers : ["Function/Method","Preprocessor","Triggering Event","RMI"],
Correct: "Function/Method"},{
Question:"18. Which function among the following lets to register a function to be invoked once?",
Answers : ["setTimeout()","setTotaltime()","setInterval()","settime()"],
Correct: "setTimeout()"},{
Question:"19. Which property is used to obtain browser vendor and version information?",
Answers : ["modal","version","browser","navigator"],
Correct: "navigator"},{
Question:"20. Which is the handler method used to invoke when uncaught Java2Script exceptions occur?",
Answers : ["onhalt","onerror","both onhalt and onerror","onsuspend"],
Correct: "onerror"}]
var qna = questionArray;
var question;
var correctNum = 0;
var time=60
var questionNum = -1

//create the elements
var body = document.body;
var motherEl = document.createElement("div");
var belowBottomEl = document.createElement("div");
var timercontEl = document.createElement("div");
var infoEl = document.createElement("div");
var h1El = document.createElement("h1");
var h2IntroEl = document.createElement("h2");
var envElopeEl = document.createElement("div");
var beforeStartEl = document.createElement("div");
var startEl = document.createElement("div");
var line = document.createElement("hr");
var quizDiv = document.createElement("div")
var button0 = document.createElement("button");
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var timerEl = document.createElement('h4')
var buttonStart = document.createElement("button");


// place the elements and set their settings
h1El.textContent = "Coding Quiz Challenge";
h2IntroEl.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that ten seconds will be deducted from your time with every incorrect answer."
console.log (h2IntroEl)
buttonStart.textContent = "Start Quiz"
var dtime = ""
body.appendChild(motherEl)
motherEl.appendChild(timercontEl);
motherEl.appendChild(infoEl);
motherEl.appendChild(belowBottomEl);
belowBottomEl.appendChild(line);
timercontEl.appendChild(timerEl);
infoEl.appendChild(h1El);
infoEl.appendChild(h2IntroEl);
infoEl.appendChild(quizDiv);
infoEl.appendChild(envElopeEl);
envElopeEl.appendChild(beforeStartEl);
envElopeEl.appendChild(startEl);
startEl.appendChild(buttonStart);
quizDiv.setAttribute("class","quizDiv")
quizDiv.setAttribute("Style","display: flex; flex-direction: column; align-content: flex-start; Justify-content: flex-start;")
motherEl.setAttribute("style", "display:flex; flex-direction: column;")
motherEl.setAttribute("class","mother")
timercontEl.setAttribute("style", "display:flex; flex-direction:row; height: 20px; width: 100%;")
timerEl.setAttribute("style", "width: 100%;")
body.setAttribute("style", "position: relative; display:flex; justify-content: center; align-items: center;");
infoEl.setAttribute("style", "margin:auto; width:75%; height:75%; display:flex; flex-direction: column; justify-content: flex-start; align-items: flex-start;");
h1El.setAttribute("style", "margin:auto; width:100%; text-align:center; padding-bottom: 50px;padding-top: 0px");
h2IntroEl.setAttribute("Style", "margin:auto; width:90%; text-align:left; padding-top: 50px; padding-bottom: 5px;");
envElopeEl.setAttribute("Style", "width: 100%; Display: Flex; flex-direction: row; justify-content: flex-end;");
beforeStartEl.setAttribute("Style","width: 75%");
startEl.setAttribute("Style", "width: 25%; justify-content: flex-end; align-items; flex-end");

qna = questionArray

function buttonClicked(){
h2IntroEl.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that ten seconds will be deducted from your time with every incorrect answer."
buttonStart.setAttribute("Style","visibility: hidden;");
infoEl.setAttribute("style", "width: 100%:");
quizDiv.setAttribute("sytle", "width: 50%;");
quizDiv.appendChild(button0);
quizDiv.appendChild(button1);
quizDiv.appendChild(button2);
quizDiv.appendChild(button3);
start();
}

buttonStart.addEventListener("click", buttonClicked);


function start() {
for (let i=0; i<20; i++){
console.log(i, time)
var question = qna[i];
h2IntroEl.textContent = question.Question;
button0.textContent = question.Answers[0];
button1.textContent = question.Answers[1];
button2.textContent = question.Answers[2];
button3.textContent = question.Answers[3];

button0.addEventListener("click", function
button1.addEventListener("click", function
button2.addEventListener("click", function)
button3.addEventListener("click", function)
}

function button0(){
    
}
start()
//updates timer when called
function displayTime(time){
    if (time<=60){
    if (time%60<10){
        stime = "0"+time%60
    }
    }
    dtime = 'Time: '+time/60+':'+stime
    console.log (dtime)
    timerEl.textContent = dtime
    }