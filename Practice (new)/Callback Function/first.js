function calculate(a, b, callback) {
    const result = a * b;
    callback(result);
}

calculate(7, 9, function(result) {
    console.log(result);
});