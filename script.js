var origBoard;
const player1='O';
const player2='X';
var counter=0;
const winningComb=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[6,4,2]

]
const cells=document.querySelectorAll('.cell');
startGame();
function startGame(){
	document.querySelector('.endgame').style.display="none";
	origBoard=Array.from(Array(9).keys());
	for(var i=0;i<cells.length;i++){
		cells[i].innerText=" ";
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click',turnClick,false);
		console.log(origBoard=);
		
	}
}
function turnClick(square){
	counter++;
	if(counter%2==0){
	turn (square.target.id,player1);}
	else{
		turn(square.target.id,player2);
	}
	}

	function turn(squareId,player){
		origBoard[squareId]=player;
		document.getElementById(squareId).innerText=player;
	

	}
	




