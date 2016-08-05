//ES6 class inheritance
class Animal {
    constructor(age) {
        this.age = age;
    }

    sleep() {
        console.log('Zzzzzz');
    }

    eat() {
        console.log('Num num num');
    }
}

class Avian extends Animal{
    fly() {
        console.log('Whoo Hooo!');
    }
}

class Feline extends Animal {
    roar() {
        console.log('Rahhhh!');
    }
}

class Marine extends Animal {
    swim() {
        console.log('Splah!');
    }
}

var eagle = new Avian(1);
var lion = new Feline(2);
var bee = new Avian(3);
var dolphin = new Marine(4);