/*
Guess the number: steps
1-generate a random number between 1 and 100
2-save the number of the tries in which the player is in
3-give the player a way of guessing the number by saying if it's higher or lower
4-once the number has been written save it in some place so that the player can see his previous tries
5-check if the number is correct
6-if it's correct:  
    i-show a message of congratulation
    ii-don't allow the player to introduce more tries
    iii-show a button that lets the player start again(restart button)
7-if it;s incorrect and the player still has tries :
    i-tell the player he has failed
    ii-let the player try again
    iii-each time he fails add 1 more to the tries counter
8-if the player fails and he has no more tries:
    i-tell the player that the game has finished
    ii-don't let the player introduce more numbers
    iii-show a button that lets the player start again
9-once the game restarts make sure that the logic of the game and the IU reset completely and go back to step number one
*/
let randomNumber = Math.floor(Math.random()*100)+1 ;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHj = document.querySelector(".lowOrHj");
const guessSubmit= document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");


let guessCount = 1;
let resetButton;

function checkGuess(){

    const userGuess = Number(guessField.value);
    

    if(guessCount === 1){
        guesses.textContent = "Previous attempts  ";
    }
    guesses.textContent += userGuess + " ";

    if(userGuess === randomNumber){
        lastResult.textContent = "Congratulations! You guessed it!";
        lastResult.style.backgroundColor = "green";
        lowOrHj.textContent =" ";
        setGameOver();
    } else if(guessCount === 10){
        lastResult.textContent = "GAME OVER!";
        setGameOver();
    } else {
        lastResult.textContent = "Wrong! Guess Again";
        lastResult.style.backgroundColor = "red";
        if(userGuess < randomNumber){
            lowOrHj.textContent = "The number is higher";
        }else if(userGuess > randomNumber){
            lowOrHj.textContent = "The number is lower"
        }

    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener( 'click', checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start Again!";
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}
function resetGame(){
    guessCount = 1;
    
    const resetParas = document.querySelectorAll(".resultParas p");

    for(const resetPara of resetParas){
        resetPara.textContent = "";
    }
    resetButton.parentNode.removeChild(resetButton);
    
    guessField.disabled = false;
    guessSubmit.disabled= false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random()*100) + 1;

}
