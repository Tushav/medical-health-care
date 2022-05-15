
let form = document.forms['appointment-form'];

console.log(form.elements);
console.log(form.elements['name']);
console.log(form.elements['number']);

form.elements['name'].value = "";

form.elements['number'].addEventListener("input", event => {
    console.log(event.target.value);
});