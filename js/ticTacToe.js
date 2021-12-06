//used to identify the turn of the human player
let person = 0;
//used to identify the turn of the computer player
let comp = 0;
//used to identify whether start game was pressed
let gameStart = false;
//represents whose turn it is
//integer value represents whether it is player 1 or 2's turn
let currentTurn = 1;
//boolean representing whether the game has ended
let gameEnd = false;
//represents the player number that won
// 0 if tied
let winner = 0;

//function reset is used to reset the board when the game has ended or when the human player
// wishes to start a new game regardless of whether the game has ended
function reset() {
    //resetting who won the game to zero
    winner = 0;
    //changes the variable representing whether start game was pressed or not to false
    gameStart = false;

    //this line is used to remove what player number the human player is from the element with the id title
    document.getElementById("title").innerHTML = "<h1>Tic Tac Toe</h1>"

    //this line ensures that the element with the id whoseTurn displays nothing
    // as it is no ones turn when the game has not started
    document.getElementById("whoseTurn").innerHTML = "";
    
    //a list of all cells in the board
    let cells = document.getElementsByClassName("tb");
    
    for (let i = 0; i < cells.length; i++) {
        //when a cell is clicked the move will be executed
        document.getElementById("b" + i).innerText = "-";
    }
    
    document.getElementById("gameResult").textContent = "";
    
    // //generates a blank board
    // document.getElementById("t-board").innerHTML = "<br>\n" +
    //     "    <table class=\"tb-table\">\n" +
    //     "        <tr class=\"row-1\">\n" +
    //     "            <td id=\"b0\" class=\"tb\">-</td>\n" +
    //     "            <td id=\"b1\" class=\"tb\">-</td>\n" +
    //     "            <td id=\"b2\" class=\"tb\">-</td>\n" +
    //     "        </tr>\n" +
    //     "\n" +
    //     "        <tr class=\"row-2\">\n" +
    //     "            <td id=\"b3\" class=\"tb\">-</td>\n" +
    //     "            <td id=\"b4\" class=\"tb\">-</td>\n" +
    //     "            <td id=\"b5\" class=\"tb\">-</td>\n" +
    //     "        </tr>\n" +
    //     "        <tr class=\"row3\">\n" +
    //     "            <td id=\"b6\" class=\"tb\">-</td>\n" +
    //     "            <td id=\"b7\" class=\"tb\">-</td>\n" +
    //     "            <td id=\"b8\" class=\"tb\">-</td>\n" +
    //     "        <tr>"
}

//function to start the tic tac toe game
function startGame() {
    //if pressed is false set pressed to true and start game
    if (!gameStart) {
        console.log("game start");
        gameStart = true;

        //generates a random positive integer number between 1 and 10
        let rand = Math.floor(Math.random() * (10 - 1) + 1);
        console.log("rand: " + rand);

        //if the remainder of the random positive integer when mod by 2 is 0 then
        //the human is player number 2
        if (rand % 2 === 0) {
            //adding on to the html element whose Id is title
            //adds what player number the human user is to the screen
            document.getElementById("title").innerHTML += "<h3>You are Player 2</h3>";

            //writes whose turn it is to the div with the id whoseTurn
            //currently the Enemy's turn as it is player 1 based on the if statement above
            document.getElementById("whoseTurn").innerHTML = "<h2>Enemy Turn</h2>";

            //setting the player number status of the human and computer
            person = 2;
            comp = 1;

            //calling function enemyTurn to get the computers move
            enemyTurn();
        } else {
            //adding on to the html element whose ID is title
            //adds what player number the human user is to the screen
            document.getElementById("title").innerHTML += "<h3>You are Player 1</h3>";

            //writes whose turn it is to the div with the id whoseTurn
            //currently the Players turn as it is player 1 based on the else statement
            document.getElementById("whoseTurn").innerHTML = "<h2>Your Turn</h2>";

            //setting the player number status of the human and computer
            person = 1;
            comp = 2;

            //calling function personTurn to get the humans move
            //does not call checkPlayerTurn as it is known that it is the human players turn
            playerTurn();
        }
    }
}

function enemyTurn() {
    //if it is not the players turn they do not have access
    // to the cursor style that shows they can press a cell for their turn
    // document.getElementById("t-board").style.pointerEvents = "none";
    document.getElementById("t-board").style.cursor = "not-allowed";
    console.log("cursor change");

    //writes that it is the computers turn to the element whose id is whoseTurn
    document.getElementById("whoseTurn").innerHTML = "<h2>Enemy Turn</h2>";

    //random positive int generated to represent the location the computers letter will be on
    let cell = Math.floor(Math.random() * 9);
    console.log("random board number generated: " + cell);

    //denotes the letter the computer will use in the game
    let letter = getTurnLetter(comp);

    //if the board cell associated with the random generated int is empty
    //the letter use by the computer will be placed on the board
    if (document.getElementById("b" + cell).innerText.localeCompare("-") === 0) {
        //using set timeout so that the computers turn does not immediately show up on the screen
        setTimeout(function () {
            document.getElementById("b" + cell).innerText = letter;
            checkEnd();
    
            if (!gameEnd) {
                //changes the value of whose turn it is
                //set to persons player number as the computer just went
                currentTurn = person;
        
                //using set timeout so that after the computer makes a move it is not immediately the persons move
                setTimeout(function () {
                    playerTurn();
                }, 2000);
            }
            
        }, 1200);
    } else {
        //if the random generated board cell is full a loop is ran until an empty cell is chose
        enemyTurn();
    }
}

