/*
We know from a previous lessons that if an object property returns undefined, then we should avoid accessing other
 properties on it (or calling methods on it) so that we don't get an error.
Optional chaining  allows you to access a property deep within an object without risking an error if one of the
 properties is null or undefined.

 NOTE:
 One important note is that you cannot use optional chaining on an object that may not exist. The object has to exist. Optional chaining is only used to access a property that may or may not exist.

 You may have noticed that we've been writing user.details?.name instead of user?.details?.name that's because we know for sure that user is an object. So we don't necessarily need optional chaining for user.details.
In case you're not sure whether user is an object, then you can write user?.details?.name. However, you still have to make sure that there is a variable user defined, or else you will get an error.
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