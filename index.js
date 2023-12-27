// index.js

document.getElementById('connectionForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    console.log(`Form submitted: Name - ${name}, Phone - ${phone}, Email - ${email}`);

    showSubmissionMessage();

    document.getElementById('connectionForm').reset();
});

function showSubmissionMessage() {
    const submissionMessage = document.getElementById('submissionMessage');
    submissionMessage.style.display = 'block';

    setTimeout(function () {
        submissionMessage.style.display = 'none';
    }, 3000);
}

// Add the following code for image rotation
let currentImageIndex = 0;
const images = document.querySelectorAll('#image-slider img');
const rotateButton = document.getElementById('rotateButton');

rotateButton.addEventListener('click', function () {
    // Hide the current image
    images[currentImageIndex].style.display = 'none';

    // Increment the index, and reset to 0 if it exceeds the number of images
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Display the next image
    images[currentImageIndex].style.display = 'block';
});