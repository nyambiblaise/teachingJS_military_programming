//forEach function
let names = ["jude","joseph","peter","silas"];
names.forEach(function (user) {
    console.log(user)
})
//map function: we want to map all elements to a new array and set all items to uppercase
let newNames = names.map(function (n) {
    return n.toUpperCase();
})
console.log(newNames)
//include function: the function below checks if a specific character exist in an array.
let characters = ["A","G","P","T"];
function hasCharacter(character,char) {
    if(character.includes(char))
        return true;
    else
        return false;
}
console.log(hasCharacter(characters,"A"))