/*
The following API endpoint returns the weather for Amsterdam:
https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/amsterdam.json

And this one returns the weather for Berlin:
https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/berlin.json

It's not the live weather but rather a snapshot of the weather on a certain day. The structure of the data is exactly the same as the one provided by weatherstack.com.

We've provided you with a <select> where the user can select either Amsterdam or Berlin. Complete the getWeather function such that it makes the correct fetch request and calls the showTemperature function with the temperature that was returned in the API response.
 */