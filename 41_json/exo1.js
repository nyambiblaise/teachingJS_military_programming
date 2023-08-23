/*
This willItRain function receives a JSON string from a fictive weather API.
Complete the willItRain function such that it returns true when the weather forecast predicts that it'll rain and false otherwise.
 */
const willItRain = (someRainData)=>{
    const data = JSON.parse(someRainData);
    return data.now.rainExpected;
}
console.log(willItRain('{"now":{"temperature":18,"humidity":"30%","uvIndex":0,"rainExpected":true}}'));