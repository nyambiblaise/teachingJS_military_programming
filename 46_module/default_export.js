/*
When you write export default, you're instructing JavaScript that this is the default variable/function/class exported by this module. This means that you can import it under any name you want. You also have to drop the curly braces from the import syntax:
 */
// import without curly braces
import Helper from "./helpers.js";
const helper = new Helper();

//Since it's the default export, the following is also valid:
import DoMeSomeThing from "./helpers.js";
const doMe = new DoMeSomeThing();

export default class Helper {
    capitalize(word) {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
}
/*
Which export should you use?
When writing your own modules, you can decide to always use named exports if you'd like.
A mix of named exports and default export rarely makes sense unless you're writing a library to be used by others (we'll see an example of that in the next lesson).

So, it's often enough to ask yourself the following question:

Do I expect to export anything else in this file?
If the answer is yes or maybe, then you should go with named exports.

The most common use case for default exports is when you define a class in a file that you expect to use outside of that file. Since the file contains only 1 class, this could serve as the default export.
 */
// 2_helpers.js
export default class Helper {}
export const votingAge = 18;

// index.js
import Helper from "./helpers.js";

// OR
import {votingAge} from "./helpers.js";

// OR
import Helper, {votingAge} from "./helpers.js";