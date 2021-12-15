// ### Task 1.2 ###
const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");

let counterValue = 0;
let speedValue = 0;
let nowClickTime;
let previousClickTime = new Date();

cookie.addEventListener("mousedown", function() { // событие по нажатию левой кн.мыши
    nowClickTime = new Date();
    cookie.width = 300;
    counterValue++;
    clicker__counter.textContent = counterValue;
    speedValue = (1000 / (nowClickTime - previousClickTime)).toFixed(2); // вычисление скорости кликов в секунду
});

cookie.addEventListener("mouseup", function() {  // событие по отжатию левой кн.мыши
    cookie.width = 200;
    clicker__speed.textContent = speedValue;
    previousClickTime = nowClickTime;
});
