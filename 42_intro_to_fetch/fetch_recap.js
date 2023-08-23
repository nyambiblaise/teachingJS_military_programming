/*
The fetch API is used to send and/or receive data from a service (an API) without reloading the page.
The fetch API always returns a promise.
The fetch API expects a URL as its first parameter: fetch(URL).

The fetch API is used to send and/or receive data from a service (an API) without reloading the page.
The fetch API always returns a promise.
The fetch API expects a URL as its first parameter: fetch(URL).
fetch(URL) will resolve with a Response.
A Response is a generic response object. The browser doesn't know if it's text, JSON, or Binary, etc...
As a web developer, 99% of the time you'll be working with JSON.
You need to tell fetch that you've got a JSON response and you need to parse it as a JSON object.
You can do that with: fetch(URL).then(response => response.json())
 */