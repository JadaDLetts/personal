//used to identify the turn of the human player
let person = 0;
//used to identify the turn of the computer player
let comp = 0;
//used to identify whether start game was pressed
let pressed = false;

//represents whose turn it is
//integer value represents whether it is player 1 or 2's turn
let currentTurn = 1;

//boolean representing whether the game has ended
let gameEnd = false;

//function to start the tic tac toe game
function startGame() {
    //if pressed is false set pressed to true and start game
    if (pressed === false) {
        pressed = true;


        let cells = document.getElementsByClassName("tb");
        for (let i = 0; i < cells.length; i++) {
            cells[i].innerText = "";
        }

        //generates a random positive integer number between 1 and 10
        let rand = Math.floor(Math.random() * (10 - 1) + 1);

        //if the remainder of the random positive integer when mod by 2 is 0 then
        //the human is player number 2
        if (rand % 2 === 0) {

            //adding on to the html element whose ID is title
            //adds what player number the human user is to the screen
            document.getElementById("title").innerHTML += "<h3>You are Player 2</h3>";

            //writes whose turn it is to the div with the id whoseTurn
            //currently the Enemy's turn as it is player 1 based on the if statement above
            document.getElementById("whoseTurn").innerHTML = "<h2>Enemy Turn</h2>";

            //setting the player number status of the human and computer
            person = 2;
            comp = 1;

            //calling function compTurn to get the computers move
            compTurn(comp);
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
            personTurn(person);
        }
    }
}

//function personTurn represent the turn the human will make
function personTurn(turn) {
    //checks if the game ended after the players move
    checkEnd();

    //while it is the players turn
    //the player has access to the cursor style that shows they can press a cell for their turn
    document.getElementById("t-board").style.cursor = "pointer";

    if (!gameEnd) {
        //writes that it is the humans turn to the element whose id is whoseTurn
        document.getElementById("whoseTurn").innerHTML = "<h2>Your Turn</h2>";
    }

    //a list of all cells in the board
    let cells = document.getElementsByClassName("tb");

    //todo: not necessary? add while loop, so while cell a proper cell is not pressed run through the loop

    //looping through all the cells in the board
    for (let i = 0; i < cells.length; i++) {
        //when a cell is clicked the move will be executed
        document.getElementById("b" + i).onclick = function () {
            //calls helper function to make a move when a cell has been clicked
            executeMove(i, turn)
        }
    }
}

//helper function to execute the humans move once they have clicked on a cell
function executeMove(num, turn) {
    //denotes the letter the computer will use in the game
    let letter = checkTurn(turn);

    //checking if the cell clicked on is empty
    //if the cell clicked is not empty the program will wait until an empty cell is clicked
    if (document.getElementById("b" + num).innerText === "") {
        document.getElementById("b" + num).textContent = letter;

        //changes the value of whose turn it is
        //set to persons player number as the player just went
        currentTurn = comp;

        //calls compTurn to go to make the computers move
        compTurn(comp);
    }
}

//function to associate the letter X or O with the human/computer
function checkTurn(turn) {
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

//function compTurn represents the turn the computer will make
function compTurn(turn) {
    //checks if the game ended after the players move
    checkEnd();

    //if it is not the players turn they do not have access
    // to the cursor style that shows they can press a cell for their turn
    document.getElementById("t-board").style.cursor = "not-allowed";

    if (!gameEnd) {
        //writes that it is the computers turn to the element whose id is whoseTurn
        document.getElementById("whoseTurn").innerHTML = "<h2>Enemy Turn</h2>";
    }
    //random positive int generated to represent the location the computers letter will be on
    let board = Math.floor(Math.random() * 9);

    //denotes the letter the computer will use in the game
    let letter = checkTurn(turn);

    //if the board cell associated with the random generated int is empty
    //the letter use by the computer will be placed on the board
    if (document.getElementById("b" + board).innerText === "") {

        //using set timeout so that the computers turn does not immediately happen
        setTimeout(function () {
            document.getElementById("b" + board).textContent = letter
        }, 1000);

        //changes the value of whose turn it is
        //set to persons player number as the computer just went
        currentTurn = person;

        //using set timeout so that after the computer makes a move it is not immediately the persons move
        setTimeout(function () {
            personTurn(person)
        }, 2000);
    } else {
        //if the random generated board cell is full a loop is ran until an empty cell is chose
        compTurn(turn);
    }
}

//function to determine whether the game has ended or not
//TODO: determine who won the game
function checkEnd() {
    //retrieving all cells in the board that have the className tb
    let boards = document.getElementsByClassName("tb");

    //denotes the number of cells filled
    let currFilled = 0;

    //loop through the list of board cells stored in variable board
    for (let i = 0; i < boards.length; i++) {
        //checking if the innerText of the cell is not empty
        if (boards[i].innerText !== "") {
            //if it is not empty then 1 is added to the variable currFilled
            currFilled += 1;
        }
    }

    //if all cells are filled then the game is over
    //TODO: update so that game is also over if player/comp wins before board is full
    if (currFilled === 9) {
        //clears whose turn it is
        document.getElementById("whoseTurn").innerHTML = "";
        gameEnd = true;
        document.getElementById("t-board").innerHTML = "<h3>GAME OVER!</h3> <h3>IT'S A TIE</h3>"
    }
}

//function reset is used to reset the board when the game has ended or when the human player
// wishes to start a new game regardless of whether the game has ended
function reset() {
    //changes the variable representing whether start game was pressed or not to false
    pressed = false;

    //this line is used to remove what player number the human player is from the element with the id title
    document.getElementById("title").innerHTML = "<h1>Tic Tac Toe</h1>"

    //this line ensures that the element with the id whoseTurn displays nothing
    // as it is no ones turn when the game has not started
    document.getElementById("whoseTurn").innerHTML = "";

    //generates a blank board
    document.getElementById("t-board").innerHTML = "<br>\n" +
        "    <table class=\"tb-table\">\n" +
        "        <tr class=\"row-1\">\n" +
        "            <td id=\"b0\" class=\"tb\"></td>\n" +
        "            <td id=\"b1\" class=\"tb\"></td>\n" +
        "            <td id=\"b2\" class=\"tb\"></td>\n" +
        "        </tr>\n" +
        "\n" +
        "        <tr class=\"row-2\">\n" +
        "            <td id=\"b3\" class=\"tb\"></td>\n" +
        "            <td id=\"b4\" class=\"tb\"></td>\n" +
        "            <td id=\"b5\" class=\"tb\"></td>\n" +
        "        </tr>\n" +
        "        <tr class=\"row3\">\n" +
        "            <td id=\"b6\" class=\"tb\"></td>\n" +
        "            <td id=\"b7\" class=\"tb\"></td>\n" +
        "            <td id=\"b8\" class=\"tb\"></td>\n" +
        "        <tr>"
}