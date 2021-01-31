const p1Btn = document.querySelector('#p1Btn')
const p2Btn = document.querySelector('#p2Btn')
const resetBtn = document.querySelector('#resetBtn')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const winningScoreSelect = document.querySelector('#winningScoreSelect')


let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(winningScoreSelect.value);
let gameOver = false;

function resetGame() {
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p2Display.textContent = p2Score;
    p1Display.textContent = p1Score;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}

p1Btn.addEventListener('click', function () {
    if (!gameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.textContent = p1Score;
    }
});

p2Btn.addEventListener('click', function () {
    if (!gameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            gameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.textContent = p2Score;
    }
});

resetBtn.addEventListener('click', resetGame);

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetGame();
});