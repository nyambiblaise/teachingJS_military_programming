/*
Complete the function addApp such that it immutably adds the app parameter to the apps array it receives.
This means that the original array should not be modified.
 */
const originalApps = ["Calculator", "Phone"];
const addApp = (apps,app)=>{
    return [...apps,app];
}
console.log(addApp(originalApps,"Whatsapp"))