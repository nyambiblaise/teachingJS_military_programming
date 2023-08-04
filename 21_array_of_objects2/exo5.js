//convert all the tweet messages to CSV
const tweets = [
    {
        id: 10512,
        message: "Hello Twitter 👋",
        stats: {
            likes: 41,
            retweets: 54
        }
    },
    {
        id: 41241,
        message: "How do you keep track of your notes?",
        stats: {
            likes: 14,
            retweets: 20
        }
    }
];
const convertToCSV = ()=>{
    return tweets.map(t=>t.message).join(",");
}
console.log(convertToCSV());