const contenttyped = document.querySelector("#contentinput");
const button = document.querySelector("#submit");
const list = document.querySelector(".list");

const todoarr = [];

function addToDO() {
    const inputvalue = contenttyped.value;

    todoarr.push(inputvalue);

    contenttyped.value = "";

    render();
}

function render() {
    list.innerHTML = "";

    for (let i = 0; i < todoarr.length; i++) {
        const newlist = document.createElement("li");
        newlist.textContent = todoarr[i];
        list.append(newlist);
    }
}

button.addEventListener("click", addToDO);