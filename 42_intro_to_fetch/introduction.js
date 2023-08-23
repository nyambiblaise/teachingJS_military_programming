/*
We use the fetch Web API (or fetch API) to make a request to a server (which could be ours or an external one, for example, a Weather API) to retrieve some information without reloading the page.
 */
const url = "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json";
const search = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(fetch(url));
        },1000);
        //reject("Something went wrong getting data");
    });
}
search().then(data=>{
    console.log(data);
}).catch(error=>{
    console.log(error);
})