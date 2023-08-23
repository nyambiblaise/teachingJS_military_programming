/*
It's also possible to manually reject a promise by throwing an error yourself. Here's how:
 */
getWeatherIn("Amsterdam")
    .then(data => {
        throw new Error("Stopped.");
        console.log(data);
        console.log("Done fetching weather");
    })
    .catch(error => {
        console.error(error);
        console.log("Done fetching weather");
    });
/*
Assuming the getWeatherIn() fulfilled, the .then() callback will execute. However, the throw new Error("Stopped.") will immediately reject the promise.
So, the rest of the .then callback is ignored, and the .catch() callback will execute.

We will use this pattern to handle fetch calls when the API returns an error.
 */