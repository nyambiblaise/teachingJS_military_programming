/*Not all programming languages have semi-colons but JavaScript does, and it's for a very good reason.

When you develop a website, you will be writing a lot of JavaScript code. In order to make the website smaller, we often apply a concept called minification whereby you use a tool to minify your code in order to save characters. Saving characters automatically saves KBs. For example:*/

    const addItem = (items, item) => {
        items.push(item)
        return items
    }

const exportLowerCasedCSV = items => {
    return items.map(function(item) {
        return item.toLowerCase()
    }).join(", ")
}
//this can be mimified to...
function addItem(items, item) {items.push(item);return items;}function exportLowerCasedCSV(items) {return items.map(function(item) {return item.toLowerCase();}).join(", ");}

/*
The code above is barely readable however it is 122 characters shorter (so that is 122Bytes smaller). This is a small example, but for big JavaScript files, you can see as much as a 40% reduction in file size.

Minification removes all the comments in the code and then removes all the blank spaces.

If you look closer, you will see that after every JavaScript "line", we now have a semi-colon. So the goal of semi-colons is to tell JavaScript where a line ends. That's because when we minify the code, there are some edge cases that end up breaking your code. Semi-colons are here to solve that. They signify the end of a statement.

Note: you should never write minified code yourself, this is a process that is automated with tools such as webpack, parcel, or vite, which is covered towards the end of this course. Always write code on multiple lines, add comments whenever you need it. Tools will then strip them out for when you publish your website to the world.
 */