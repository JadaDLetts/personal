const compChoiceDisplay = document.getElementById('compChoice')
const userChoiceDisplay = document.getElementById('usrChoice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let temp
let compChoice
let result

possibleChoices.forEach(possibleChoice =>
    possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const rand = Math.floor(Math.random() * 3) + 1

    switch(rand){
        case(1):
            compChoice = 'Rock'
            break
        case (2):
            compChoice = 'Paper'
            break
        case(3):
            compChoice = 'Scissors'
            break
    }

    compChoiceDisplay.innerHTML = compChoice
}

function getResult(){
    if (compChoice === userChoice) {
        result = 'its a draw!'
    }
    if (compChoice === 'Rock' && userChoice === "Paper") {
        result = 'you win!'
    }
    if (compChoice === 'Rock' && userChoice === "Scissors") {
        result = 'you lost!'
    }
    if (compChoice === 'Paper' && userChoice === "Scissors") {
        result = 'you win!'
    }
    if (compChoice === 'Paper' && userChoice === "Rock") {
        result = 'you lose!'
    }
    if (compChoice === 'Scissors' && userChoice === "Rock") {
        result = 'you win!'
    }
    if (compChoice === 'Scissors' && userChoice === "Paper") {
        result = 'you lose!'
    }
    resultDisplay.innerHTML = result
}