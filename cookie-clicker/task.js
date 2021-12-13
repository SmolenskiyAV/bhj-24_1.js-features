// ### Task 1.2 ###
const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");

let counterValue = 0;
let speedValue = 0;
let pressClickTime;
let releaseClickTime;

cookie.addEventListener("mousedown", function() { // событие по нажатию левой кн.мыши
    pressClickTime = new Date();
    cookie.width = 300;
    counterValue++;
    clicker__counter.textContent = counterValue;
});

cookie.addEventListener("mouseup", function() {  // событие по отжатию левой кн.мыши
    releaseClickTime = new Date();
    speedValue = (1000 / (releaseClickTime - pressClickTime)).toFixed(2);
    cookie.width = 200;
    clicker__speed.textContent = speedValue;
});
