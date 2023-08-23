/*
We use the fetch Web API (or fetch API) to make a request to a server (which could be ours or an external one, for example, a Weather API) to retrieve some information without reloading the page.

This is extremely important. Fetch always returns a promise.
This is because fetch has to go to the network, this could take anywhere between a couple of milliseconds and a second (on average). So, we cannot freeze the entire browser while the fetch request is working.
Thus, by design, fetch returns a promise that we can resolve once the request has finished.

This means that we'll have to add a .then() after the fetch() call.
 */
const url = "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json";
const search = ()=>{
    return fetch(url).then(()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve();
            },1000);
    })
    }).catch(error=>{
        console.log(error);
    });
}
console.log(search())