import {getUserDetails} from "./exo1_question.js";

let find = "Jones";
const startLoader = (name)=>{
    console.log(`Searching for ${name}....`);
}
const stopLoader = ()=>{
    console.log("Search has been completed")
}
startLoader(find);
getUserDetails(find).then(data=>{
    console.log(data);
}).catch(error=>{
    console.error()
}).finally(()=>{
    stopLoader();
})