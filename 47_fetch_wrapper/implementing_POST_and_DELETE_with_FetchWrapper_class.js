/*
the post() and delete() methods are very similar to the put(). The only thing that changes is the method: "put".
 */
class FetchWrapper {
    // constructor() and get()

    #send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method: method, // this is now dynamic
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}
/*
The #send() method takes the method ("put", "post", or "delete") followed by the endpoint and the body.
So, now, we can implement the put(), post(), and delete() methods that call this internal private #send() method:
 */
class FetchWrapper {
    // constructor() and get()

    put(endpoint, body) {
        // pass the endpoint and body parameters to #send
        // and specify the method to be 'put'
        return this.#send("put", endpoint, body);
    }

    post(endpoint, body) {
        // pass the endpoint and body parameters to #send
        // and specify the method to be 'post'
        return this.#send("post", endpoint, body);
    }

    delete(endpoint, body) {
        // pass the endpoint and body parameters to #send
        // and specify the method to be 'delete'
        return this.#send("delete", endpoint, body);
    }

    #send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method, // object shorthand
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}