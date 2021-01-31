const p1 = {
    score: 0,
    button: document.querySelector('#p1Btn'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Btn'),
    display: document.querySelector('#p2Display')
}
const resetBtn = document.querySelector('#resetBtn')
const winningScoreSelect = document.querySelector('#winningScoreSelect')


let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(winningScoreSelect.value);
let gameOver = false;

function resetGame() {
    gameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p2.score;
        p.display.classList.remove('has-text-primary', 'has-text-danger');
        p.button.disabled = false;
    }
}

function updateScore(player, opponent) {
    if (!gameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            gameOver = true;
            player.display.classList.add('has-text-primary');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScore(p1, p2);
});

p2.button.addEventListener('click', function () {
    updateScore(p2, p1);
});

resetBtn.addEventListener('click', resetGame);

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetGame();
});