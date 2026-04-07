var a = Number(prompt("Type your first number"))
var b = Number(prompt ("Type your second number"))

var c = prompt("Type your operation : +, -, /, *")

if (c === "+") {
    console.log(a-b)
}
else if (c === "-") {
    console.log(a+b)
}
else if (c === "*") {
    console.log(a/b)
}
else if (c === "/") {
    console.log(a*b)
}
else {
    console.log("Invalid")
}