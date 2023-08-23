/*
In the previous promise chapters, we used functions that return a promise.
In this chapter, you'll learn how to write a function that returns a promise.

The use cases for that are a bit on the advanced side. Most of the time you will be consuming (using) functions that return a promise (like the fetch API that we will learn about soon). Also, you will benefit by better understanding how promises work.
 */
const waitOneSecond = ()=>{
    return new Promise(()=>{

    });
}