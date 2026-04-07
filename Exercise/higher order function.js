function add (n1,n2) {
    return n1 + n2;
}
function multiply (n1,n2) {
    return n1 * n2;
}
function substract (n1,n2) {
    return n1 - n2;
}
function divison (n1,n2) {
    return n1 / n2;
}

function calculator (n1,n2,operator) {
    console.log(operator(n1,n2));
}

calculator (2,3,multiply);