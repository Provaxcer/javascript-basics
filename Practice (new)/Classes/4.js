class Circle {
    constructor (color, radius){
        this.color = color;
        this.radius = radius;
    }

    name (title, number) {
        this.title=title;
        this.number=number;
        return console.log(`So the title is ${title} and number is ${number}`);
    }
}

const object = new Circle("red", 5);
const name = object.name("My", 1);

console.log(name);