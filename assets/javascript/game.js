//variables
var userGuess;
//generate random letter
var secretLetter=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1);
console.log(secretLetter);

//capture user guess
function playGame(){
    userGuess=document.getElementById("user-guess").value;
    if(userGuess==secretLetter){
        alert("Yay!");
    }else if(userGuess!==secretLetter) {
        alert ("Guess again!");
    }else("That's not a letter");
}