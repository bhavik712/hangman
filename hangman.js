const Hangman = function(word,chances){
    this.word = word;
    this.chances = chances;
}

Hangman.prototype.lowercase = function(){
    const wordarray = (this.word.toLowerCase()).split('');
    return wordarray;
}
Hangman.prototype.guessedLatters = function(char){
    if(guessedLatterArray.length < this.word.length){
        guessedLatterArray.push(char);
    }
    else{
        console.log('letters are guessed');
    }
    return guessedLatterArray;
     
}
Hangman.prototype.getPuzzle= function(){
    let gameString= '';
    // for(let i=0; i<this.word.length; i++){
    //     gameString += '*';
    // }

    // return gameString;
    let originalStringArray = (this.word.toLowerCase()).split('');
    originalStringArray.forEach((char)=>{
        if(char ===' '){
            gameString += ' ';
        }
        else{
            gameString += '*'
        }
    })
    return gameString;

}

Hangman.prototype.result = function(wordarray, guessedLatterArray){
    let resultString = '';
    let guessedString = guessedLatterArray.tostring();
    wordarray.forEach((char)=>{
        if(guessedString.includes(char) || char === ' '){
            resultString += char;
        }
        else{
            resultString += '*';
        }
    })
    return resultString;
}
const match1 = new Hangman('Chair',2);
console.log(match1.getPuzzle());

//console.log(match1.lowercase());

const match2 = new Hangman('Key board',1);
console.log(match2.getPuzzle());

const wordA = match1.lowercase()


//console.log(match1);
//console.log(match2);