/*
Create a fakeFetch(endpoint) function such that:

When the endpoint is "flight-status", it should return a promise that resolves successfully after 1 second with the following object:
{
    departed: false,
    delayed: true
}
For all other endpoints, it should return a promise that fails. You can also pass an error message such as: "endpoint not supported.".
 */
const fakeFetch = (endpoint)=>{
    return new Promise((resolve,reject)=>{
        resolve("");
        reject("");
    })
}