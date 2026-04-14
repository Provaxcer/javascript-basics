function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 2));  // 5
    console.log(divide(10, 0));  // throws error
} catch (error) {
    console.log("Error: " + error.message);
}