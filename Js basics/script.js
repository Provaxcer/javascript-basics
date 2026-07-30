const task = document.querySelector(".taskName")
const submitBtn = document.querySelector(".submitButton")
const dataShow = document.querySelector(".dataShow")

const dataArr = []

function takeUserInput() {
    const data = {
        task: task.value
    }
    dataArr.push(data)

    task.value = ""
    dataShow.innerHTML = "";

    dataArr.forEach((element) => {
        const h1 = document.createElement("h2");
        h1.textContent = `Task: ${element.task}`;
        dataShow.append(h1);
    }
    )
}

submitBtn.addEventListener("click", takeUserInput)