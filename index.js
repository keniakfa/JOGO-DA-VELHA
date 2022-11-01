const cells = document.querySelectorAll(".cell");
const statusText= document.querySelector("#statusText");
const restartBtn= document.querySelector("#restartBtn");


function changeColor(id){
 document.querySelector('body').style.background=id 
}


const winConditions = [
[0,1,2],          
[3,4,5],       
[6,7,8],
[0,3,6],          
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];

let options = ["","","","","","","","",""];
let currentPlayer = "X";
let running = true;

startGame();

function startGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));  
    restartBtn.addEventListener("click", restartGame);                 
    statusText.textContent= `${currentPlayer}'s turn`; 
    
   

}

function cellClicked(){
   
    const cellIndex = this.getAttribute("cellIndex");     

    if(options[cellIndex] != "" || !running) return;
    
       

    updateCell(this,cellIndex);
    checkWinner();
}


function updateCell(cell, index){
    console.log(options)
    
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;   
}

function changedPlayer(){
    currentPlayer = (currentPlayer === "X") ? "0" : "X";
    statusText.textContent = `${currentPlayer}'s turn'`;
    

}

function checkWinner(){
    let roundWon = false;
    

    for(let i= 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
   
    
        if(cellA === "" || cellB === "" || cellC === ""){
            continue; 
          
            roundWon = false;
        } else if((cellA === cellB) && (cellB === cellC)){ 
            roundWon = true;
        
        }                                  
    }
 
    if(roundWon){ 
        statusText.textContent = `${currentPlayer} wins!`
        running =false;
    } else if(!options.includes("")){
        statusText.textContent = "Draw!";
    } else{
        changedPlayer();
    
    }
}

function restartGame(){
    currentPlayer = "X"
    options = ["","","","","","","","",""];
    statusText.textContent = `${currentPlayer}'s turn'`
    cells.forEach(cell => cell.textContent = "");
    running = true;
  
}
