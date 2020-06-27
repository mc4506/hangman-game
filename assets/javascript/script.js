var path = document.querySelector("#letterB");
var length = path.getTotalLength();
console.log(length);


// source for words are from: https://www.greatschools.org/gk/articles/academic-vocabulary-words-for-first-graders/
const firstGradeWords = ['annoy', 'ignore', 'prefer', 'calm', 'investigate', 'protect', 'comfortable', 'invite', 'proud', 'consequences', 'important', 'question', 'curious', 'jealous', 'reminds', 'curve', 'leader', 'repeat', 'decide', 'list', 'report', 'directions', 'listen', 'rhyme', 'discover', 'lovely', 'respect', 'disappointed', 'measuring', 'searching', 'embarrassed', 'miserable', 'special', 'enormous', 'mumble', 'spotless', 'exhausted', 'negative', 'squirm', 'explore', 'nervous', 'stomped', 'fair', 'nibbled', 'suddenly', 'fascinating', 'note', 'suggestion', 'feast', 'notice', 'surprise', 'focus', 'observing', 'uncomfortable', 'frustrated', 'opposite', 'warning', 'gigantic', 'ordinary', 'wonder', 'grumpy', 'positive', 'worried', 'huge', 'precious'];

const kindergartenWords = ['cat', 'sun', 'cup', 'ghost', 'flower', 'pie', 'cow', 'banana', 'snowflake', 'bug', 'book', 'jar', 'snake', 'light', 'tree', 'lips', 'apple', 'slide', 'socks', 'smile', 'swing', 'coat', 'shoe', 'water', 'heart', 'hat', 'ocean', 'kite', 'dog', 'mouth', 'milk', 'duck', 'eyes', 'skateboard', 'bird', 'boy', 'person', 'girl', 'mouse', 'ball', 'house', 'star', 'nose', 'bed', 'whale', 'jacket', 'shirt', 'beach', 'egg', 'face', 'cookie', 'cheese', 'drum', 'circle', 'spoon', 'warm', 'spider'];


function findLongestWordLength() {
  let longest = 0;
  for (let i = 0; i < kindergartenWords.length; i++){
    let wordLengthA = kindergartenWords[i].length;
    if (wordLengthA > longest) {
      longest = wordLengthA;
    }
  }
  return longest;
}

function getRandomWord() {
  let wordIndex = Math.floor(Math.random() * kindergartenWords.length);
  return kindergartenWords[wordIndex];
}



var word = getRandomWord();

var longestWordLength = findLongestWordLength();

console.log(word);

var lettersFound = 0;
var remainingLetters = word.length;

for (let j = 0; j < longestWordLength; j++){

}
// let guess = prompt("guess a letter");

findLetter(guess);

// if (remainingLetters === 0) {
//   alert("you guessed the word");
// }


function findLetter(x) {
  let i = 0;
  let position;

  while (i < word.length) {
    position = word.indexOf(x, i);
    
    if (position < 0) {
      break;
    } else {
      console.log(position);
      lettersFound++;
      remainingLetters--;
      i = position + 1;
    }
  }  
}
