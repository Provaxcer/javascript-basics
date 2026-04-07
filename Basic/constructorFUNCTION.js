// var sanu = {
//     name: "Sanu",
//     age: 23,
//     favouriteMovie: ["Inception", "Interstellar", "The Dark Knight"],
//     favouriteSong: ["Song1", "Song2", "Song3"]};

//     console.log(sanu.favouriteSong[1]);


function Person(name, age, favouriteMovie, favouriteSong) {
    this.name = name;
    this.age = age;
    this.favouriteMovie = favouriteMovie;
    this.favouriteSong = favouriteSong;
}

var p1 = new Person("Sanu", 23, ["Inception", "Interstellar", "The Dark Knight"], ["Song1", "Song2", "Song3"]);
var p2 = new Person("Anu", 22, ["Movie1", "Movie2", "Movie3"], ["SongA", "SongB", "SongC"]);
var p3 = new Person("Ranu", 24, ["FilmX", "FilmY", "FilmZ"], ["TrackX", "TrackY", "TrackZ"]);

console.log(p1);