//function to allow a player to move during their turn
function playerTurn() {
    //while it is the players turn
    //the player has access to the cursor style that shows they can press a cell for their turn
    //document.getElementById("t-board").style.pointerEvents = "auto";
    document.getElementById("t-board").style.cursor = "pointer";

    //writes that it is the humans turn to the element whose id is whoseTurn
    document.getElementById("whoseTurn").innerHTML = "<h2>Your Turn</h2>";

    //a list of all cells in the board
    let cells = document.getElementsByClassName("tb");

    for (let i = 0; i < cells.length; i++) {
        //when a cell is clicked the move will be executed
        document.getElementById("b" + i).onclick = function () {
            //calls helper function to make a move when a cell has been clicked
            executeMove(i, person);
        }
    }
}

//helper function to execute the humans move once they have clicked on a cell
function executeMove(num, turn) {
    //denotes the letter the computer will use in the game
    let letter = getTurnLetter(turn);

    //checking if the cell clicked on is empty
    //if the cell clicked is not empty the program will wait until an empty cell is clicked
    if (document.getElementById("b" + num).innerText.localeCompare("-") === 0) {
        document.getElementById("b" + num).textContent = letter;

        //checks if the game ended after the players move
        checkEnd();
        console.log("checked end of game after player move");

        //changes the value of whose turn it is
        //set to persons player number as the player just went
        if (!gameEnd) {
            currentTurn = comp;
            //calls enemyTurn to go to make the computers move
            //using set timeout so that after the computer makes a move it is not immediately the persons move
            setTimeout(function () {
                enemyTurn(comp);
            }, 1000);
        } else {

        }
    }
}

//function to associate the letter X or O with the human/computer
function getTurnLetter(turn) {
    //if the turn of the computer is 1
    if (turn === 1) {
        //the letter associated with the computers turn is X
        return "X";
    } else {
        //if the turn of the computer is not 1
        //the letter associated with the computers turn is O
        return "O";
    }
}

//checks the number of cells on the tic tac toe board that are filled.
function checkCellsFilled() {
    //retrieving all cells in the board that have the className tb
    let boards = document.getElementsByClassName("tb");
    //denotes the current number of cells filled
    let currCellsFilled = 0;

    //loop through the list of board cells stored in variable board
    for (let i = 0; i < boards.length; i++) {
        //checking if the innerText of the cell is not empty
        if (boards[i].innerText !== "-") {
            //if it is not empty then 1 is added to the variable currFilled
            currCellsFilled += 1;
        }
    }
    return currCellsFilled;
}

//function to determine whether the game has ended or not
function checkEnd() {
    //denotes the current number of cells filled
    let currCellsFilled = checkCellsFilled();

    //sets gameEnd to true or false
    //set based on function checkWinner that checks if the human or computer won the game
    gameEnd = checkWinner(0, 1, 2) || checkWinner(3, 4, 5)
        || checkWinner(6, 7, 8) || checkWinner(0, 3, 6)
        || checkWinner(1, 4, 7) || checkWinner(2, 5, 8)
        || checkWinner(0, 4, 8) || checkWinner(2, 4, 6);

    //if the game ended
    if (gameEnd) {
        //if the winner id number matches the person player number
        if (winner === person) {
            //the human is told that they've won
            document.getElementById("whoseTurn").innerHTML = "";
            document.getElementById("gameResult").innerHTML += "<h3>GAME OVER!</h3> <h3>YOU WON!!!</h3>";
        } else {
            //if the person player number does not match the winner id number
            //the human is told that they lost
            document.getElementById("whoseTurn").innerHTML = "";
            document.getElementById("gameResult").innerHTML += "<h3>GAME OVER!</h3> <h3>YOU LOST.</h3>"
        }
    }    //if all cells are filled then the game is over
    else if (currCellsFilled === 9 && !gameEnd) {
        //clears whose turn it is
        gameEnd = true;
        document.getElementById("whoseTurn").innerHTML = "";
        document.getElementById("gameResult").innerHTML += "<h3>GAME OVER!</h3> <h3>IT'S A TIE</h3>"
    }
}

//function to check who won the game before a tie occurred
function checkWinner(c1, c2, c3) {
    //getting the text of the cells associated with the numbers passed in and represented by c1, c2, and c3
    let a = document.getElementById("b" + c1).innerText;
    let b = document.getElementById("b" + c2).innerText;
    let c = document.getElementById("b" + c3).innerText;

    //comparing the text against each other to see if they are all the same
    if (a.localeCompare(b) === 0 && a.localeCompare(c) === 0) {
        //checking if the letter associated with a,b and c is X or O
        //if x then winner is player 1
        //if o then winner is player 2
        //returns true as the game has now ended
        if (a.localeCompare("X") === 0) {
            winner = 1;
            return true;
        } else if (a.localeCompare("O") === 0) {
            winner = 2;
            return true;
        } else {
            return false;
        }
    } else {
        //returns false because:
        //a, b, or c are not the same letter
        // a, b, or c are empty
        return false;
    }
}

