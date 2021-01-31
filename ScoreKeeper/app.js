const p1Btn = document.querySelector('#p1Btn')
const p2Btn = document.querySelector('#p2Btn')
const resetBtn = document.querySelector('#resetBtn')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;

p1Btn.addEventListener('click', function () {
    if (!gameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
})
p2Btn.addEventListener('click', function () {
    if (!gameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
})
resetBtn.addEventListener('click', function () {
    p1Score = 0;
    p2Score = 0;
    let gameOver = false;
    p2Display.textContent = p2Score;
    p1Display.textContent = p1Score;
})