import FetchWrapper from "./FetchWrapper.js";

const serverURL = "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app";
const fetchWrap = new FetchWrapper(serverURL);

fetchWrap.get("/notifications/new.json").then(data=>{
    console.log(data);
})

//for the POST
const postURL = "https://api.learnjavascript.online/";
const data = {
    grade:16
}
const fetchWrap2 = new FetchWrapper(postURL);
fetchWrap2.put("demo/grades.json",data).then(data=>{
    console.log(data);
})