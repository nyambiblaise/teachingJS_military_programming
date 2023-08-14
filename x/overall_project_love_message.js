class Love {
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName =lastName;
    }
    tellHerHowYouFeel(){
        return `${this.firstName} ${this.lastName}, ${this.message1()} ${this.message2()} ${this.message3()}`;
    }
    message1(){
        return "I";
    };
    message2(){
        return "Love";
    };
    message3(){
        return "You";
    }
}
class Speaker extends Love{
    parleMaintenant(){
        return this.tellHerHowYouFeel();
    }
}
let foncePetit = new Speaker("Rihanna","Mercy");
console.log(foncePetit.parleMaintenant())