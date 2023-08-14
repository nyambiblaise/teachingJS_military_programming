//Complete the function createPerson such that it returns a new instance of the class Person with the correct firstName and lastName instance variables based on the fName and lName parameters that it receives.
import {Person} from "./person.js";

const createPerson = (fName, lName) => {
    return new Person(fName,lName);
}