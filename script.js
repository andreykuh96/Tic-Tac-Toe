const conteiner = document.querySelector('.conteiner'),
      field = document.querySelectorAll('.field'),
      modalReset = document.querySelector('.modal-dialog__reset'),
      modal = document.querySelector('.modal'),
      modalResult = document.querySelector('.modal-dialog__result');

let counter = 0,
    result = '';

conteiner.addEventListener('click', (e) => {

    const target = e.target;

    if (target && target.classList.contains('field') && target.textContent == '') {
        counter % 2 == 0 ? target.textContent = 'X' : target.textContent = 'O';
        counter++;
        checkWinner();
        noWinner();
    }
});

function checkWinner() {
    const arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (let i = 0; i < arr.length; i++) {
        if (field[arr[i][0]].textContent == 'X' && field[arr[i][1]].textContent == 'X' && field[arr[i][2]].textContent == 'X') {
            result = 'X победили';
            startNewGame(result);
        } else if (field[arr[i][0]].textContent == 'O' && field[arr[i][1]].textContent == 'O' && field[arr[i][2]].textContent == 'O') {
            result = 'О победили';
            startNewGame(result);
        }
    }

    console.log(counter);
}

function startNewGame(res) {
    if (res != '') {
        modal.style.display = 'block';
        modalResult.innerHTML = `${res}`;
    }
}

function noWinner() {
    if (counter == 9) {
        modal.style.display = 'block';
        modalResult.innerHTML = 'НИЧЬЯ';
    }
}

modalReset.addEventListener('click', () => {
    
    modal.style.display = 'none';

        field.forEach((item) => {
            item.textContent = '';
        });

        counter = 0;
    }
);

