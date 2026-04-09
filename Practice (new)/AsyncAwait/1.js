function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = "Data fetched successfully!";
            resolve(data);
        }, 3000);
    });
}
async function getData() {
    const final = await fetchData();
    console.log(final);
}

getData();
