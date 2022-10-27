const cells = document.querySelectorAll(".cell");
const statusText= document.querySelector("statusText")
const restartBtn= document.querySelector("restartBtn")

const winConditions= [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];

let options= ["","","","","","","",""];
let currentPlayer="X";
const running= false;          //tracking the game 

startGame();
function startGame(){
    cells.forEach(cell => cell.addEventListener("click",cellClicked));  //CALLBACK - Done
    restartBtn.addEventListener("click");                 //restartGame
    console.log(startGame)
    statusText.textContent= `${currentPlayers turn}`;  //These are the currentPlayers turn
    

}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");    //Cada cell que eu clicar/ Attribute -cellIndex HTML

    If(options[cellIndex] != "" || !running){ //Index of cell ...index does not equal an empty space
        return;
    }
    updateCell(this,cellIndex);
    checkWinner();
}

function updateCell(cell, index){
    option[index] = currentPlayer;
    cell.textContent = currentPlayer;   //x

function changedPlayer(){
    currentPlayer = (currentPlayer == "X") ? "0" : "X" // Condition is if change player is equal to X
    //if cuurent player is equal i need reassign our current player with O otherwise X
    statusText.textContent = `${currentPlayer}`
     
}

function checkWinner(){
    let roundWon =false;

}

function restartGame(){

}
