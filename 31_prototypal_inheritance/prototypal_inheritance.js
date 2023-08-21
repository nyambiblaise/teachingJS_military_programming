/*
Prototypal inheritance is here to solve the problem in traditional inheritance whereby when you want to inhreit from
 a class, all the method of that class are inherited. Here, you may opt to inherit just specific methods in a class.

 Let us assume we have the following classes and their methods:
 Problem: You ask for Banana, but you end up having a Gorilla holding a Banana and the entire Jungle.
 Here, Banana inherits from Gorilla who inherits from the Jungle.

 Jungle
 - rain()
 - growTree();

 Gorilla
 - sleep()
 - eat()

Banana
- peel()
- grow()

We want to have just the Banana.peel() method and the Gorilla.eat()
To solve this problem, we add the prototype to the function
 */
function Jungle(){

}
function Gorila(){

}
function Banana() {

}
Banana.prototype.peel = function () {
    
}
Gorila.prototype.eat = function () {

}
// Extend our GorillaBanana with the Gorilla's eat() method =>Inheritance here
BananaGorila.prototype.eat = Gorila.prototype.eat;

// Extend our GorillaBanana with Banana's peel() method => Inheritance here
BananaGorila.prototype.peel = Banana.prototype.peel;