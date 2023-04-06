//set up the variables
var questionArray =[{
Question:"1. Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",  
Answers: ["It will work perfectly well on a Windows Machine","It will be displayed as JavaScript text on the browser","It will throw errors and exceptions","It must be restricted to a Unix Machine only"],
Correct: "It will work perfectly well on a Windows Machine",
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
Question:"9. Why are event handlers is needed in JS?",
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
var time = 300
var questionNum = 0
var qna = questionArray
//var question = qna[questionNum]
var questionCorrect = 0
var questionNum = 0

//create the elements
var body = document.body;
var motherEl = document.getElementById('motherEl');
var timerContainerEl = document.getElementById(timerContainerEl);
var timerEl = document.getElementById("timerEl");
var infoEl = document.getElementById("infoEl");
var h1El = document.getElementById("h1El");
var h2IntroEl = document.getElementById("h2IntroEl");
var quizDiv = document.getElementById("quizDiv");
var button0 = document.getElementById('button0');
var button1 = document.getElementById('button1');
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var envelopEl = document.getElementById("envelopEl");
var beforeStartEl = document.getElementById("beforeStartEl");
var startEl = document.getElementById("startEl");
var buttonStart = document.getElementById("buttonStart")
var cwDiv = document.getElementById("cwDiv");
var horizontal = document.getElementById("horizontal");
var cwEl = document.getElementById("cwEl");


buttonStart.addEventListener("click", start);
console.log ("pushed")
    

function start(){
    buttonStart.setAttribute("style","visibility:hidden");
    console.log ("pushed")
    startTime(time);
    quizDiv.setAttribute("style","display:flex")
  //  startQuiz();
}
console.log("made it here1")  
//updates timer when called
function startTime(time){

var timeInterval = setInterval(function () {

    // As long as the `timeLeft` is greater than 1
    if (time > 1) {
       
        // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = time + ' seconds remaining';
      // Decrement `timeLeft` by 1
      time--;
    } else if (time === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = time + ' second remaining';
      time--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      }
  }, 1000);
}
//function startQuiz(){
question = qna[questionNum]
console.log (question);
console.log(h2IntroEl.textContent)
button0.textContent = question.Answers[0];
button1.textContent = question.Answers[1];
button2.textContent = question.Answers[2];
button3.textContent = question.Answers[3];
h2IntroEl.textContent = question.Question;
questionNum++
/*if (waitForClick(question)){
  questionCorrect++ */
if (questionNum<20){
  console.log(questionNum, questionCorrect)
 }
//}



quizDiv.addEventListener('click', function (event){
event.preventDefault
var answer;
var pushed = (event.target.getAttribute('id')); console.log(pushed);
 console.log(event.target.getAttribute('id'))
    if (pushed == "button3"){
     answer = question.Answers[3];
    console.log ("button3")
  }
  else if (pushed == "button2"){
    answer = question.Answers[2];
    console.log ("button2")
  }
  else if (pushed == "button1"){
    answer = question.Answers[1]
    console.log ("button1")
  }
  else if (pushed == button3){
    answer = question.Answers[0]
    console.log ("button0")
  }
  console.log(question.Answers[0], answer, question.Correct)
  if (answer == question.Correct){
  questionCorrect++
  console.log(event.target.id + "Yay, I got it!" + questionCorrect , questionNum);
  }
  else {
  time=time-10
  console.log(event.target.id + "Return false" + time , questionNum)  
}

question = qna[questionNum]
button0.textContent = question.Answers[0];
button1.textContent = question.Answers[1];
button2.textContent = question.Answers[2];
button3.textContent = question.Answers[3];
h2IntroEl.textContent = question.Question;
questionNum++
})

