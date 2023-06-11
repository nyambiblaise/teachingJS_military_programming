let person = {
    firstName:"john",
    lastName:"paul",
    moviesWatched:{
      movieTitle:"Forgiven",
      movieYear:1980,
        isNice:true,
        actors:["mary","peter","anita"]
    },
    age:90
}
let tweet = {
    id: 1080777336298049537,
    message: `I am learning JavaScript`,
    link: "https://localhost/learnjs",
    created_at: "2023-06-07 10:46:00",
    author: {
        id: 901393813,
        details: {
            firstName: "Achiri",
            lastName: "Hillary",
        },
        handle: "@achiriforlife"
    }
};
function getFullNamesTweetOwner(user){
    return `${user.author.details.firstName} ${user.author.details.lastName}`;
}
console.log(getFullNamesTweetOwner(tweet))

//get movies watched
console.log(person.moviesWatched)
//get the last actor who futured in the movie
function getLastActorName(user) {
    return user.moviesWatched.actors[user.moviesWatched.actors.length-1]
}
console.log(getLastActorName(person))