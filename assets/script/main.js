const menu = document.querySelector('nav ul');


const navMenu=document.querySelector(".menuHamburguer");
navMenu.addEventListener("click", () =>{
    navMenu.classList.toggle("active");
    menu.classList.toggle('active');
});
