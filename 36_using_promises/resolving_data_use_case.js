//To better understand why this is useful, let's take a look at the sample "pseudo-code" (this won't execute successfully, it's just meant to illustrate the purpose of resolving data):
getWeatherIn("Amsterdam").then(data => {
    console.log(data); // {degreesC: 10, degreesF: 50, description: "cloudy"}
    console.log(data.degreesC); // 10
});

getWeatherIn("Tokyo").then(data => {
    console.log(data); // {degreesC: 25, degreesF: 77, description: "sunny"}
    console.log(data.degreesC); // 25
});