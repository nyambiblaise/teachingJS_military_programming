const names = ["Sam", "Alex", "Charlie"];

//method 1
const findUser = names.find(name => name === "Sam");
console.log(findUser);

//method 2
const findUserByName = (someNames,search)=>{
    return someNames.find(name=>name===search);
}
console.log(findUserByName(names,"Alex"))