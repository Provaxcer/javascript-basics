const sub = document.querySelector('#myForm');
const inp = document.querySelector("#nameInput");

sub.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    const hi = inp.value;
    console.log(hi);
    inp.value = "";
});

