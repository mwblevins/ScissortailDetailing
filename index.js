// index.js

document.getElementById('connectionForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    console.log(`Form submitted: Name - ${name}, Phone - ${phone}, Email - ${email}`);

    document.getElementById('connectionForm').reset();
});
