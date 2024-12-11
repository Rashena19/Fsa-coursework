class Sentence {
    data;
    constructor(givenData){
        this.data = givenData;
    }
    getWordCount(){
        if(this.data){
            let wordsArray = this.data.split(" ");
            return wordsArray.length;
        }
        return 0;
    }
    hasLetter(letter){
        return this.data.includes(letter)
    }
    getLetterCount(letter){
        if(!this.hasLetter(letter)){
            return 0;
        }
        let count = 0;
        for (let i = 0; index < this.data.length; index++) {
            if (this.data[i] == this.data.length)
                count ++
        }
    }
}


let givenData = prompt("Enter a sentence")

const mySentence = new Sentence(givenData);
console.log(mySentence.getWordCount());
console.log(mySentence.hasLetter("z"))
console.log(mySentence.getLetterCount("z"))