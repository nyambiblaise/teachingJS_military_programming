/*
Complete the function getProductDetails such that it returns an object with the following properties:

id: a number representing the id of the product.
title: a string representing the title of the product.
inStock: a boolean representing whether the product is in stock or not.
 */
function getProductDetails() {
    let products = [];
    products.id = 5;
    products.title = "Fruit";
    products.inStock = true;
    return products;
}
console.log(getProductDetails())