class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hi, I am " + this.name);
    }
}

const p1 = new Person("Santanu", 21);
const p2 = new Person("Alex", 25);

p1.greet(); // "Hi, I am Santanu"
p2.greet(); // "Hi, I am Alex"



// Basic Class