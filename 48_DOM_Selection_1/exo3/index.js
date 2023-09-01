/*
Complete the getArticleHeadline function such that it returns the headline of the article.

 */
const getArticleHeadline = ()=>{
    const head = document.querySelector(".container #headline").textContent;
    return head;
}
console.log(getArticleHeadline());