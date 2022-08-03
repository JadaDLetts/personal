const userChoiceDisplay = document.createElement('h1')
userChoiceDisplay.innerText = 'User Choice: '
const computerChoiceDisplay = document.createElement('h1')
computerChoiceDisplay.innerText = 'Computer Choice: '
const resultDisplay = document.createElement('h1')
resultDisplay.innerText = 'Result: '
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['Rock', 'Paper', 'Scissors']
let userChoice
let computerChoice

const btnClick = (e) => {
    userChoice = e.target.innerHTML
    userChoiceDisplay.innerHTML = 'User Choice: ' + userChoice

    generateCompChoice()
    getResult()
}

function getResult(){
    if(userChoice === computerChoice){
        resultDisplay.innerHTML = 'it\'s a Draw!'
    } else{
        const final = userChoice + computerChoice
        switch (final){
            case 'RockPaper':
            case 'RockScissors':
            case 'ScissorsPaper':
            case 'PaperRock':
                resultDisplay.innerHTML = 'You Win!'
                break
            default:
                resultDisplay.innerHTML = 'You Lose!'
                break
        }
    }
}

//loop through choices and create a button for each choice and append to grid
//add event listener to button
choices.forEach(choice => {
    const tempbtn = document.createElement('button')
    tempbtn.innerHTML = choice
    tempbtn.addEventListener('click', btnClick)
    gameGrid.appendChild(tempbtn)
})

function generateCompChoice(){
    const rand = Math.floor(Math.random() *3)
    computerChoice = choices[rand]
    computerChoiceDisplay.innerHTML = 'Computer Choice: ' + computerChoice
}