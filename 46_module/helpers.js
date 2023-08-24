//
export class Helper{
    constructor(word) {
        this.word = word;
    }
    lowerCaseWord(word){
        return this.word.toLowerCase();
    }
    upperCaseWord(word){
        return this.word.toUpperCase();
    }
    capitalizeWord(word){
        return this.word[0].toUpperCase()+this.word.substring(1).toLowerCase();
    }
}