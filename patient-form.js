let form = document.forms['survey-form'];

console.log(form.elements);
console.log(form.elements['name']);
console.log(form.elements['number']);

form.elements['name'].value = "Enter your name";

form.elements['number'].addEventListener("input", event => {
    console.log(event.target.value);
});