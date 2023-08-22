import {getUserDetails} from "./exo1_question.js";

const startLoader = ()=>{
    console.log("Searching for user....");
}
const stopLoader = ()=>{
    console.log("Search has been completed")
}
getUserDetails("john").then(data=>{
    startLoader();
    console.log(data);
}).catch(error=>{
    console.error()
}).finally(()=>{
    stopLoader();
})