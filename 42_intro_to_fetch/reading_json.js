/*
Just like how fetch(URL) returns a promise, the response.json() method also returns a promise. This means that we cannot read its result directly. Instead, we have to resolve the promise with .then(callback).

Doing so, will give us access to the data that we get back from fetching that URL. Here's what the syntax looks like:

Notice how we had to call .then() twice. That's because fetch(URL) and response.json() both return a promise.

Calling .then() on the result of .then() is called promise chaining.

What is 'data'?
The data variable will be the information that the API returns.
If we go back to the previous example of the Twitter notifications, data will contain an object with the number of new notifications.

The data that you receive will be one of the previous data types that you learned:
array
object
boolean
string
number
 */
const url = "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json";
const getData = ()=>{
    return fetch(url).then(response=>response.json()).then(data=>{
        console.log(data)
    })
}
//console.log(getData());
getData();