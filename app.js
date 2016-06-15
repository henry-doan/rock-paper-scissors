var playerOp = "";
var comOp = "";
var reults = "";

function userInput(x) {
	playerOp = x;
	comInput();
	compare(playerOp, comOp);
	userChoice();
	computerChoice();
	views();
}

function comInput() {
	var comPlyOp = Math.random();

	if (comPlyOp <= 0.34){
		comOp = "rock";
	} else if (comPlyOp <= 0.67){
		comOp = "paper";
	} else {
		comOp = "scissors";
	}
}

function compare(first_op, second_op){
	if (first_op === second_op){
		results = "Its a Tie!";
	}
	else if (first_op === "rock"){
		if (second_op === "scissors"){
			results = "You Win!";
		}
		else {
			results = "You Lose!";
		}
	}
	else if (first_op === "paper"){
		if (second_op === "rock"){
			results = "You Win!";
		} else {
			results = "You Lose!";
		}
	}
	else if (first_op === "scissors") {
		if (second_op === "paper"){
			results = "You Win";
		}
		else {
			results = "You Lose!";
		}
	}

}

function userChoice(){
	var userI = document.getElementById('userI');
	userI.innerHTML = "You Chose:"+ " " + playerOp;
}
function computerChoice(){
	var computer = document.getElementById('computer');
	computer.innerHTML = "Computer Chose:"+ " " + comOp;
}

function views(){
	var display = document.getElementById('display');
	display.innerHTML = results;
}