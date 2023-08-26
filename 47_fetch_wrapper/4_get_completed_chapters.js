/*
Let's say we're coding the Chapters sidebar of this website.
You can get the list of chapters by using the following endpoint https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json
Call the displayCompletedChapters with only the chapters (array) that have been completed.
 */
import FetchWrapper from "./FetchWrapper.js";
const fetchWrapper = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/");

const displayCompletedChapters = ()=>{
    fetchWrapper.get("chapters/all.json")
}
