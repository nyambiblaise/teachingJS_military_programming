let numbers = [90,-5,6,0,-2,48,-34,7,9,-12];
//method 1_positive 2_numbers
let positiveNumbers = numbers.filter(number=>{
    return number>0;
});
console.log(positiveNumbers);
//method 2_positive 2_numbers
let getPostiveNumbers = (someNumbers)=>{
    return someNumbers.filter(n=>{
        return n>0;
    });
}
//method 1_even 2_numbers
let evenNumbers = numbers.filter(n=>{
    return n%2===0;
});
console.log(evenNumbers);
//method 2_even 2_numbers
let getEvenNumbers = (someNumbers)=>{
    return someNumbers.filter(ns=>{
        return ns%2===0;
    });
}


