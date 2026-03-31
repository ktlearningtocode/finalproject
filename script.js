



let scrollToTopBtn =document.getElementById("scrollToTopBtn");

window.onscroll= function() {scrollFunction()} 
   
    function scrollFunction() { 
if (document.body.scrollTop > 20  ||
document.documentElement.scrollTop > 20) { 
    mybutton.style.display= "block";
} else { 
 mybutton.style.display="none"; 
}}


function topFunction() {
document.body.scrollTop=0;
document.documentElement.scrollTop=0; }


 
const signInForm = document.getElementById ('signupcontainer'); 
const registerBtn = document.getElementById  ('register_btn');
const loginBtn = document.getElementById  ('login_btn');

registerBtn.addEventListener('click', function(){
signInForm.style.display='block';

})
loginBtn.addEventListener('click', function() {
signInForm.style.display='block';
})

