/*
In the previous promise chapters, we used functions that return a promise.
In this chapter, you'll learn how to write a function that returns a promise.

The use cases for that are a bit on the advanced side. Most of the time you will be consuming (using) functions that return a promise (like the fetch API that we will learn about soon). Also, you will benefit by better understanding how promises work.

Notice the syntax new Promise(). The Promise class is available in the JavaScript language and you need to create a new instance of it.

This Promise class receives one argument which is called the executor (() => {}). The executor will run immediately.

Also, this executor receives as the first argument a function that you can call whenever the promise has completed its work. Even though you can call this argument whatever you want, it is very common to call it resolve.
 */
const waitOneSecond = ()=>{
    return new Promise(()=>{

    });
}