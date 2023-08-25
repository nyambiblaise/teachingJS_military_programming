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