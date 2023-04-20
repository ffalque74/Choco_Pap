const title = document.querySelector('.categorie');
var par = document.querySelector('.plus');
var par2 = document.querySelector('.moins');
var par3 = document.querySelector('.div')
title.addEventListener('click',() => {
    
    par2.classList.toggle('hide');par.classList.toggle('hide');par3.classList.toggle('hide');
})




