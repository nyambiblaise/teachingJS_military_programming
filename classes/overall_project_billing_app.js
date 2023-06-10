//Users will fill in the amounts that they paid (at a restaurant for example) and then the app will calculate the average to be paid per person. This will be an array of numbers.
/*
Complete the class Bill with the following instance methods:
- addAmount which adds the amount it receives to the amounts instance variable. Note: the amount it receives is a string.
- getCount which returns the number of items in the amounts instance variable.
- getTotal which returns the sum of all the numbers inside the amounts instance variable.
- getAverage which returns the average a person needs to pay (sum / count). Note: you can use existing instance methods by using the this. syntax.
 */
class Bill{
    constructor(){
        this.amounts = [];
    }
    addAmount(newAmount){
        let amt = parseInt(newAmount,10);
        this.amounts.push(amt);
    }
    getCount(){
        return this.amounts.length;
    }
    getTotal(){
        let sum = 0;
        let g = this.amounts.forEach(function (f) {
            sum = sum + f;
        });
        return sum;
    }
    getAverage(){
        return this.getTotal()/this.getCount();
    }
}
const bill = new Bill();
bill.addAmount(500);
bill.addAmount(4500);
console.log(bill.getTotal())
console.log(bill.getCount())
console.log(bill.getAverage())