class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " makes a sound.");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // calls Animal's constructor
        this.breed = breed;
    }

    speak() {
        super.speak(); // calls Animal's speak first
        console.log(this.name + " barks.");
    }
}

const dog = new Dog("Bruno", "Labrador");
dog.speak();
// "Bruno makes a sound."
// "Bruno barks."


// Overriding + super