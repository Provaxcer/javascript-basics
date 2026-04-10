async function waitAndLog() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello after delay");
        }, 1000);
    });
    const result = await promise;
    console.log(result);
}

waitAndLog();