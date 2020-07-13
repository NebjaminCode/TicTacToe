// create a "create players" factory function that does either of the following:
//     - user vs AI
//     - user vs user

// create a module that: 
//     - shows players
//     - keeps score

/*
what does a player need to do:
- have an X or an O sign
- have a total game score
- have a name
*/

// Player factory function
const players = (name) => {
    let score = 0;
    let playerName = () => name;
    let scoreIncrease = () => score++;
    let newScore = () => score;

    return {playerName, scoreIncrease, newScore};
}


var setup = (function() {
    var square = document.getElementsByClassName('square');
    
    function gameplay() {

    }

    function gameboard() {
        [
            ['','',''],
            ['','',''],
            ['','','']
        ]
    }          

})();