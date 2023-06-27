//create a function <<addItem>> that should add the item it receives as a parameter to the items array.
//another function <<exportLowerCasedCSV>> should return a string containing all the items in lower case and separated by a comma and a space character.
let listOfItems = ["BOOK","PEN"];
function addItem(items,item){
    items.push(item);
    return items;
}
//with chaining - joining 2 operators without having to create a variable
function exportLowerCasedCSV(items){
    return items.map(function (it) {
        return it.toLowerCase()
    }).join(",");
}
//Without chaining
function exportLowerCasedCSV2(items) {
    let newItems = items.map(function (it) {
        return it.toLowerCase()
    });
    return newItems.join(",")
}
console.log(exportLowerCasedCSV(listOfItems))