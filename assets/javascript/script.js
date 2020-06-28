// var path = document.querySelector("#right-eye");
// var length = path.getTotalLength();
// console.log(length);

// const firstGradeWords = ['annoy', 'ignore', 'prefer', 'calm', 'investigate', 'protect', 'comfortable', 'invite', 'proud', 'consequences', 'important', 'question', 'curious', 'jealous', 'reminds', 'curve', 'leader', 'repeat', 'decide', 'list', 'report', 'directions', 'listen', 'rhyme', 'discover', 'lovely', 'respect', 'disappointed', 'measuring', 'searching', 'embarrassed', 'miserable', 'special', 'enormous', 'mumble', 'spotless', 'exhausted', 'negative', 'squirm', 'explore', 'nervous', 'stomped', 'fair', 'nibbled', 'suddenly', 'fascinating', 'note', 'suggestion', 'feast', 'notice', 'surprise', 'focus', 'observing', 'uncomfortable', 'frustrated', 'opposite', 'warning', 'gigantic', 'ordinary', 'wonder', 'grumpy', 'positive', 'worried', 'huge', 'precious'];

// 6 letter or less words
const kindergartenWords = ['cat', 'sun', 'cup', 'ghost', 'flower', 'pie', 'cow', 'banana', 'bug', 'book', 'jar', 'snake', 'light', 'tree', 'lips', 'apple', 'slide', 'socks', 'smile', 'swing', 'coat', 'shoe', 'water', 'heart', 'hat', 'ocean', 'kite', 'dog', 'mouth', 'milk', 'duck', 'eyes', 'skate', 'bird', 'boy', 'person', 'girl', 'mouse', 'ball', 'house', 'star', 'nose', 'bed', 'whale', 'jacket', 'shirt', 'beach', 'egg', 'face', 'cookie', 'cheese', 'drum', 'circle', 'spoon', 'warm', 'spider', 'letter'];

var word = getRandomWord();
var lettersFound = 0;
var remainingLetters = word.length;
var tries = 9;

const lettersEl = document.querySelectorAll(".letter");
const wordElement = document.getElementById("word");
const nextWord = document.getElementById("play-again");
const svgDiv = document.getElementById("svg-container");

const speechIcon = document.getElementById("speech-icon");
const synth = window.speechSynthesis;

function startGame() {
  displayNumOfLetters();
}

function resetGame(event) {
  // console.log("next");
  let svgIds = document.querySelectorAll("#head,#body, #left-arm, #left-leg, #left-eye, #right-arm, #right-leg, #right-eye, #mouth");
  for (let i = 0; i < svgIds.length; i++){
    svgIds[i].style.display = "none";
  }
  for (let j = 0; j < lettersEl.length; j++){
    lettersEl[j].style.opacity = "1.0";
    lettersEl[j].style.color = "#fff";
    lettersEl[j].style.pointerEvents = "auto";
  }
  speechIcon.style.visibility = "hidden";
  nextWord.style.visibility = "hidden";
  wordElement.innerHTML = "";
  startListening();
  word = getRandomWord();
  lettersFound = 0;
  remainingLetters = word.length;
  tries = 9;
  displayNumOfLetters();
}

function displayNumOfLetters() {
  for (let i = 0; i < word.length; i++){
    let letterSpan = document.createElement("span");
    wordElement.appendChild(letterSpan);
  }
}

function findLetter(x) {
  let i = 0;
  let position;

  while (i < word.length) { // iterate through the length of the word to find the letter(s)
    position = word.indexOf(x, i);

    if (position < 0 && i === 0) { // if there is no letter in the word
      tries--;
      showIncorrectLetter(x);
      drawHangman();
      // console.log("try:" + tries);
      break;
    } else if (position < 0 && i > 0) { // if there was a letter that was already found
      break;
    } else { // if there is at least one letter
      // console.log("position:" + position);
      lettersFound++;
      disableCorrectLetter(x);
      showCorrectLetter(position);
      remainingLetters--;
      // console.log("remaining:" + remainingLetters);
      i = position + 1;
    }
  }
}

function showCorrectLetter(index) {
  wordElement.children[index].textContent = word[index];
}

function showIncorrectLetter(letter) {
  let incorrectLetter = document.querySelector(`[data-letter="${letter}"]`);
  incorrectLetter.style.opacity = "0.1";
  incorrectLetter.style.pointerEvents = "none";
}

function disableCorrectLetter(letter) {
  let correctLetter = document.querySelector(`[data-letter="${letter}"]`);
  correctLetter.style.opacity = "0.75";
  correctLetter.style.color = "orange";
  correctLetter.style.pointerEvents = "none";
}

function getRandomWord() {
  let wordIndex = Math.floor(Math.random() * kindergartenWords.length);
  return kindergartenWords[wordIndex].toUpperCase();
}

function getLetter(event) {
  event.stopPropagation();
  let selectedLetter = event.target.getAttribute("data-letter");
  // console.log(selectedLetter);
  findLetter(selectedLetter);
  if (tries === 0) {
    // console.log("you lose");
    showWord();
    stopListening();
    svgDiv.setAttribute("class", "svg-container-animation");
    nextWord.style.visibility = "visible";
  } else if (remainingLetters === 0) {
    // console.log("you won");
    stopListening();
    speechIcon.style.visibility = "visible";
    nextWord.style.visibility = "visible";
  }
}

function showWord() {
  for (let i = 0; i < word.length; i++) {
    wordElement.children[i].textContent = word[i];
  }
  speechIcon.style.visibility = "visible";
}

function drawHangman() {
  if (tries === 8) {
    document.getElementById("head").style.display = "block";
  } else if (tries === 7) {
    document.getElementById("body").style.display = "block";
  } else if (tries === 6) {
    document.getElementById("left-arm").style.display = "block";
  } else if (tries === 5) {
    document.getElementById("right-arm").style.display = "block";
  } else if (tries === 4) {
    document.getElementById("left-leg").style.display = "block";
  } else if (tries === 3) {
    document.getElementById("right-leg").style.display = "block";
  } else if (tries === 2) {
    document.getElementById("left-eye").style.display = "block";
  } else if (tries === 1) {
    document.getElementById("right-eye").style.display = "block";
  } else if (tries === 0) {
    document.getElementById("mouth").style.display = "block";
  }
}

function stopListening() {
  for (let j = 0; j < lettersEl.length; j++) {
    lettersEl[j].removeEventListener("click", getLetter);
  }
}

function startListening() {
  for (let j = 0; j < lettersEl.length; j++) {
    lettersEl[j].addEventListener("click", getLetter);
  }
}

nextWord.addEventListener("click", resetGame);

speechIcon.addEventListener("click", function(){
  event.preventDefault();
  let voices = synth.getVoices();
  let utterThis = new SpeechSynthesisUtterance(word);
  utterThis.voice = voices[0];
  synth.speak(utterThis);
});

startGame();
startListening();
