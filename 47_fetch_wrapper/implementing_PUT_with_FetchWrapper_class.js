/*
we'll implement the put(endpoint, dataToPost) method of the FetchWrapper class.

The put(endpoint, dataToPost) method is doing a lot of work behind the scenes:

it's sending a PUT request to https://api.xyz.com/demo/grades.json (baseURL followed by endpoint)
it's sending a custom header "Content-Type": "application/json"
it's converting the body argument to a JSON string (with JSON.stringify) and sending it as the body of the fetch request
it's converting the server response to json (response => response.json())
From that, we can deduce that the put(endpoint, body) implementation looks like the following:
 */
const dataToPost = {
    name:"john",
    grade:18,
    age:15,
    marks:{
        java:12,
        cpp:20
    }
}
put(endpoint, dataToPost) {
    return fetch(this.baseURL + endpoint, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(response => response.json());
}

/*
Important things to note:

The return is very important. It is what allows us to call .then(data => ...) on API.put(...). That's because it returns the result of fetch().then().
Don't forget to prefix the endpoint with the this.baseURL.
The method is set to put.
The "Content-Type" header is being sent with every request (with a value of "application/json").
The body is being converted to a JSON string with JSON.stringify(body). That JSON string is then sent as the body of the fetch request.
Since we know that the API is always going to return JSON, then we convert the response to JSON inside the put() method so that we don't have to do that outside the FetchWrapper class.
 */