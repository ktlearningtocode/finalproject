
const scrollToTopBtn =document.getElementById("scrollToTopBtn");

window.onscroll= function() {
     
if (document.body.scrollTop > 100  ||
document.documentElement.myBtn.classList.add('show')) { 
    mybutton.style.display= "block";
} else { 
scrollToTopBtn.classList.remove('show'); 
}
};
scrollToTopBtn.addEventListener("click",function() {
    window.scrollTo({
        top:0,
        behaviour:"smooth"
    });

    });
    

function topFunction() {
document.body.scrollTop=0;
document.documentElement.scrollTop=0; }


 function openNav() { 
document.getElementById("mySidenav").style.width="100%"; 

} 
function closeNav() {
    document.getElementById("mySidenav").style.width="0";

}

const container = document.querySelector ('.signupcontainer'); 
const registarBtn = document.querySelector ('.registar-btn');
const loginBtn = document.querySelector ('.login-btn');

registarBtn.addEventListener('click', ()=> {
container.classList.add('active');

})
loginBtn.addEventListener('click', ()=> {
container.classList.add('active');
})

const quizData =[  
    {
questionE1:"What does cyber threat intelligence begin with?", 
optionE1: ["1: Planning and direction ","2:Analysis", "3:Feedback", "4:Dissemination"],
answer:"1:Planning and direction" },
{
 questionE2:"What one of these are not included in the CTI cycle? ",
optionE2: ["1: Planning and direction ","2:Analysis", "3:Feedback", "4:accuracy"],
answer:"4:accuracy" },    
 
{
 questionE3:"what is the three main ways to deliver CTI?",
optionE3: ["1: Planning and direction and analysis. ","2:Strategic threat intelligence, tactical threat intelligence and Operational threat intelligence.", "3:information overload, frequent updates and data relevance. ", "4:internal sources, third-party information providers and social media intelligence. "],
answer:"2:Strategic threat intelligence, tactical threat intelligence and Operational threat intelligence." 
},  

{questionE4:"what one of these are not included in the challenges presented? ", 
optionE4: ["1:information overload ","2:frequent updates", "3:data relevance", "4:Planning and direction "],
answer:"4:Planning and direction" }

];

let currentQuestion= 0 ;
let score =0; 
let timeLeft=30; 
let timerInterval; 
const timerE1=
document.getElementById('time'); 
const questionE1= 
document.querySelector('.questionE1'); 
const optionsE1= 
document.querySelector('.optionE1'); 
const resultE1= 
document.querySelector('.questionE2'); 
const optionsE2= 
document.querySelector('.optionE2'); 
const resultE2= 
document.querySelector('.questionE3'); 
const optionsE3= 
document.querySelector('.optionE3'); 
const resultE3=
document.querySelector('.questionE4'); 
const optionsE4= 
document.querySelector('.optionE4'); 
const resultE4= 

document.querySelector('.result'); 
const scoreE1= 
document.querySelector('.result'); 
const scoreE2= 
document.querySelector('.result'); 
const scoreE3=
document.querySelector('.result'); 
const scoreE4=  
document.getElementById('score');
const restartBtn =
document.querySelector('.restart-btn')


function loadQuestion () { 
    if (currentQuestion >= quizData.length) {
endQuiz(); 
return; 
}
clearInterval(timerInterval); 
timeLeft=30;
timerE1.textContent =timeLeft; 
startTimer(); 
const currentQuiz= quizData[currentQuestion]; 
questionE1.textContent = currentQuiz.question1;
optionsE1.innerHTML=''; 
questionE2.textContent = currentQuiz.question2;
optionsE2.innerHTML=''; 
questionE3.textContent = currentQuiz.question3;
optionsE3.innerHTML='';
questionE4.textContent = currentQuiz.question3;
optionsE4.innerHTML='';  
currentQuiz.options.forEach( options => {
    const button= 
    document.createElement('button'); 
    button.classList.add('optionE1'); 
    button.textContent= options; 
    button.onclick = ()=> checkAnswer(options); 
    option.appendChild(button);

});
    }
function checkAnswer(selectedOption) {
    if (selectedOption ===
       quizData[currentQuestion].answer) {
score++; }
currentQuestion++;
loadQuestion(); 
       }
       function startTimer() {
        timerInterval=setInterval(() => {
            timeLeft--; 
            timerE1.textContent = timeLeft; 
            if (timeLeft <=0) {
                clearInterval(timerInterval); 
                endQuiz(); 
            }
         }, 1000); 
       }

       function endQuiz() {
        clearInterval(timerInterval); 
        questionE1.style.display='none'; 
        optionsE1.style.display='none'; 
        resultE1.style.display='block'; 
        scoreE1.textContent=score; 
        restartBtn.style.display='block'; 
       }

       restartBtn.addEventListener('click', () =>
        { 
currentQuestion=0;
score =0; 
timeLeft=30;
timerE1.textContent=timeLeft; 
       
questionE1.style.display='block'; 
optionsE1.style.display='flex'; 
resultE1.style.display='none'; 
questionE2.style.display='block'; 
optionsE2.style.display='flex'; 
resultE2.style.display='none';
 questionE3.style.display='block'; 
optionsE3.style.display='flex'; 
resultE3.style.display='none';
questionE4.style.display='block'; 
           optionsE4.style.display='flex'; 
resultE4.style.display='none';  
restartBtn.style.display='none'; 
loadQuestion(); 
       }); 
loadQuestion();


