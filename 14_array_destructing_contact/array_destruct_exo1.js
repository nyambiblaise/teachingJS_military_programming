//Rewrite the code below to use array destructuring instead of assigning each value to a variable.
let item = ["Egg", 0.25, 12];
let name = item[0];
let price = item[1];
let quantity = item[2];
console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);

//solving it using the destruct method...
let newItem = ["Egg",0.25,12];
let showItems = someItems=>{
    const [name,qty,price] = someItems;
    return `Item: ${name}, Quantity: ${qty}, Price: ${price}`
}
console.log(showItems(newItem));

