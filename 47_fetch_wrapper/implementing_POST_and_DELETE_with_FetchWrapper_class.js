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