/*
Arrays of objects are the most common data type that you will encounter when working in web development, that's because most APIs (for example, a weather API, Twitter API, etc.) return arrays of objects.

From a technical point of view, arrays of objects don't have special functionality or additional methods.
Let's say that you're querying the Twitter API, here's how a response could look like:
 */
const tweets = [
    {
        id: 1080777336298049537,
        message: "Hello Twitter 👋",
        created_at: "2023-07-31 11:46:00",
        author: {
            id: 109215315,
            firstName: "John",
            lastName: "Paul",
            handle: "jpaul"
        }
    },
    {
        id: 1080777336298195435,
        message: "How do you keep track of your notes?",
        created_at: "2023-07-31 15:32:00",
        author: {
            id: 109216891,
            firstName: "Sam",
            lastName: "Speedy",
            handle: "s_speedy"
        }
    }
];
/*
This is an array of 2 objects. Notice that the tweets variable is an array. A lot of developers confuse that because they see the objects inside the array and think that tweets is an object. But, in fact, it's an array of objects.

Knowing that tweets is an array, we can access properties on arrays (such as .length) and call array methods such as (.forEach(), .map(), etc.).
 */
tweets.forEach(someTweet=> {
    console.log(someTweet)
})