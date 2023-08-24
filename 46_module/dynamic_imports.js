/*
Dynamic imports allow you to import another file/module only when necessary. The syntax is similar except that import is used as a function. For example:

You may have noticed that import() (when used as a function) returns a promise. This will be covered in a future chapter.
 */
import("./2_helpers.js").then(module => {
    console.log(module);
});