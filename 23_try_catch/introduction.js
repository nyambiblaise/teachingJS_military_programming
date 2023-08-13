//we use try..catch to handle exceptions. an exception is an unexpected error that could happen during the execution
// of a program.
/*
For example, let's say you're trying to check the weather in the user's current location. You will need to get the user's location, then send that to a weather service (API) using fetch (that we'll learn about in a few chapters) and then display the results on the webpage.

Several things can fail sometimes. For example, the user might not accept to share their location with you. Or, the weather service might be down for maintenance and thus fails.

If your code does not handle these scenarios, then the user experience will suffer. The user won't know what's going on and will assume that your webpage does not work.
 */
//Let's assume that we try to call a function that does not exist:
try{
    console.log(findSum(numbers));
}catch (e) {
    console.log(`Something went wrong ${e}`)
}