
//Hangman PSEUDOCODE
//declare words array
var hangManWords = ['potato', 'mobile', 'lego', 'jacket',
'apple', 'cat', 'throne', 'street',];


//Game start - Display in HTML, "Press any key to get started"
$("#startButton").on("click", function() {
  console.log("START BUTTON CLICKED")
  document.onkeyup = gameStart();

});
//User presses any key to start.
var gameStart = function startGame() {

  //Random word is pulled from hangManWords array.
  var getRandomWord = hangManWords[Math.floor(Math.random() * hangManWords.length)];
  console.log("Your word is " + getRandomWord);

  //word choice is counted
  var wordLength = getRandomWord.length;
  console.log("There are " + wordLength + " letters in the word chosen");

  //word choice is split into its seperate letters and stored in an array called splitWordArray.
  var splitWordArray = getRandomWord.split("");
  console.log("The word is now split thusly " + splitWordArray);

  //Computer determines number of guesses.
  var guessNumber = (wordLength + 6);
  console.log("You have " + guessNumber + " guesses to win");;

  //Display instructions as alert();
  console.log("Alert = Choose letters in order to guess the word! You have "  + guessNumber + " guesses");

  //loop create hangDiv, iterate splitWordArray out and appends splitWordArray into them.
  var hangDiv = document.createElement("div")

  for (i = 0; i < wordLength; i++){
  var hangDiv = document.createElement("div")
  hangDiv.setAttribute("id", "blanks");
  console.log(hangDiv.innerHTML = splitWordArray[i])
  console.log(document.body.appendChild(hangDiv));
  var hide = document.getElementById('blanks[i]'); //needs attention
  splitWordArray[i].style.display = "none" //needs attention
  };





};// gameStart function endtag

// function hideText () {
// }


//Display number of guesses left.


//User chooses letters
    //if user choice letter matches a letter in var array splitWordArray add letter into matching word blank(s).

    //if all blanks are full (for loop itirate through the array splitWordArray).

    //display alert "Congratulations! You've guessed correctly and cheated the Hangman!"

    //else if letter does not match a letter in var array splitWordArray
