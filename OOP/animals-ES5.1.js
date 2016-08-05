//using prototypical inheritance
"use strict";

var Animal = function (age) {
    this.age = age;
};

Animal.prototype.sleep = function () {
    console.log('Zzzzzz');
};

Animal.prototype.eat = function () {
    console.log('Num num num');
};

var Avian = function (age) {
    //constructor chaining
    Animal.apply(this,[age]);
};

var Feline = function (age) {
    Animal.apply(this,[age]);
};

var Marine = function (age) {
    Animal.apply(this,[age]);
};

Avian.prototype = new Animal();
Marine.prototype = new Animal();
Feline.prototype = new Animal();

Avian.prototype.fly = function () {
    console.log('Whoo hoo');
};

Marine.prototype.swim = function () {
    console.log('Spah');
};

Feline.prototype.roar = function () {
    console.log('Raaah');
};

var eagle = new Avian(1);
var lion = new Feline(2);
var bee = new Avian(3);
var dolphin = new Marine(4);


