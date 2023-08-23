/*
In the previous lesson, we learned that fetch always returns a promise. So, what do we get when we resolve this promise?
We get a Response object that we're going to call response.
*/
fetch(URL)
    .then(response => {
        console.log(response); // detailed later
    });
/*
So, because fetch(URL) returns a promise, we can resolve the promise with a .then(callback). This callback will run sometime in the future when the fetch request has been completed.
Also, this callback will receive as a first argument the response from the request that we sent. You can call this argument whatever you want, however, we recommend that you call it response.
 */