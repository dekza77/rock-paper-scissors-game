let userScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

const userChoiceButtons = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');
const scoreText = document.getElementById('score');

// ฟังก์ชันคำนวณผลของเกม
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'เสมอ!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        userScore++;
        return 'ชนะ!';
    } else {
        computerScore++;
        return 'แพ้!';
    }
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    resultText.innerText = `คุณเลือก: ${userChoice.toUpperCase()} | คอมพิวเตอร์เลือก: ${computerChoice.toUpperCase()} - ${result}`;
    scoreText.innerText = `คะแนนของคุณ: ${userScore} | คะแนนคอมพิวเตอร์: ${computerScore}`;
}

// การเพิ่มเหตุการณ์ให้ปุ่ม
userChoiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        playGame(userChoice);
    });
});
