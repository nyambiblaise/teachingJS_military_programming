/*
Immutability is an important concept that you will stumble upon in JavaScript, mostly when you work with a front-end library/framework. But first, let's take a look at how array/object equality works in JavaScript.

Let's start by comparing some numbers, strings & booleans:
 */
1 === 1; //true
27 === 27; //true
"hello world" === "hello world"; //true
"welcome" === "welcome"; //true
true === true; //true
false === false; //true (because they're the same)

/*
There's nothing special here. We're comparing 2 values that are exactly the same, so the result is true.

Now let's try with arrays and objects:
 */
[] === []; //false
{} === {}; //false
[10] === [10]; //false
{key: "something"} === {key: "something"}; //false