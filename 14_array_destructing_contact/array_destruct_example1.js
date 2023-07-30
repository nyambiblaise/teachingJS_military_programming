//Complete the function getLocationString by destructuring the location param into 2 variables: lat and lng.

const location = [24.235235, 2.5734];
const getLocationString = someLocation=>{
    const [long,lat] = someLocation;
    return `Longitude is ${long} and Latitude is ${lat}`;
}
console.log(getLocationString(location));