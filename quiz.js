const questions =[{

question: "What does cyber threat intelligence begin with?", 
answers: [
    {text: "Planning and direction", correct: true},
   {text: "Analysis", correct:false }, 
    {text: "Feedback", correct:false },
    {text: "Dissemination", correct:false },
] 
 },

{
 question:"What one of these are not included in the CTI cycle? ",
answers: [ 
{text: "Planning and direction", correct:false},
{text: "Analysis", correct:false}, 
{text: "Feedback", correct:false},
{text: "accuracy", correct:true},
] 
},
 
{
question:"what is the three main ways to deliver CTI?",
answers: [ 
{text: "Planning and direction and analysis", correct:false}, 
{text: "information overload, frequent updates and data relevance.", correct:false},
{text: "Strategic threat intelligence, tactical threat intelligence and Operational threat intelligence." , correct:true},
{text: "internal sources and third-party information providers and social media intelligence", correct:false},
]
},
 
{
  question:"what one of these are not included in the challenges presented?",
answers:[
  {text:"Planning and direction", correct:true}, 
{text:"information overload", correct:false},
{text:"frequent updates" , correct:false},
{text:"data relevance", correct:false},
] 
},

{
  question:"what is the ability to ensure that assets are viewable only by authorised people known as?",
answers:[
{text:"Planning and direction", correct:false}, 
{text:"confidentiality", correct:true},
{text:"Updates", correct:false},
{text:"passwords", correct:false},
] 
},
 {
  question:"In a DDOS attack what is compromised?",
answers:[
{text:"Planning", correct:false}, 
{text:"Directions", correct:false},
{text:"Updates", correct:false},
{text:"Availabilty", correct:true},
] 
},
 {
  question:"What matches the technology that makes sure the correct individuals access the correct resources at the right times for the correct reasons?",
answers:[
{text:"Planning and direction", correct:false}, 
{text:"Updates and availability", correct:false},
{text:"Identity and Access management", correct:true},
{text:"Information overload", correct:false},
] 
},

{
  question:"What is the weakness in a system known as?",
answers:[
{text:"Vulnerability", correct:true}, 
{text:"Updates and availability", correct:false},
{text:"Weakness", correct:false},
{text:"Authorisation", correct:false},
] 
},
{
  question:"What is the course of action that identifies particular measures that can be used for particular stages of attack?",
answers:[
{text:"COA(cause of action)", correct:false}, 
{text:"Information Gathering", correct:false},
{text:"Attack Cycle", correct:false},
{text:"Cyber kill chain", correct:true},
] 
},
{
  question:"What does secuirty threat entail?",
answers:[
{text:"Entering a wrong password", correct:false}, 
{text:"forgetting an email address", correct:false},
{text:"Someone or something that makes a situation unsafe", correct:true},
{text:"indication of trouble approaching", correct:false},
] 
},
{
  question:"What are three processes buisnesses include with cyber threat intellignce",
answers:[
{text:"Entering a wrong password, forgetting an email address and making a situation unsafe ", correct:false}, 
{text:"Cyber kill chain, Attack Cycle and COA(cause of action)", correct:false},
{text:"confidentiality, Updates and availability and Vulnerability", correct:false},
{text:"Strategic level, operational level and tactical level", correct:true},
] 
}
]; 

const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons'); 
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex= 0;
let score =0; 

function startQuiz() { 
   resetState()
currentQuestionIndex= 0;
score = 0; 
nextButton.innerHTML = "Next"; 
showQuestion(); 
}

function showQuestion() { 
  resetState();
let currentQuestion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1; 
questionElement.innerHTML= questionNo + ". " + currentQuestion.
question;

currentQuestion.answers.forEach(answer => { 
const button = document.createElement ("button"); 
button.innerHTML =answer.text; 
button.classList.add("btn");
answerButtons.appendChild(button);
if(answer.correct) { 
  button.dataset.correct = answer.correct;
}
button.addEventListener("click", selectAnswer);
}); 
}
function resetState() { 
nextButton.style.display="none" 
while(answerButtons.firstChild) {
answerButtons.removeChild(answerButtons.firstChild);
}
}


function selectAnswer(e) { 
const selectedBtn = e.target; 
const isCorrect = selectedBtn.dataset.correct === "true"; 
if(isCorrect) { 
  selectedBtn.classList.add("correct");
  score++;
} else { 
selectedBtn.classList.add("incorrect"); 
}
Array.from(answerButtons.children).forEach(button => {
if (button.dataset.correct === "true") { 
  button.classList.add("correct"); 
}
button.disabled = true;
 }); 
nextButton.style.display ="block"; 
}

function showScore() {
resetState(); 
questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; 
nextButton.innerHTML= "Retry";
nextButton.style.display= "block" ;
}

function handleNextButton(){ 
currentQuestionIndex++; 
if (currentQuestionIndex < questions.length) {
       showQuestion(); 
       } else { 
  showScore(); 
}
}

nextButton.addEventListener("click", ()=> { 
     if ( currentQuestionIndex < questions.length) { 
          handleNextButton();
            }else { 
          startQuiz();  
}

}); 


startQuiz(); 



