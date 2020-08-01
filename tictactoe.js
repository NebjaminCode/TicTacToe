/* 
create a "create players" factory function that does either of the following:
     - user vs AI
     - user vs user
*/

/*
what does a player need to do:
    - have an X or an O sign
    - have a total game score
    - have a name
*/

/* 
create a module that: 
     - shows players
     - keeps score
*/

const square = document.querySelectorAll(".square")






// Player factory function
const players = (name) => {
    let score = 0;
    let playerName = name;
    let scoreIncrease =  score++;
    let newScore = score;

    return {playerName, scoreIncrease, newScore};
}

// Gameboard setup
/*
I think the general idea here is that once a space on the gameboard is clicked (which will be controlled by the gamplay module) the array will be altered. gameboard[0] would change to X or O when the top left square in the game is clicked, for example. Then, we can judge which player wins by creating an array of winning combinations and compare the two. Ex: gameboard['X', 'X', 'X', 'O', 'O', '', '',...] would declare player X the winner, since that's 3 squares in a row. 
*/

const setup = (() => {
    let gameboard = ['','','','','','','','',''];
    return {gameboard};
})();

const gameplay = (() => {
    console.log(square.length)
    console.log(square[0].innerHTML)
    
    for (let i = 0; i < square.length; i++) {
		if (setup.gameboard[i] == "") {
			square[i].addEventListener('click', () => {
				square[i].textContent = "x";
				setup.gameboard[i] = "x";
				AI();
				console.log(setup.gameboard)
			});

        }
    }
})();

function AI () {
	for (let i = 0; i < square.length; i++) {
		if (setup.gameboard[i] == "") {
			square[i].textContent = "o";
			setup.gameboard[i] = "o";
			return;
		}
	}
}
console.log(setup.gameboard)