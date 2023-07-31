/*
We know from a previous lessons that if an object property returns undefined, then we should avoid accessing other
 properties on it (or calling methods on it) so that we don't get an error.
Optional chaining  allows you to access a property deep within an object without risking an error if one of the
 properties is null or undefined.
 */
const user = {
    details: {
        name: {
            firstName: "Sam"
        }
    },
    data: null
}
const uName = user.details.name.firstName; //same
console.log(uName);