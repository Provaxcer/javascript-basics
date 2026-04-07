const sub = document.querySelector('#myForm');
const input = document.querySelector("button");

sub.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Form submitted!");
});