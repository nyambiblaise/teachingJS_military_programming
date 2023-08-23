/*
We use the fetch Web API (or fetch API) to make a request to a server (which could be ours or an external one, for example, a Weather API) to retrieve some information without reloading the page.

Fetch is used to get the result of a certain URL without reloading the page. This URL can return Text, or JSON, or Binary data, or even other formats.

However, as a JavaScript developer, you will work with JSON for about 99% of the time.

This is extremely important. Fetch always returns a promise.
This is because fetch has to go to the network, this could take anywhere between a couple of milliseconds and a second (on average). So, we cannot freeze the entire browser while the fetch request is working.
Thus, by design, fetch returns a promise that we can resolve once the request has finished.

This means that we'll have to add a .then() after the fetch() call.
 */
const url = "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json";
const search = ()=>{
    return fetch(url).then(response=>{
        return response.json();
    });
}
console.log(search())

/*
In the previous lesson, we learned that fetch always returns a promise. So, what do we get when we resolve this promise?
We get a Response object that we're going to call response.
*/
fetch(URL)
    .then(response => {
        console.log(response); // detailed in next chapter
    });
/*
So, because fetch(URL) returns a promise, we can resolve the promise with a .then(callback). This callback will run sometime in the future when the fetch request has been completed.
Also, this callback will receive as a first argument the response from the request that we sent. You can call this argument whatever you want, however, we recommend that you call it response.
 */