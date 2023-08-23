//To better understand why this is useful, let's take a look at the sample "pseudo-code" (this won't execute successfully, it's just meant to illustrate the purpose of resolving data):

getWeatherIn("Amsterdam").then(data => {
    console.log(data); // {degreesC: 10, degreesF: 50, description: "cloudy"}
    console.log(data.degreesC); // 10
});

getWeatherIn("Tokyo").then(data => {
    console.log(data); // {degreesC: 25, degreesF: 77, description: "sunny"}
    console.log(data.degreesC); // 25
});
/*
Notice how the getWeatherIn function resolves with different data, depending on the city that it receives.
The promise can resolve any data type. It can resolve a string, a number, an array, an object, etc.

That's because every promise has a different purpose. You need to know what to expect from this promise once it
 resolves.
 */