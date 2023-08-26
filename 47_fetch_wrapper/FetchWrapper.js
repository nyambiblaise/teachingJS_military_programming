export default class FetchWrapper{
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint){
        return fetch(this.baseURL + endpoint,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        }).then(response=>response.json());
    }
    put(endpoint,data){
        return fetch(this.baseURL+endpoint, {
            method:"POST",
            headers:{
                "Content-Type":"application-json"
            },
            body:JSON.stringify(data)
        })
            .then(response=>response.json());
    }
}