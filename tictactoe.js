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
let moveCount = 0;


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
		square[i].addEventListener('click', () => {
			if (setup.gameboard[i] == "") {
				square[i].textContent = "x";
                setup.gameboard[i] = "x";
                winCheck();
                moveCount++;                
                console.log(setup.gameboard)
			}
        });
       const winCheck = () => {
           if (
                setup.gameboard[0] == 'x' && setup.gameboard[1] == 'x' && setup.gameboard[2] == 'x' ||
                setup.gameboard[3] == 'x' && setup.gameboard[4] == 'x' && setup.gameboard[5] == 'x' ||
                setup.gameboard[6] == 'x' && setup.gameboard[7] == 'x' && setup.gameboard[8] == 'x' ||
                setup.gameboard[0] == 'x' && setup.gameboard[3] == 'x' && setup.gameboard[6] == 'x' ||
                setup.gameboard[1] == 'x' && setup.gameboard[4] == 'x' && setup.gameboard[7] == 'x' ||  
                setup.gameboard[2] == 'x' && setup.gameboard[5] == 'x' && setup.gameboard[8] == 'x' ||
                setup.gameboard[0] == 'x' && setup.gameboard[4] == 'x' && setup.gameboard[8] == 'x' || 
                setup.gameboard[6] == 'x' && setup.gameboard[4] == 'x' && setup.gameboard[2] == 'x'
               ) {
                alert("you win!");
                  players.scoreIncrease;
                  console.log(players.scoreIncrease)
                  return;
                } else {
                    AI();
                }
        }
    }
})();

function AI () {
    if (moveCount == 5) {
        return;
    } 
    let CompMove = Math.floor((Math.random() * 7) + 1);
        if (setup.gameboard[CompMove] == "") {
                square[CompMove].textContent = "o";
                setup.gameboard[CompMove] = "o";
                console.log(CompMove)
                return;
        } else {
            AI();
        }
}

console.log(setup.gameboard)

/* 
var AI = () => {

    let CompMove = Math.floor((Math.random() * 7) + 1);

        if (setup.gameboard[CompMove] == "") {
                square[CompMove].textContent = "o";
                setup.gameboard[CompMove] = "o";
                console.log(CompMove)
                return;
        } else {
            AI()
        }
}
*/