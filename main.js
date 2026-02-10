const scrollToTopBtn =document.getElementById("scrollToTopBtn");

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


