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
    put2(endpoint, body) {
        return this.#send("put", endpoint, body);
    }

    post(endpoint, body) {
        return this.#send("post", endpoint, body);
    }

    delete(endpoint, body) {
        return this.#send("delete", endpoint, body);
    }

    #send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}