/*
Complete the getTweetDetails function such that it fetches the following endpoint https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json and then calls the showAuthorName function with the full name of tweet author (the full name should contain a space character between the first name and the last name).

We recommend that you use the exported FetchWrapper from fetch-wrapper.js.
 */
import FetchWrapper from "./FetchWrapper.js";
let url = "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/";
const fetchWrapper = new FetchWrapper(url);

const getTweetDetails = ()=>{
    fetchWrapper.get(`${url}tweet/1080777336298049537.json`)
}
showAuthorName(firstname,lastname){
    console.log(`${firstname} ${lastname}`);
}