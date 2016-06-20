let playerOp = "";
let comOp = "";
const results = "";

const userInput = (x) => {
	playerOp = x;
	comInput();
	compare(playerOp, comOp);
	userChoice();
	computerChoice();
	views();
}

const comInput = () => {
	const comPlyOp = Math.random();

	if (comPlyOp <= 0.34){
		comOp = "rock";
	} else if (comPlyOp <= 0.67){
		comOp = "paper";
	} else {
		comOp = "scissors";
	}
}

const compare = (first_op, second_op) => {
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

const userChoice = () => {
	const userI = document.getElementById('userI');
	userI.innerHTML = `You Chose: ${playerOp}`;
}
const computerChoice = () => {
	const computer = document.getElementById('computer');
	computer.innerHTML = `Computer Chose: ${comOp}`;
}

const views = () => {
	const display = document.getElementById('display');
	display.innerHTML = results;
}