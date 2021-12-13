// ### Task 1.3 ###

const dead = document.getElementById("dead"); // поиск элемента "Убито кротов:"
const lost = document.getElementById("lost"); // поиск элемента "Промахов:"

let deadValue = 0; // начальное значение убитых кротов
let lostValue = 0; // начальное значение промахов

function countersReset () { // функция обнуления счётчиков
  if ((deadValue === 3) || (lostValue === 10)) {  
    deadValue = 0;
    dead.textContent = deadValue;
    lostValue = 0; 
    lost.textContent = lostValue;
  };
};

function toggleDone (event) {
    elem = event.target;
    
    if (elem.classList.contains("hole_has-mole")) { // условие клика на крота в норе
        //console.log(event.target);
        deadValue++;
        dead.textContent = deadValue;
        if (deadValue === 3) { // условие победы
            alert('Победа!');
            countersReset();
        };
    }
    else {                                          // условие промаха
        lostValue++;
        lost.textContent = lostValue;
        if (lostValue === 10) {  // условие поражения
            alert('Вы проиграли!');
            countersReset();
        };
    };
};

  const holeGame = document.querySelector('.hole-game'); // поиск дочерних элементов внутри родителя class = "hole-game" 
  holeGame.addEventListener('click', toggleDone)  // обработка события клика на один из элементов внутри родителя <div class="hole-game">

  


