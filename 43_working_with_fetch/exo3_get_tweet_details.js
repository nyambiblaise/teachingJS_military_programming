/*
Complete the getTweetDetails function such that it fetches the following endpoint https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json and then calls the showAuthorName function with the full name of tweet author (the full name should contain a space character between the first name and the last name).
 */
const tweetURL = "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json";

const getTweetDetails = ()=>{
    return fetch(tweetURL).then(response=>response.json()).then(data=>{
        console.log(data.author.details);
        showAuthorName(`${data.author.details.firstName} ${data.author.details.lastName}`)
    })
}
const showAuthorName = (fullName)=>{
    console.log(fullName);
}
getTweetDetails();