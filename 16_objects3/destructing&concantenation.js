/*
Just like array destructuring, you can destructure key/value pairs (or nested objects) from an object. The concept is similar, except that you have to use {} instead of [] on the left side of the = operator and you should have an object on the right side of the = operator.

NOTE:
With destructing, we use {} AND NOT []
 */
const config = {
    id: 1,
    isAdmin: false,
    theme: {
        dark: false,
        accessibility: true
    }
};
const id = config.id;
const isAdmin = config.isAdmin;
const theme = config.theme;

const {idx, isAdminx, themex} = config;

//Destructure and rename
// It's also possible to destructure and rename from an object. For example, let's say you already have a name variable so you'd like to destructure user.name and assign it to a variable called userName. Here's how you can do it:
const name = "Page Title";
const user = {
    id:1,
    name:"jones",
    isAdmin:true
};
//we now destructure the name into a new variable userName
const {name:userName,isAdmin1} = user;
console.log(userName);