function fibonacciGenerator(n) {
    var arr = [];

    if (n === 1) {
        arr = [0];
    }
    else if (n === 2) {
        arr = [0, 1];
    }
    else {
        arr = [0, 1];

        for (i = 2; i < n; i++) {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        }
    }
    return arr;
}

var final = fibonacciGenerator(10)

console.log(final);