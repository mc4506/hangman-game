
const firstGradeChecked = document.getElementById('first-grade');
const kindergartenChecked = document.getElementById('kindgergarten');


// source for words are from: https://www.greatschools.org/gk/articles/academic-vocabulary-words-for-first-graders/
const firstGradeWords = ['annoy', 'ignore', 'prefer', 'calm', 'investigate', 'protect', 'comfortable', 'invite', 'proud', 'consequences', 'important', 'question', 'curious', 'jealous', 'reminds', 'curve', 'leader', 'repeat', 'decide', 'list', 'report', 'directions', 'listen', 'rhyme', 'discover', 'lovely', 'respect', 'disappointed', 'measuring', 'searching', 'embarrassed', 'miserable', 'special', 'enormous', 'mumble', 'spotless', 'exhausted', 'negative', 'squirm', 'explore', 'nervous', 'stomped', 'fair', 'nibbled', 'suddenly', 'fascinating', 'note', 'suggestion', 'feast', 'notice', 'surprise', 'focus', 'observing', 'uncomfortable', 'frustrated', 'opposite', 'warning', 'gigantic', 'ordinary', 'wonder', 'grumpy', 'positive', 'worried', 'huge', 'precious'];


const kindergartenWords = ['cat', 'sun', 'cup', 'ghost', 'flower', 'pie', 'cow', 'banana', 'snowflake', 'bug', 'book', 'jar', 'snake', 'light', 'tree', 'lips', 'apple', 'slide', 'socks', 'smile', 'swing', 'coat', 'shoe', 'water', 'heart', 'hat', 'ocean', 'kite', 'dog', 'mouth', 'milk', 'duck', 'eyes', 'skateboard', 'bird', 'boy', 'person', 'girl', 'mouse', 'ball', 'house', 'star', 'nose', 'bed', 'whale', 'jacket', 'shirt', 'beach', 'egg', 'face', 'cookie', 'cheese', 'drum', 'circle', 'spoon', 'warm', 'spider'];

// for (var i=0; i<firstGradeWords.length; i++) {
//     console.log(firstGradeWords[i]);
// }

// for (var i=0; i<kindergartenWords.length; i++) {
//     console.log(kindergartenWords[i]);
// }

const allWords = [firstGradeWords, kindergartenWords];

let word = kindergartenWords[Math.floor(Math.random()*kindergartenWords.length)];

let numberOfLetters = word.length;

alert(`The word has ${numberOfLetters} letters`);

alert(word);
let numberOfGuesses = 6;


while(numberOfGuesses >0 && numberOfLetters >0) {
    let guess = prompt("Guess a letter.");
    console.log(guess);
    console.log(word.indexOf(guess));
    
    if (word.indexOf(guess)>=0) {
        var number = word.indexOf(guess)+1;
        numberOfLetters -=1;
        alert("YES! There is an " + guess + ". It is the " + number + "th letter. There are " + numberOfLetters + " left");
    } else {
        numberOfGuesses -= 1;
        alert("SORRY. Try again. There are " + numberOfLetters + " letters left. You have " + numberOfGuesses + " guesses left.");
    }
}