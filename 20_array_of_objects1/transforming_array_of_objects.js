//As we previously studied, the .map() array method allows you to transform an array into another array of the same size.
const names = ["joHn", "mary"];
const convertNameToUpperCase = someNames=>{
    return someNames.map(name =>name.toUpperCase());
}
console.log(convertNameToUpperCase(names))

//The .map() works similarly for arrays of objects. You can transform an array of objects into a new array of objects, or, you can transform it into an array of strings or an array of numbers. This allows you to extract some properties from an array of objects. Here's an example:
const tweets = [
    {
        id: 1080777336298049537,
        message: "Hello Twitter 👋",
        created_at: "2023-08-03 11:46:00"
    },
    {
        id: 1080777336298195435,
        message: "How do you keep track of your notes?",
        created_at: "2023-08-19 15:32:00"
    }
];
const getTweets = allTweets=>{
    return allTweets.map(allTweets => allTweets.message);
}
console.log(getTweets(tweets));