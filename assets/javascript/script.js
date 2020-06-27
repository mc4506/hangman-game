// var path = document.querySelector("#right-eye");
// var length = path.getTotalLength();
// console.log(length);

// const firstGradeWords = ['annoy', 'ignore', 'prefer', 'calm', 'investigate', 'protect', 'comfortable', 'invite', 'proud', 'consequences', 'important', 'question', 'curious', 'jealous', 'reminds', 'curve', 'leader', 'repeat', 'decide', 'list', 'report', 'directions', 'listen', 'rhyme', 'discover', 'lovely', 'respect', 'disappointed', 'measuring', 'searching', 'embarrassed', 'miserable', 'special', 'enormous', 'mumble', 'spotless', 'exhausted', 'negative', 'squirm', 'explore', 'nervous', 'stomped', 'fair', 'nibbled', 'suddenly', 'fascinating', 'note', 'suggestion', 'feast', 'notice', 'surprise', 'focus', 'observing', 'uncomfortable', 'frustrated', 'opposite', 'warning', 'gigantic', 'ordinary', 'wonder', 'grumpy', 'positive', 'worried', 'huge', 'precious'];

// const kindergartenWords = ['cat', 'sun', 'cup', 'ghost', 'flower', 'pie', 'cow', 'banana', 'snowflake', 'bug', 'book', 'jar', 'snake', 'light', 'tree', 'lips', 'apple', 'slide', 'socks', 'smile', 'swing', 'coat', 'shoe', 'water', 'heart', 'hat', 'ocean', 'kite', 'dog', 'mouth', 'milk', 'duck', 'eyes', 'skateboard', 'bird', 'boy', 'person', 'girl', 'mouse', 'ball', 'house', 'star', 'nose', 'bed', 'whale', 'jacket', 'shirt', 'beach', 'egg', 'face', 'cookie', 'cheese', 'drum', 'circle', 'spoon', 'warm', 'spider'];

var word = "LETTER"
var lettersFound = 0;
var remainingLetters = word.length;
var tries = 8;

const lettersEl = document.getElementById("letters");
console.log(lettersEl);
var wordElement = document.getElementById("word");
var nextWord = document.getElementById("play-again");


displayNumOfLetters();


function displayNumOfLetters() {
  for (let i = 0; i < word.length; i++){
    let letterSpan = document.createElement("span");
    wordElement.appendChild(letterSpan);
  }
}

function findLetter(x) {
  let i = 0;
  let position;

  while (i < word.length) {
    position = word.indexOf(x, i);
    
    if (position < 0 && i === 0) {
      tries--;
      showIncorrectLetter(x);
      drawHangman();
      console.log("try:" + tries);
      break;
    } else if (position < 0 && i > 0) {
      break;
    } else {
      console.log("position:" + position);
      lettersFound++;
      showCorrectLetter(position);
      remainingLetters--;
      console.log("remaining:" + remainingLetters);
      i = position + 1;
    }
  }  
}

function showCorrectLetter(index) {
  wordElement.children[index].textContent = word[index];
}

function showIncorrectLetter(letter) {
  let incorrectLetter = lettersEl.querySelector(`[data-letter="${letter}"]`);
  incorrectLetter.style.opacity = "0.1";
  incorrectLetter.style.pointerEvents = "none";
}

function getRandomWord() {
  let wordIndex = Math.floor(Math.random() * kindergartenWords.length);
  return kindergartenWords[wordIndex];
}

function getLetter(event) {
  let selectedLetter = event.target.getAttribute("data-letter");
  console.log(selectedLetter);
  findLetter(selectedLetter);
  if (tries === 0) {
    console.log("you lose");
    lettersEl.removeEventListener("click", getLetter);
  } else if (remainingLetters === 0) {
    console.log("you won");
    lettersEl.removeEventListener("click", getLetter);
    nextWord.style.opacity = "1.0";
  }
}

function drawHangman() {
  if (tries === 7) {
    document.getElementById("head").style.display = "block";
  } else if (tries === 6) {
    document.getElementById("body").style.display = "block";
  } else if (tries === 5) {
    document.getElementById("left-arm").style.display = "block";
  } else if (tries === 4) {
    document.getElementById("right-arm").style.display = "block";
  } else if (tries === 3) {
    document.getElementById("left-leg").style.display = "block";
  } else if (tries === 2) {
    document.getElementById("right-leg").style.display = "block";
  } else if (tries === 1) {
    document.getElementById("left-eye").style.display = "block";
  } else if (tries === 0) {
    document.getElementById("right-eye").style.display = "block";
  }
}


lettersEl.addEventListener("click", getLetter);