const burger = document.getElementsByClassName("menu")[0];
const ul = document.querySelector("ul");
burger.addEventListener("click",function(){
    burger.classList.toggle("bx-x");
    ul.classList.toggle("ul-active")
    burger.classList.add("burger-active");
})
$(document).ready(function(){
    $(".counter").counterUp({
        delay:10,
        time:1200
    })
})
window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})
