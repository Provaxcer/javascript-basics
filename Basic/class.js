class Employee {
    constructor (name, age) {
        this.name = name
        this.age = age
    }

    ageShow() {
        console.log(`Person age is `+ this.age);
    }

    nameShow() {
        console.log(`Person age is `+ this.name);
    }
}

export {Employee}