/*
As the complexity of web application grows, we need to be able to write code in multiple files and reference functions (and variables) from another file. This helps in code reuse, readability, and maintenance.

Every JavaScript file is called a Module or ES Module.
Every JavaScript file (every module) is separate from the outside world. Every variable you define in a file with let or const is only available in that file, and not in the other files. The same applies to functions & classes.

But, what if we'd like to define a class called Helper in 2_helpers.js:
since it is a class, we have to instantiate it... new Helper() to use it.

to use a class/function/variable out of a module, you EXPORT it
to use a class/function/variable in another module, you IMPORT IT
 */
import {Helper} from "./helpers.js";
import {serverPort} from "./config.js";
import {serverURL} from "./config.js";

//or
import {serverSettings, serverPort, serverURL, serverUsername} from "./config.js";

const helper = new Helper("nyambi");
console.log(helper.capitalizeWord("nyambi"))

/*
- This is assuming both files are in the same folder, hence the path is "./2_helpers.js" (./ means current directory).

- You cannot import "2_helpers.js" as this will import from an installed library (more on that in a future chapter).
 The path has to start with ./.

- The import keyword has to be at the top of your file. You cannot run any other kind of JavaScript code before the
 import statements. So always start with the import statements at the top of the file. This limitation does not apply to export statements.

- You need to be using a module bundler (such as Webpack/Parcel/Vite) for this to work (we have a dedicated chapter
 about module bundlers later in this course) or you have to use <script type="module"></script> (explained at the end of this lesson).

 However, if you're not using a module bundler (webpack/parcel) and you'd like to use import/export syntax, then you have to add type="module" to that script.
This will enable the modern import/export syntax in the browser:
 */
<script type="module" src="index.js"></script>