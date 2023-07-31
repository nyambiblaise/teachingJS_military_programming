/*
We know from a previous lessons that if an object property returns undefined, then we should avoid accessing other
 properties on it (or calling methods on it) so that we don't get an error.
Optional chaining  allows you to access a property deep within an object without risking an error if one of the
 properties is null or undefined.

 NOTE:
 One important note is that you cannot use optional chaining on an object that may not exist. The object has to exist. Optional chaining is only used to access a property that may or may not exist.
 */
const user = {
    details: {
        name: {
            firstName: "Sam"
        }
    },
    data: null
}
const fName = user.details?.name?.firstName; //sam
const lName = user.details?.name?.lastName; //undefined
console.log(lName);