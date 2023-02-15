
//Store gameBoard as Array inside object
let gameBoardModule = (function(){
let gameArray = []

const win_Combo = [
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [0,4,8]
];
    
    return{gameArray,win_Combo };
    
})();



//Store  Player inside a factory Function
const X_playerFactory = (X_Name) => {
    return{
        X_Name : X_Name,
        X_Mark : "X"
    }
};

const O_playerFactory = (O_Name) => {
    return{
        O_Name : O_Name,
        O_Mark : "O"
    }
};


let Xperson = X_playerFactory("Player-X")
let Operson = O_playerFactory("Player-O")






//Function renders the contents of the gameboard array to the webpage using EventListeners
let renderToScreen = (function(){

const gridCell = document.querySelectorAll('[data-cell]');
//Sets the current player to 'X'
let currentPlayer = Xperson.X_Mark

const WinningText = document.querySelector('[data-winning-message]')
const Winning_Text = document.getElementById('WinningMessage')



for(let i=0; i <= gridCell.length; i++ ){

    //  checks if gridCell is defined because I kept getting an error
    if(gridCell[i] !== undefined){
    gridCell[i].addEventListener("click", ()=>{
        
        gridCell[i].style.backgroundColor = '#fef2f2';
        gridCell[i].style.Color = '#C51E3A';
        gridCell[i].textContent = currentPlayer;
        gameBoardModule.gameArray.push(gridCell[i].innerHTML);
        
        console.log(gridCell)
        
        checkForWin()
        
        swapTurns()
        
        //can click each cell once
    }, {once:true})
    }  

}




//Loops through each Element in the win_Combo then checks if each index in theElement is contained in gridCell

function checkForWin(){
    gameBoardModule.win_Combo.forEach(function(combo){
        let check = combo.every(index => gridCell[index].innerHTML.trim() == currentPlayer)
        if(check){
            Winning_Text.classList.add('show')
            if (currentPlayer == 'X') {
                WinningText.innerHTML = `X's Win`
                }else if(currentPlayer == 'O'){
                    WinningText.innerHTML = `O's Win`
                }

            
        
    } else{
        checkForDraw()
    }

})
    
}


function checkForDraw(){
        if(!checkForWin || gameBoardModule.gameArray.length === 9){
        Winning_Text.classList.add('show')
        WinningText.innerHTML = `Draw`  
    }  
}




function swapTurns(){
    //If the current player is 'X' change it to 'O' , otherwise (meaning if it's 'O') change it to 'X'
    currentPlayer = currentPlayer == Xperson.X_Mark? Operson.O_Mark : Xperson.X_Mark

}


})();



function justreset(){
        location.reload();
    }



