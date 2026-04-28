function timer(resolve) {
    setTimeout(resolve, 3000);
}


const p = new Promise (timer)

function callback() {
    console.log("Hello");
}


p.then(callback)