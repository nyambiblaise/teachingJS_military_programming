class FetchWrapper{
    constructor(apiUrl) {
        this.apiUrl = apiUrl;

    }
    get(endPoint){
        return fetch(url + endPoint)
                .then(response=>response.json());
    }
}
const getData = new FetchWrapper("");
getData.get("").then(data=>{
    console.log(data);
})

fetch(url).then(response=>{
    if(!response.ok){
        throw new Error(`Something went wrong with API`);
        return response=>response.json();
    }
}).then(data=>{
    return data;
}).catch(error=>{
    return error;
})

/*
Important things to note:

The return is very important. It is what allows us to call .then(data => ...) on API.get(...). That's because it returns the result of fetch().then().
Don't forget to prefix the endpoint with the this.baseURL.
Since we know that the API is always going to return JSON, then we convert the response to JSON inside the get() method so that we don't have to do that outside the FetchWrapper class.
 */