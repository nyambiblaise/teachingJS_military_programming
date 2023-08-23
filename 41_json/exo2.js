/*
The prepareStatus function is called before sending a status on a social network.
Complete the prepareStatus function such that it returns a string of the data that's going to be sent, containing the userId, status, and location.
 */
const prepareStatus = (status, location) => {
    const userId = 42;
    const data = {
        userId,
        status,
        location
    };
    return JSON.stringify(data);

}
console.log(prepareStatus("My first post!", "Amsterdam")); // '{"userId":42,"status":"My first post!","location":"Amsterdam"}'