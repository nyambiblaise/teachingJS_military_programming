/*
Complete the class WeatherCities by implementing the following instance methods:
- getFirst which returns the first city from the cities instance 1_variables
- getLast which returns the last city from the cities instance 1_variables
- exportCsv which returns a string containing the name of every city followed by the temperature in that city (separated by a space character). This should be a CSV string, meaning that every city and temperature group should be separated by a comma and a space character. For example, San Francisco 14, Amsterdam 4
Note: the class is initialized with 1 argument: the cities array containing the weather report in multiple cities.
 */
class WeatherCities {
    constructor(cities) {
        this.cities = cities;
    }
    getFirst() {
        return this.cities[0];
    }
    getLast() {
        return this.cities[this.cities.length - 1];
    }
    exportCsv() {
        return this.cities.map(function(city) {
            return city.location.name + " " + city.current.temperature;
        }).join(", ");
    }
}
let data = [{
    "request": {
        "type": "City",
        "query": "San Francisco, United States of America",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "San Francisco",
        "country": "United States of America",
        "region": "California",
        "lat": "37.775",
        "lon": "-122.418",
        "timezone_id": "America/Los_Angeles",
        "localtime": "2020-11-25 09:46",
        "localtime_epoch": 1606297560,
        "utc_offset": "-8.0"
    },
    "current": {
        "observation_time": "05:46 PM",
        "temperature": 14,
        "weather_code": 116,
        "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
        ],
        "weather_descriptions": [
            "Partly cloudy"
        ],
        "wind_speed": 13,
        "wind_degree": 330,
        "wind_dir": "NNW",
        "pressure": 1024,
        "precip": 0,
        "humidity": 67,
        "cloudcover": 25,
        "feelslike": 14,
        "uv_index": 1,
        "visibility": 16,
        "is_day": "no"
    }
}, {
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
}, {
    "request": {
        "type": "City",
        "query": "Abuja, Nigeria",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "Abuja",
        "country": "Nigeria",
        "region": "Federal Capital Territory",
        "lat": "9.176",
        "lon": "7.181",
        "timezone_id": "Africa/Lagos",
        "localtime": "2020-11-25 18:46",
        "localtime_epoch": 1606329960,
        "utc_offset": "1.0"
    },
    "current": {
        "observation_time": "05:46 PM",
        "temperature": 32,
        "weather_code": 116,
        "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
        ],
        "weather_descriptions": [
            "Partly cloudy"
        ],
        "wind_speed": 7,
        "wind_degree": 160,
        "wind_dir": "SSE",
        "pressure": 1009,
        "precip": 0,
        "humidity": 41,
        "cloudcover": 25,
        "feelslike": 30,
        "uv_index": 9,
        "visibility": 10,
        "is_day": "yes"
    }
}, {
    "request": {
        "type": "City",
        "query": "Sydney, Australia",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "Sydney",
        "country": "Australia",
        "region": "New South Wales",
        "lat": "-33.883",
        "lon": "151.217",
        "timezone_id": "Australia/Sydney",
        "localtime": "2020-11-26 04:47",
        "localtime_epoch": 1606366020,
        "utc_offset": "11.0"
    },
    "current": {
        "observation_time": "05:47 PM",
        "temperature": 19,
        "weather_code": 113,
        "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
        ],
        "weather_descriptions": [
            "Clear"
        ],
        "wind_speed": 11,
        "wind_degree": 10,
        "wind_dir": "N",
        "pressure": 1010,
        "precip": 0,
        "humidity": 73,
        "cloudcover": 0,
        "feelslike": 19,
        "uv_index": 1,
        "visibility": 10,
        "is_day": "no"
    }
}, {
    "request": {
        "type": "City",
        "query": "Hanoi, Vietnam",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "Hanoi",
        "country": "Vietnam",
        "region": "",
        "lat": "21.033",
        "lon": "105.850",
        "timezone_id": "Asia/Ho_Chi_Minh",
        "localtime": "2020-11-26 00:47",
        "localtime_epoch": 1606351620,
        "utc_offset": "7.0"
    },
    "current": {
        "observation_time": "05:47 PM",
        "temperature": 23,
        "weather_code": 116,
        "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
        ],
        "weather_descriptions": [
            "Partly cloudy"
        ],
        "wind_speed": 6,
        "wind_degree": 140,
        "wind_dir": "SE",
        "pressure": 1018,
        "precip": 0,
        "humidity": 78,
        "cloudcover": 75,
        "feelslike": 25,
        "uv_index": 1,
        "visibility": 6,
        "is_day": "no"
    }
}, {
    "request": {
        "type": "City",
        "query": "beirut",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "Beirut",
        "country": "Lebanon",
        "region": "Beyrouth",
        "lat": "33.872",
        "lon": "35.510",
        "timezone_id": "Asia/Beirut",
        "localtime": "2020-11-25 19:48",
        "localtime_epoch": 1606333680,
        "utc_offset": "2.0"
    },
    "current": {
        "observation_time": "05:48 PM",
        "temperature": 20,
        "weather_code": 389,
        "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0024_thunderstorms.png"
        ],
        "weather_descriptions": [
            "Rain With Thunderstorm"
        ],
        "wind_speed": 11,
        "wind_degree": 240,
        "wind_dir": "WSW",
        "pressure": 1009,
        "precip": 0.5,
        "humidity": 78,
        "cloudcover": 75,
        "feelslike": 20,
        "uv_index": 5,
        "visibility": 8,
        "is_day": "yes"
    }
}];
let we = new WeatherCities(data);