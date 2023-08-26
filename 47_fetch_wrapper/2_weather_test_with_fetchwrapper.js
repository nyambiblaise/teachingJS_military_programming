/*
The API endpoint returns the weather for Amsterdam:
https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/amsterdam.json

And this one returns the weather for Berlin:
https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/berlin.json

Complete the getWeather function such that it makes the correct fetch request and calls the showTemperature function with the temperature that was returned in the API response.
 */
import FetchWrapper from "./FetchWrapper.js";

const url = "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/";
const fw = new FetchWrapper(url);
const city = "aMsterDam";
fw.get(`${city.toLowerCase()}.json`).then(data=>{
    console.log(data);

})