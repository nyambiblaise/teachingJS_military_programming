/*
Do not overuse optional chaining
You might be tempted to start using optional chaining instead of every dot notation but you shouldn't. Over-using it may lead to unexpected bugs and poor code quality.
You can think of it as the following: When I (or other programmers) see ?. in the code, it means that there's a moderate chance that the value returns undefined. In turn, this means that we should be handling the case when it returns undefined.

For example, the below code does not handle many cases, such as an empty array:
 */
const sum = values => {
    return values?.[0] + values?.[1];
}

sum([2, 3]); // 5
sum([]); // NaN
sum([]); // NaN

/*
Recap
Optional chaining can be used for arrays. The syntax is ?.[index]
Optional chaining can be used for functions. The syntax is functionName?.()
Optional chaining cannot be used for assignment. It's only used for reading.
Optional chaining allows you to access a property deep within an object without risking an error if one of the properties is null or undefined.
In case one of the properties is null or undefined, then the ?. will short-circuit to undefined.
You cannot use optional chaining on an object that may not exist. The object has to exist. Optional chaining is only used to access a property that may or may not exist.
Optional chaining can be used for arrays. The syntax is ?.[index]
Optional chaining can be used for functions. The syntax is functionName?.()
Optional chaining cannot be used for assignment. It's only used for reading.
 */