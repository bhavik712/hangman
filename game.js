const Hangman = function(word,remainingGuesses){
    this.word = word;
    this.remainingGuesses = remainingGuesses;
    this.guessedletters = [];
}

Hangman.prototype.getPuzzle= function (){
    let puzzle = '';
    const wordArray = this.word.split('');

    wordArray.forEach((letter)=>{
      if(this.guessedletters.includes(letter)|| letter === ' '){
        puzzle += letter;
      }
      else{
        puzzle += '*';
      }
    })
    return puzzle;
}

Hangman.prototype.guessedLetters = function (letter){
    if(this.remainingGuesses){
        if(!this.guessedletters.includes(letter)){
            this.guessedletters.push(letter);
            if(!this.word.toLowerCase().includes(letter)){
                this.remainingGuesses--;
            }
            return (`You have ${this.remainingGuesses} chance left`)
        }
        else{
            return ('ohh already guessed character');
        }
    }
    else{
        return ('Sorry your guess chances are completed.')
    }
    
}
const game1 = new Hangman('chair',2);
const game2 = new Hangman('New Body',4);
console.log(game1.getPuzzle());

window.addEventListener('keypress',(e)=>{
    const letter = (String.fromCharCode(e.charCode)).toLocaleLowerCase();
    console.log(game1.guessedLetters(letter));
    console.log(game1.getPuzzle());
})
