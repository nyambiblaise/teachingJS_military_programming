const tweet = [
    {
        id:98313,
        stats:{
            likes:1,
            tweets:2
        }
    },{
        id:1314,
        stats: {
            likes:3,
            tweets:4
        }
    },{
    id:56242,
        stats: {
        tweets: 5,
            likes: 6
        }
    }
];
const findSumTweetsLikes = (x)=>x.reduce((total, current)=>{
    console.log(current)
   return total + current.stats.likes + current.stats.tweets
},0);
console.log(findSumTweetsLikes(tweet));