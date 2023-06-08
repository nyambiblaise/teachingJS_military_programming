/*
Complete the class Weather with the following instance methods:

getLocation such that it returns the name of the city followed by a comma & a space character and the name of the country. For example, Amsterdam, Netherlands
getIcon such that it returns the icon that represents the weather
getTemperature such that it returns the temperature followed by the degree symbol (use an HTML entity) and followed by the character C (for Celsius). For example, 10°C (but you have to use the HTML entity, you cannot copy the ° symbol).
Remember that console.log() is your friend, it will allow you to visualize the structure of the object you're working with
 */
class Weather {
    constructor(details) {
        this.details = details;
    }
    getLocation() {
        return `${this.details.location.name}, ${this.details.location.country}`;
    }
    getIcon() {
        return this.details.current.weather_icons[0]
    }
    getTemperature() {
        return this.details.current.temperature + "&deg;C";
    }
}
let data = {
    "request": {
        "type": "City",
        "query": "Amsterdam",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "Amsterdam",
        "country": "Netherlands",
        "region": "North Holland",
        "lat": "52.374",
        "lon": "4.890",
        "timezone_id": "Europe/Amsterdam",
        "localtime": "2020-11-25 09:11",
        "localtime_epoch": 1606295460,
        "utc_offset": "1.0"
    },
    "current": {
        "observation_time": "08:11 AM",
        "temperature": 4,
        "weather_code": 113,
        "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
        ],
        "weather_descriptions": [
            "Clear"
        ],
        "wind_speed": 17,
        "wind_degree": 160,
        "wind_dir": "SSE",
        "pressure": 1014,
        "precip": 0,
        "humidity": 87,
        "cloudcover": 0,
        "feelslike": 1,
        "uv_index": 1,
        "visibility": 10,
        "is_day": "yes"
    }
}
let we = new Weather(data);
console.log(we.getLocation());