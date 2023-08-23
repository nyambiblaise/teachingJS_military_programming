/*
Here, you will learn how to CONSUME JSON data using fetch. But keep in mind that fetch itself is a generic browser
 function and is not only meant for reading JSON.

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

This is why whenever you fetch(URL), the response that we get back is just a response object and the browser doesn't know that the data it has received is in JSON format. This is why we should manually convert the response into JSON:
 */
fetch(URL)
    .then(response => {
        return response.json();
    });
/*
This .json() method on response is almost exactly the same as JSON.parse(string). The only difference however is that response.json() is non-blocking and asynchronous meaning that it returns a promise.

What you need to understand is that every time you send a fetch request to a certain API and you expect JSON (which
 is most of the time), you should convert the response that you get back into JSON format.
 */