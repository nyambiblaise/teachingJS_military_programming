/*
Complete the function getLatLngElevation such that it destructures the userLocation object into 3 variables: lat,
 lng & elevation. the elevation should default to 0.

After destructuring successfully, the function will automatically return a string that describes the location.
 */
const userLocation = {
    lat: 24.235235,
    lng: 2.5734,
};

const getLatLngElevation = someLocation=>{
    const {lat,lng,elevation=0} = someLocation;
    return `Longitude is ${lng}, Latitude is ${lat} and Elevation is ${elevation}`;
}
console.log(getLatLngElevation(userLocation));