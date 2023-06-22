let numbers = [90,-5,6,0,-2,48,-34,7,9,-12];
//method 1_positive numbers
let positiveNumbers = numbers.filter(number=>{
    return number>0;
});
console.log(positiveNumbers);
//method 2_positive numbers
let getPostiveNumbers = (someNumbers)=>{
    return someNumbers.filter(n=>{
        return n>0;
    });
}
//method 1_even numbers
let evenNumbers = numbers.filter(n=>{
    return n%2===0;
});
console.log(evenNumbers);
//method 2_even numbers
let getEvenNumbers = (someNumbers)=>{
    return someNumbers.filter(ns=>{
        return ns%2===0;
    });
}


