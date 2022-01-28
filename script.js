let coffe1 = document.querySelector("#coffe1")
let coffe2 = document.querySelector("#coffe2")
let coffe3 = document.querySelector("#coffe3")
let coffe = document.querySelector("#coffe")
let color = document.querySelector("#color")

coffe1.addEventListener('click', function(){
    coffe.src = 'assets/img1.png'
    color.style.background = '#017143'
})
coffe2.addEventListener('click', function(){
    coffe.src = 'assets/img2.png'
    color.style.background = '#EDADBF'
})
coffe3.addEventListener('click', function(){
    coffe.src = 'assets/img3.png'
    color.style.background = '#9C3B70'
})