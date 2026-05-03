document.querySelectorAll(".carousel").forEach(carousel=> { 
const items= carousel.querySelectorAll(".carousel_section");
const buttonsHtml=Array.from(items, () => {
return `<span class="carousel_button"></span>`;
});

carousel.insertAdjacentHTML("beforeend", ` 
    <div class="carousel_nav">
        ${buttonsHtml.join("")}
        </div>
    `);

const buttons=carousel.querySelectorAll(".carousel_button");
buttons.forEach((button, i) => { 
button.addEventListener("click", () => {

items.forEach(item => item.classList.remove("carousel_section--selected")); 
buttons.forEach(button=> button.classList.remove("carousel_button--selected"));
items[i].classList.add("carousel_section--selected"); 
button.classList.add("carousel_button--selected");

});

});

//selecting first item on loaded page 
items[0].classList.add("carousel_section--selected"); 
buttons[0].classList.add("carousel_button--selected");

});

let scrollToTopBtn =document.getElementById("scrollToTopBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
document.body.scrollTop=0;
document.documentElement.scrollTop=0; }


const menuBtn =document.querySelectorAll("li"); 
const sidenav =document.getElementById("sidenav");

function openNav() { 
document.getElementById("sidenav").style.width="calc(100% - 50px)";


} 

function closeNav(){ 
document.getElementById("sidenav").style.width="0%";
 
}

menuBtn.forEach((button) => (button.onclick = () => closeNav()));
