//Complete the logLinksTexts function such that it logs the text of every link to the console.
const logLinksTexts = ()=>{
    document.querySelectorAll("a").forEach(link=>{
        console.log(link.textContent);
    })
}
logLinksTexts();