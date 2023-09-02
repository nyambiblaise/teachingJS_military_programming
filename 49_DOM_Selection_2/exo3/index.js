//write a function that returns the number of links on the page
const getNBLinks = ()=>{
    return document.querySelectorAll("a").length;
}
console.log(`There are ${getNBLinks()} links on the page`);