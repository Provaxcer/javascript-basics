class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " makes a sound.");
    }
}

class Dog extends Animal {
    bark() {
        console.log(this.name + " barks.");
    }
}

const dog = new Dog("Bruno");
dog.speak(); // "Bruno makes a sound." — inherited from Animal
dog.bark();  // "Bruno barks." — Dog's own method


// Class Inheritance