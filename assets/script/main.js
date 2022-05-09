const menu = document.querySelector('nav ul');


const navMenu=document.querySelector(".menuHamburguer");
navMenu.addEventListener("click", () =>{
    navMenu.classList.toggle("active");
    menu.classList.toggle('active');
});


const text = document.querySelector('.selector')
const trigger = document.querySelector('.triggers__container')


text.addEventListener("click", () =>{
    trigger.classList.toggle('ativo')
})















