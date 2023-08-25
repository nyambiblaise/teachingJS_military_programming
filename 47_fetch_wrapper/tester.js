import FetchWrapper from "./FetchWrapper.js";

const serverURL = "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json";
const fetchWrap = new FetchWrapper(serverURL);

fetchWrap.get("/notifications/new.json").then(data=>{
    console.log(data);
})