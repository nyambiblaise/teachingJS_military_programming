/*
As the complexity of web application grows, we need to be able to write code in multiple files and reference functions (and variables) from another file. This helps in code reuse, readability, and maintenance.

Every JavaScript file is called a Module or ES Module.
Every JavaScript file (every module) is separate from the outside world. Every variable you define in a file with let or const is only available in that file, and not in the other files. The same applies to functions & classes.

But, what if we'd like to define a class called Helper in helpers.js:
 */
import {Helper} from "./helpers.js";
const helper = new Helper();
console.log(helper.capitalizeWord("nyambi"))