const inputUser = document.querySelector(".inputUser")
const submitBtn = document.querySelector(".submitBtn")
const newSection = document.querySelector(".newSection")

function doing(){
    console.log(inputUser.value)
}

inputUser.addEventListener("input", doing)