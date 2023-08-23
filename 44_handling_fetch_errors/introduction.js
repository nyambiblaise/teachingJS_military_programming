/*
The .catch(callback) error runs when the fetch() promise rejects.

Fetch won't reject for error codes
The fetch() promise rejects for network errors. So, if the fetch request could not complete because of a network error, it will reject and the catch() callback will execute.

However, if the fetch() request completed and the server responded with an error code (such as 4xx or 5xx), then the fetch() promise won't reject.

The reasoning here is that fetch() has been completed successfully, it's just that the server returned an error.

This means that if you make a fetch request for a URL that does not exist (a 404), the fetch() promise will be fulfilled and the .then(callback) will execute as usual. The .catch(callback) will only execute if something prevented the fetch() request from completing (for example, a network failure).
 */