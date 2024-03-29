/*
It's also possible to rename a variable/function/class that you import. This is useful if your current file contains the same name that you're trying to import.

For example:
 */
import {getDate as getDateHelper} from "./date-2_helpers.js";

const getDate() {
    // ...
}
getDateHelper(); // the function that was imported

//Ideally, it's best to avoid the need to have to rename it. But, sometimes you have no other choice.