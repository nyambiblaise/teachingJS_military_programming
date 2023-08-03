/*
In this lesson, we'll take a look at some of the array methods that we've seen and their usage with arrays of objects.
Again, there's nothing particularly new, but the extra challenges help simulate common problems you run into in
 real-life projects.

All the examples in this lesson will use the following tweets variable:
 */
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
    },
    {
        id: 41441,
        message: "This is awesome, man!!!",
        stats: {
            likes: 7,
            retweets: 32
        }
    },
    {
        id: 40941,
        message: "This is awesome, man!!!",
        stats: {
            likes: 50,
            retweets: 3
        }
    }
];
//1 - Sort all tweets with more than 30 likes
const getTweetsMoreThan30Likes = someTweets =>{
    return someTweets.filter(t=>t.stats.likes>30);
}
//console.log(getTweetsMoreThan30Likes(tweets));

//2 - Search for a tweet with id 40941
const search = 40941;
const findTweetById = (searchID)=>{
    return tweets.find(tweet=>tweet.id===searchID);
}
//console.log(findTweetById(search));

//3 - Check if some tweets have had more than x likes
const checkIfHugeRetweets = (nbOfLikes)=>{
    return tweets.some(t => t.stats.likes >= nbOfLikes);
}
//console.log(checkIfHugeRetweets(10)); //true cause there is a tweet with >10 likes
//console.log(checkIfHugeRetweets(50)); //true cause there is a tweet with >=50 likes
console.log(checkIfHugeRetweets(54)); //false cause there is no tweet with >=54 likes