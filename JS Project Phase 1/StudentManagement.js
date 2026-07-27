const userInputName = document.querySelector("nameInput")
const userInputAge = document.querySelector("nameInput")
const userInputDepartment = document.querySelector("nameInput")




const details = [
    {
        id: 1,
        name: "Sanu",
        department: "CSE",
        marks: 80
    },{
        id: 2,
        name: "Zoro",
        department: "ECE",
        marks: 23
    },{
        id: 3,
        name: "Luffy",
        department: "EE",
        marks: 87
    },{
        id: 4,
        name: "Ace",
        department: "IT",
        marks: 26
    }
]

const HTMLbox = document.querySelector(".StudentDetails")

details.forEach(element => {
    const dataHTML = document.createElement("div")
    dataHTML.innerHTML = `
    <h2>${element.name}</h2>
    <p>Department: ${element.department}</p>
    <p>Marks: ${element.marks}</p>`

    HTMLbox.append(dataHTML)
});