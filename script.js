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
		
		
	}
}
function turnClick(square){
	counter++;
	if(counter%2==0){
	turn (square.target.id,player1);
	chechkWin(origBoard,player1,winningComb);
}
	else{
		turn(square.target.id,player2);
		chechkWin(origBoard,player2,winningComb);
	}
	

	}

	function turn(squareId,player){
		origBoard[squareId]=player;
		document.getElementById(squareId).innerText=player;
	

	}

	function chechkWin(board,player,win){
		

		for(let i=0;i<9;i++){
			var a=0;
			for(let j=0;j<3;j++){
				var o=win[i][j];

				if (board[o]==player){
					 a++;
					}
				if(a==3){
					alert("Pobijedio je "+player+" igrac");
					gameOver();
				}
				
			}

		}


		//if(board[0]==player && board[1]==player && board[2]==player){
		//	alert("Pobijedio je igrac sa "+player);
		//}
	}
	
	function gameOver(){
		for(i=0;i<cells.length;i++){
			cells[i].removeEventListener('click',turnClick,false);

		}
	}




