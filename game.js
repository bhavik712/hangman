const Hangman = function(word,remainingGuesses){
    this.word = word;
    this.remainingGuesses = remainingGuesses;
    this.guessedletters = [];
    this.status = 'Playing';
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

    document.querySelector('#puzzle-word').textContent = puzzle;
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

Hangman.prototype.calculateStatus = function(){
    if(!this.remainingGuesses){
        this.status = 'Lost';
    }
    else{
        let finished = true;
        const wordArray = this.word.split('');

        finished = wordArray.every((letter)=> this.guessedletters.includes(letter))
        if(finished){
            this.status = 'Won';
        }
        else{
            this.status ='Playing';
        }

    }
    return this.status;
}
const game1 = new Hangman('chair',2);
const game2 = new Hangman('New Body',4);
// onsole.log(game1.getPuzzle());

game1.getPuzzle();
window.addEventListener('keypress',(e)=>{
    const letter = (String.fromCharCode(e.charCode)).toLocaleLowerCase();
    const guessRespone = (game1.guessedLetters(letter));
    document.querySelector('#guess-response').textContent = guessRespone;
    game1.getPuzzle();
    document.querySelector('#show-status').textContent = game1.calculateStatus();

})
