//Complete the function getLatLng such that it destructures the userLocation object into 2 variables: lat and lng.
// After destructuring successfully, the function will automatically return a string that describes the location.

const userLocation = {
    lat: 24.235235,
    lng: 2.5734,
};
let getLatLng = someLocation=>{
    const {lat,lng} = someLocation;
    return `Longitude is ${lng} and Latitude is ${lat}`;
}
console.log(getLatLng(userLocation));