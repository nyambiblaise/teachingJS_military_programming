/*
A fetch wrapper is not absolutely necessary, but, it does make working with fetch easier and more eloquent.

A fetch wrapper is a class that wraps the fetch API in a way that works specifically for our scenario. When building a website as web developers, you and I will often work with the following:

mostly the same API (same base URL but different endpoints)
a JSON API (an API that returns JSON)

This means that for every fetch request we make, we'll have quite some repetition.
For example, assuming the following API documentation:

Base URL: https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app

Endpoints:

GET /notifications/new.json
GET /chapters/all.json
If we have to send 2 fetch requests to both endpoints, we'll have quite some repetition:
 */
fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json").then(response=>response.json()).then(data=>{
    console.log(data)
})
fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json").then(response=>response.json()).then(data=>{
    console.log(data)
})
/*
A real-life app would have anywhere between 20 and 100+ fetch requests to the same API (same base URL but different endpoints). This is a lot of repetition.

This is exactly why a fetch wrapper class can come in handy. Assuming we already built this fetch wrapper, we can re-write the code above such that it looks like the following:
 */
const API = new FetchWrapper(URL);
API.get("endPoint1").then(data=>{
    console.log(data);
});
API.get("endPoint2").then(data=>{
    console.log(data);
})
/*
This FetchWrapper class has the following benefits:

we only need to set the base URL once (we pass it to the constructor).
It always converts the response to JSON (response => response.json()), since our API always returns JSON.
There are other benefits that are discussed in the chapter recap.
 */