/*
Complete the 4 functions such that they return what is expected. Every method has a comment explaining what it needs to return.
getNavbarElement(): get the element with id navbar
getMainElement(): get the element with id main
getAboutFromFooter() : get the about link that's in the footer
getTheParagraphElement() : get the first paragraph element
 */
const getNavbarElement = ()=>{
    return document.querySelector("#navbar");
}
const getMainElement = ()=>{
    return document.querySelector("#main");
}
const getAboutFromFooter = ()=>{
    return document.querySelector("#footer-wrapper a.about");
}
const getTheParagraphElement = ()=>{
    return document.querySelector("#main.container p");
}