//It's also possible to check if a key exists in an object using the in operator. The in operator returns true if the specified property is found in the specified object, otherwise it returns false.

const user = {
    name:"john",
    age:17,
    hobbies:["football","food","meat"],
    courses:{
        maths:15,
        geography:10,
        physics:7
    },
    gender:"female"
};
let checkIfUserHasGender = someUser=>{
    if("gender" in someUser){
        return `${someUser.gender}`;
    }else{
        return `Gender Unknown`;
    }
};
console.log(checkIfUserHasGender(user));