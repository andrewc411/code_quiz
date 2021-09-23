var timerId; 
var time = 15; 
console.log(timerId)
console.log(time)

const startButton = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-container')
var timeEl = document.getElementById("time");
console.log(timeEl)
var mainEl = document.getElementById("main");

var btnEl = document.createElement("li");

var btn1 = document.createElement("button")
var btn2 = document.createElement("button")
var btn3 = document.createElement("button")
var btn4 = document.createElement("button")

btn1.textContent = "Answer 1"
btn2.textContent = "Answer 2"
btn3.textContent = "Answer 3"
btn4.textContent = "Answer 4"

btnEl.appendChild(btn1);
btnEl.appendChild(btn2);
btnEl.appendChild(btn3);
btnEl.appendChild(btn4);

startButton.addEventListener('click', setInterval)

function beginQuiz() { 
    
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    
/// code goes here 

timerId = setInterval(tikTok, 1000);
console.log(timerId)    

timeEl.textContent =time;

/// code goes here 

}

function tikTok() { 
    time--; 
    timeEl.textContent = time; 

    if (time <= 0) [ 
        clearInterval(tikTok)
        /// code goes here. 
    ]
}
clearInterval(tikTok);
beginQuiz();


// var secondsLeft = 10;

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = "Complete before time expires: " + secondsLeft;

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
//   }
// startButton.addEventListener('click', setInterval)

// function sendMessage() {
//     timeEl.textContent = "time out!";
  
//   }
  
//   setTime();
  

// startButton.addEventListener('click', startQuiz)

// function startQuiz(){
//     startButton.classList.add('hide')
//     questionContainer.classList.remove('hide')
// }

// function nextQuestion(){

// }

// function selectAnswer(){

// }

// const questions = [
//     {
//         question: 'A variable that is either true or false is known as what?',
//         answers: [
//             {text: 'boolean', correct: true},
//             {text: 'string', correct: false}
//         ]
//     }
// ]