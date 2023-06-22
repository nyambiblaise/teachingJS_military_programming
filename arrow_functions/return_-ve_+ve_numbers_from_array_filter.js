let numbers = [90,-5,6,0,-2,48,-34,7,9,-12];
let positiveNumbers = numbers.filter(number=>{
    return number>0;
});
console.log(positiveNumbers);
let evenNumbers = numbers.filter(n=>{
    return n%2===0;
});
console.log(evenNumbers);
