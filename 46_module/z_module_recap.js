/*
- Every JavaScript file is called a Module (or ES Module).

- Every JavaScript file (every module) is separate from the outside world. Every variable you define in a file with
 let or const is only available in that file, and not in the other files. The same applies to functions & classes.

- You can make variables/functions/classes available to other files by exporting them from the current file and then
 importing them from another module/file.

- The path must start with ./ when importing from a local file. Make sure you've got the correct path (if there are
 folders).

- Scenarios where default export makes sense:
either export only one variable/function/class.
or, it will export several variables/functions/classes. However, one of these is considered the main one (or the most important one).

- When writing your own modules, you can decide to ignore default exports and always use named exports.

- The most common use case for default exports is when you define a class in a file that you expect to use outside of
 that file.
 */