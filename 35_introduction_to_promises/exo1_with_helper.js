/*
we've created a fakeFetch function in helper.js that takes no parameters and returns a promise that resolves
 successfully after 1 to 3 seconds (randomly).

Call this fakeFetch function inside the init function and then move the console.log("Fake fetch completed") such that it runs once fakeFetch has completed.
 */

import {fakeFetch} from "./helper.js";

const init = () => {
    fakeFetch().then(()=>{
        console.log("Fake fetch completed");
    })
}
init();