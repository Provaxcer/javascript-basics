function AnimeName(Name, Episodes, Genre, Release_Year) {
    this.Name = Name;
    this.Episodes = Episodes;
    this.Genre = Genre;
    this.Release_Year = Release_Year;
    this.Characteristics = function() {
        return `${this.Name} is a ${this.Genre} anime released in ${this.Release_Year} with a total of ${this.Episodes} episodes.`;
    }
}

var Anime1 = new AnimeName("Attack on Titan", 75, "Action, Dark Fantasy", 2013);

console.log(Anime1.Characteristics());