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

const quizData =[  { 
question:"1...", 
options: ["1?","2?", "3?", "4?"],
answer:"1?" }, 
{
 question:"2...",
options: ["1?","2?", "3?", "4?"],
answer:"4?" },    
]; 
let currentQuestion= 0 ;
let score =0; 
let timeLeft=30; 
let timerInterval; 
const timerE1=
document.getElementById('time'); 
const questionE1= 
document.querySelector('.question'); 
const optionsE1= 
document.querySelector('.options'); 
const resultE1= 
document.querySelector('.result'); 
const scoreE1= 
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
questionE1.textContent = currentQuiz.question;
optionsE1.innerHTML=''; 
currentQuiz.options.forEach(option => {
    const button= 
    document.createElement('button'); 
    button.classList.add('option'); 
    button.textContent= option; 
    button.onclick = ()=> checkAnswer(option); 
    optionsE1.appendChild(button);

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
restartBtn.style.display='none'; 
loadQuestion(); 
       }); 
loadQuestion();




