/*
we'll implement the put(endpoint, dataToPost) method of the FetchWrapper class.

The put(endpoint, dataToPost) method is doing a lot of work behind the scenes:

it's sending a PUT request to https://api.xyz.com/demo/grades.json (baseURL followed by endpoint)
it's sending a custom header "Content-Type": "application/json"
it's converting the body argument to a JSON string (with JSON.stringify) and sending it as the body of the fetch request
it's converting the server response to json (response => response.json())
From that, we can deduce that the put(endpoint, body) implementation looks like the following:
 */