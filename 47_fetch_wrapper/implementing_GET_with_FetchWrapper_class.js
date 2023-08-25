class FetchWrapper{
    constructor(apiUrl) {
        this.apiUrl = apiUrl;

    }
    get(endPoint){
        return fetch(this.apiUrl + endPoint,{
            method:"get",
            headers: {
                "Content-Type":"application/json"
            }
        }).then(response=>{
            if(!response.ok){
                throw new Error(`Something wrong ${response.statusText}`);
            }
            return response.json()
        });
    }
    put(endPoint,jsonData){
        return fetch(this.apiUrl+endPoint,{
            method:"post",
            body:JSON.stringify(jsonData),
            headers:{
                "Content-Type":"application-json"
            }
        }).then(response=> {
            if(!response.ok){
                throw new Error(`Ooops ${response.statusText}`);
            }
            return response.json()
        });
    }
}
const url = "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/";

const fetchWrapper = new FetchWrapper(url);
const msg = {
    age:14,name:"paul ndip"
}
fetchWrapper.get("notifications/new.json").then(data=>{
    console.log(data);
})
fetchWrapper.put("notifications/new.json",msg).then(data=>{
    console.log(data);
})

/*
Important things to note:
The return is very important. It is what allows us to call .then(data => ...) on API.get(...). That's because it returns the result of fetch().then().
Don't forget to prefix the endpoint with the this.baseURL.
Since we know that the API is always going to return JSON, then we convert the response to JSON inside the get() method so that we don't have to do that outside the FetchWrapper class.
 */