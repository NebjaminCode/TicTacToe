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
const players = (nameInput) => {
    let score = 0;
    let name = nameInput;
    const scoreIncrease = () => score++;
    let newScore = score;
    return { score, name, newScore, scoreIncrease };
};

let user = players("user");
let ai = players('AI');


// Gameboard setup
/*
I think the general idea here is that once a space on the gameboard is clicked (which will be controlled by the gamplay module) the array will be altered. gameboard[0] would change to X or O when the top left square in the game is clicked, for example. Then, we can judge which player wins by creating an array of winning combinations and compare the two. Ex: gameboard['X', 'X', 'X', 'O', 'O', '', '',...] would declare player X the winner, since that's 3 squares in a row. 
*/

const setup = (() => {
    let gameboard = ['','','','','','','','',''];
    return {gameboard};
})();

const gameplay = (() => {
    players.newScore;
    for (let i = 0; i < square.length; i++) {
		square[i].addEventListener('click', () => {
			if (setup.gameboard[i] == "") {
				square[i].textContent = "x";
                setup.gameboard[i] = "x";
                winCheck();
                //loseCheck();
                //setTimeout (function(){AI()}, 150);
                moveCount++;                
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
                    user.score = user.score + 1;
                    alert("you win!");
                    console.log(user.score)
                    scoreDisplay()
                    setTimeout (function(){autoReset()}, 1000);
                    return;
                } else {
                   setTimeout (function(){AI()}, 150);
                }
        }
        /*
        const loseCheck = () => {
            if (
                setup.gameboard[0] == 'o' && setup.gameboard[1] == 'o' && setup.gameboard[2] == 'o' ||
                setup.gameboard[3] == 'o' && setup.gameboard[4] == 'o' && setup.gameboard[5] == 'o' ||
                setup.gameboard[6] == 'o' && setup.gameboard[7] == 'o' && setup.gameboard[8] == 'o' ||
                setup.gameboard[0] == 'o' && setup.gameboard[3] == 'o' && setup.gameboard[6] == 'o' ||
                setup.gameboard[1] == 'o' && setup.gameboard[4] == 'o' && setup.gameboard[7] == 'o' ||  
                setup.gameboard[2] == 'o' && setup.gameboard[5] == 'o' && setup.gameboard[8] == 'o' ||
                setup.gameboard[0] == 'o' && setup.gameboard[4] == 'o' && setup.gameboard[8] == 'o' || 
                setup.gameboard[6] == 'o' && setup.gameboard[4] == 'o' && setup.gameboard[2] == 'o'
            ) {
                ai.scoreIncrease;
                alert("You Lose!");
                setTimeout (function(){autoReset()}, 1000);
                return;
            }
        }
        */
    }
})();

const scoreDisplay = () => {
    const playerScore = document.querySelector("#playerHolder");
    const compScore = document.getElementById("compHolder")
    playerScore.innerHTML = user.score;
    compScore.innerHTML = ai.score;
};

scoreDisplay()

function AI () {
    if (moveCount >= 18) {
        return
    }
    let CompMove = Math.floor((Math.random() * 7) + 1);
        if (setup.gameboard[CompMove] == "") {
                square[CompMove].textContent = "o";
                setup.gameboard[CompMove] = "o";
                console.log(`CompMove = ${CompMove}`)
                moveCount++;
                if (
                    setup.gameboard[0] == 'o' && setup.gameboard[1] == 'o' && setup.gameboard[2] == 'o' ||
                    setup.gameboard[3] == 'o' && setup.gameboard[4] == 'o' && setup.gameboard[5] == 'o' ||
                    setup.gameboard[6] == 'o' && setup.gameboard[7] == 'o' && setup.gameboard[8] == 'o' ||
                    setup.gameboard[0] == 'o' && setup.gameboard[3] == 'o' && setup.gameboard[6] == 'o' ||
                    setup.gameboard[1] == 'o' && setup.gameboard[4] == 'o' && setup.gameboard[7] == 'o' ||  
                    setup.gameboard[2] == 'o' && setup.gameboard[5] == 'o' && setup.gameboard[8] == 'o' ||
                    setup.gameboard[0] == 'o' && setup.gameboard[4] == 'o' && setup.gameboard[8] == 'o' || 
                    setup.gameboard[6] == 'o' && setup.gameboard[4] == 'o' && setup.gameboard[2] == 'o'
                ) {
                    ai.score = ai.score + 1;
                    alert("You Lose!");
                    scoreDisplay();
                    autoReset();
                    return;
                }   
            return;
        } else {
            AI();
                   
        }
}

const reset = (() => {
    const reset = document.getElementById("reset");
    reset.addEventListener('click', () => {
       for (let i = 0; i < square.length; i++) {
           square[i].textContent = "";
           setup.gameboard[i] = "";
           moveCount = 0;
       }
    })
})()

autoReset = () => {
    for (let i = 0; i < square.length; i++) {
        square[i].textContent = "";
        setup.gameboard[i] = "";
        moveCount = 0;
    }
}

// for ties

checkTies = (() => {
    if (moveCount >= 9) {
        autoReset();
    }
})();

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