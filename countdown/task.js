// ### Task 1.1 ###
const elementTimer = document.getElementById("timer");

    let n = Number(elementTimer.innerText);   // преобразуем содержимое целевого элемента в число
        console.log('n = ' + n);
   
        countdown = setInterval(() => {       // запускаем таймер
            let currentTimer = (n - 1);
            timer.textContent = currentTimer; // изменяем значение целевого элемента раз в секунду
            n--;
            if (n <= 0) {
            clearInterval(countdown);         // останавливаем таймер
            alert('Вы победили в конкурсе!');
            window.location.assign("for_download_example.txt"); // загрузка файла после получения подверждения пользователя в окне alert
            }
        }, 1000);
// =============================================================================================


    
    
