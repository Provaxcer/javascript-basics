const userInputName = document.querySelector(".nameInput")
const userInputAge = document.querySelector(".userInputAge")
const userInputDepartment = document.querySelector(".userInputDepartment")
const submitButton = document.querySelector(".submitBtn")
const deleteButton = document.querySelector(".deleteBtn")
const HTMLbox = document.querySelector(".StudentDetails")

const studentList = []

function renderStudents() {
    HTMLbox.innerHTML = ""

    studentList.forEach((student) => {
        const dataHTML = document.createElement("div")
        dataHTML.innerHTML = `
            <h2>${student.name}</h2>
            <p>Age: ${student.age}</p>
            <p>Department: ${student.department}</p>
        `

        HTMLbox.append(dataHTML)
    })
}

function valueFromUser() {
    const student = {
        name: userInputName.value,
        age: userInputAge.value,
        department: userInputDepartment.value
    }

    studentList.push(student)
    renderStudents()

    userInputName.value = ""
    userInputAge.value = ""
    userInputDepartment.value = ""
}

submitButton.addEventListener("click", valueFromUser)

function deleteDetails () {
    studentList.pop()
    renderStudents()
}

deleteButton.addEventListener("click", deleteDetails)