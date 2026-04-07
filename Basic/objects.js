function Housekepper(Name, DOB, Age, Occupation, Favourite_Anime) {
    this.Name = Name;
    this.DOB = DOB;
    this.Age = Age;
    this.Occupation = Occupation;
    this.Favourite_Anime = Favourite_Anime;
}

var Housekeeper1 = new Housekepper("Zoro", "14/05/2002", 23, "Student", "One Piece");
var Housekeeper2 = new Housekepper("Luffy", "21/05/2002", 21, "Trader", "Solo Leveling");

console.log(Housekeeper1);

