
const target = document.querySelectorAll('[data-animation]')
const animClass = 'active'

function animationScroll(){
    const windowTop = window.pageYOffset 
    target.forEach( (element) => {
       if( (windowTop) > element.offsetTop ){
           element.classList.add(animClass)
       } else{
           element.classList.remove(animClass)
       }
    })
    
    
}



window.addEventListener('scroll', () => {

    animationScroll()

})