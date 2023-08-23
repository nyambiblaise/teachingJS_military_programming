/*
Every response has a response code (and every response code has a response text).
The most common response is 200 OK meaning that the request was successful.
The 2xx range (or 200-299 means that the response was successful).
The 3xx range is for redirects.
The 4xx and 5xx ranges are for errors. Client & server respectively.
The fetch() promise rejects on network errors.
The fetch() promise does not reject on error codes (4xx and 5xx).
For most APIs, you can check if the response was successful by reading response.ok.
Always handle the rejected state of fetch() with a .catch(callback) (regardless of the API design).
 */