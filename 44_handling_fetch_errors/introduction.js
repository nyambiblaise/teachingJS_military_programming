/*
The .catch(callback) error runs when the fetch() promise rejects.

Fetch won't reject for error codes
The fetch() promise rejects for network errors. So, if the fetch request could not complete because of a network error, it will reject and the catch() callback will execute.

However, if the fetch() request completed and the server responded with an error code (such as 4xx or 5xx), then the fetch() promise won't reject.

The reasoning here is that fetch() has been completed successfully, it's just that the server returned an error.

This means that if you make a fetch request for a URL that does not exist (a 404), the fetch() promise will be fulfilled and the .then(callback) will execute as usual. The .catch(callback) will only execute if something prevented the fetch() request from completing (for example, a network failure).

Handling errors depends on API
APIs do handle errors differently, unfortunately. Thus, we cannot give generic advice that is guaranteed to work 100% of the time.

However, in general, most APIs do return a correct status code for failures (4xx or 5xx). In that case, you will have to check whether the response was successful or not. Luckily, this is already given to you in the response object. Here's how you can check it:

The response object contains an ok field that returns true when the response was successful (status in the 2xx range).

So, you will be able to handle 4xx and 5xx by checking if response.ok was not true:
 */
fetch(URL)
    .then(response => {
        if (!response.ok) {
            // 4xx or 5xx error
            throw new Error("API issues.");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

/*
What we're doing here is checking when response.ok is false, in that case, we throw a new error.
The throw new Error("API issues.") will reject the promise, so, the code stops running the current .then(callback) and then jumps to the .catch(callback).

The end result here is that both, network errors and API errors will end up rejecting the fetch() promise. So, you can handle both of them with a single .catch(callback).

Always handle rejections
Regardless of how the API handles errors, we recommend that you always handle the rejected state of fetch(). That's because network errors can occur at any time and you still want to handle that with the .catch().

So, in summary, here's the basic fetch boilerplate that you can save to your notes and use whenever necessary:
 */
fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })