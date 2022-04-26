const menu = document.querySelector('nav ul');
const menuIcon = document.querySelector('nav .menu-icon');
const menuIconImg = document.querySelector('nav .menu-icon img')
console.log(menuIconImg)

menuIcon.addEventListener('click', () =>{
    menu.classList.toggle('active');
    if(menuIconImg.getAttribute("src") == "assets/img/menu.png"){
        menuIconImg.setAttribute("src", "assets/img/close.png")
    } else {
        menuIconImg.setAttribute("src", "assets/img/menu.png")
    }
})