async function sanu() {
    try {
        const promise = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await promise.json();
        console.log(data.title);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

sanu();