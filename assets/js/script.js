
var qna =[{
Question:"Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",  
Answers: ["will work perfectly well on a Windows Machine","will be displayed as JavaScript text on the browser","will throw errors and exceptions","must be restricted to a Unix Machine only"],
Correct: "will work perfectly well on a Windows Machine"},{
Question:"Which of the following scoping type does JavaScript use?",
Answers: ["Sequential","Segmental","Lexical","Literal"],
Correct: "Lexical"},{
Question:"How can a datatype be declared to be a constant type?",
Answers : ["const","var","let","constant"],
Correct: "const"},{
Question:"What keyword is used to check whether a given property is valid or not?",
Answers : ["in","is in","exists","lies"],
Correct: "in"},{
Question:"What does the Javascript “debugger” statement do?",
Answers : ["It will debug all the errors in the probgram at runtime.","It acts as a breakpoint in a program","It will debug the error in the current statement if any","It will highlight code that doesn't fit what's expected by the compilor"],
Correct: "It acts as a breakpoint in a program"},{
Question:"Which function is used to serialize an object into a JSON string in Javascript?",
Answers : ["stringify","parse()","makestring()","stringify()"],
Correct: "stringify()"},{
Question:"The 3 basic object attributes in Javascript are:",
Answers : ["Class, prototype, objects' parameters.","Class, prototype, object's extensible flag","Class, parameters, objects's extensible flag","Classes, Native object, and Interfaces and Object's parameters."],
Correct: "Class, prototype, object's extensible flag"},{
Question:"Which of the following methods/operation does javascript use instead of == and !=?",
Answers : ["JavaScript uses equalto()","JavaScript uses equals() and notequals() instead","JavaScript uses bitwise checking","JavaScript uses === and !== instead"],
Correct: "JavaScript uses === and !== instead"},{
Question:"Why event handlers is needed in JS?",
Answers : ["Allows JavaScript code to alter the behaviour of windows"," Adds innerHTML page to the code","Change the server location","Performs handling of exceptions and occurrences"],
Correct: "Allows JavaScript code to alter the behaviour of windows"},{
Question:"Which of the following is not a framework?",
Answers : ["JavaScript .NET","JavaScript","Cocoa JS","jQuery"],
Correct: "JavaScript"},{
Question:"Which of the following is the property that is triggered in response to JS errors?",
Answers : ["onclick","onerror","onmessage","onexception"],
Correct: "onerror"},{
Question:"Which of the following is not an error in JavaScript?",
Answers : ["Missing of Bracket","Division by zero","syntax error","Missing of semicolons"],
Correct: "Division by zero"},{
Question:"Among the given statements, which statement defines closures in JavaScript?",
Answers : ["JavaScript is a function that is enclosed with references to its inner function scope","JavaScript is a function that is enclosed with references to its lexical environment","JavaScript is a function that is enclosed with the object to its inner function scope","JavaScript is a function that is enclosed with references to its global scope"],
Correct: "JavaScript is a function that is enclosed with references to its lexical environment"},{
Question:"Arrays in JavaScript are defined by which of the following statements?",
Answers : ["It is an ordered list of values","It is an ordered list of objects","It is an ordered list of string","It is an ordered list of functions"],
Correct: "It is an ordered list of values"},{
Question:"Where is Client-side JavaScript code is embedded within HTML documents?",
Answers : ["A URL that uses the special javascript:code","A URL that uses the special javascript:protocol","A URL that uses the special javascript:encoding","A URL that uses the special javascript:stack"],
Correct: "A URL that uses the special javascript:protocol"},{
Question:"Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
Answers : ["Position","Window","Standard","Location"],
Correct: "Window"},{
Question:"Which of the following can be used to call a JavaScript Code Snippet?",
Answers : ["Function/Method","Preprocessor","Triggering Event","RMI"],
Correct: "Function/Method"},{
Question:"Which function among the following lets to register a function to be invoked once?",
Answers : ["setTimeout()","setTotaltime()","setInterval()","settime()"],
Correct: "setTimeout()"},{
Question:"Which property is used to obtain browser vendor and version information?",
Answers : ["modal","version","browser","navigator"],
Correct: "navigator"},{
Question:" Which is the handler method used to invoke when uncaught Java2Script exceptions occur?",
Answers : ["onhalt","onerror","both onhalt and onerror","onsuspend"],
Correct: "onerror"}]

question1 = {Question:"Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",  
Answers: ["will work perfectly well on a Windows Machine","will be displayed as JavaScript text on the browser","will throw errors and exceptions","must be restricted to a Unix Machine only"],
Correct: "will work perfectly well on a Windows Machine"}

for (var i=0;i<20;i++){
    let question = qna[i]
    console.log(question.Question)
    console.log(question.Answers[0])
    console.log(question.Answers[1])
    console.log(question.Answers[2])
    console.log(question.Answers[3])
    console.log(question.Correct)
}   







question = qna[1]
console.log(question.Question)
console.log(question.Answers[0])
console.log(question.Answers[1])
console.log(question.Answers[2])
console.log(question.Answers[3])
console.log(question.Correct)
console.log(question1.Question)
console.log(question1.Answers[0])
console.log(question1.Answers[1])
console.log(question1.Answers[2])
console.log(question1.Answers[3])
console.log(question1.Correct)
