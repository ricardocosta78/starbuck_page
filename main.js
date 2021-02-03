let hamburguerMenu = document.querySelector('.hamburguer-menu');
let header = document.querySelector('.header');
 
hamburguerMenu.addEventListener('click',function(){
    header.classList.toggle('menu-open');
})


function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

function changeColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background= color;
}

function changeHeader(color){
    const header = document.querySelector('.header');
    header.style.borderColor = color;
}
function changeColorH2(color){
    const span = document.querySelector('span');
    span.style.color = color;
}

function changeColorButton(color){
    const button = document.querySelector('.button');
    button.style.background = color;
}