/*
The following API endpoint returns the weather for Amsterdam:
https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/amsterdam.json

And this one returns the weather for Berlin:
https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/berlin.json

It's not the live weather but rather a snapshot of the weather on a certain day. The structure of the data is exactly the same as the one provided by weatherstack.com.

Complete the getWeather function such that it makes the correct fetch request and calls the showTemperature function with the temperature that was returned in the API response.
 */
const cityURL = "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack";

const getWeather = (city)=>{
    return fetch(`${cityURL}/${city.toLowerCase()}.json`).then(response=>response.json()).then(data=>{
        console.log(data);
        showTemperature(data.current.temperature);
    })
}
const showTemperature = (temperature)=>{
    console.log(`The current temperature is ${temperature}`);
}
getWeather("AMSTERDAM");