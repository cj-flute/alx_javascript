document.addEventListener('DOMContentLoaded', function() {
    const submitForm = document.getElementById('submitForm');

    submitForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (validateForm(name, email)) {
            displayMessage('Form submitted successfully!', 'green');
        }
    });

    function validateForm(name, email) {
        if (name.trim() === '' || email.trim() === '') {
            displayMessage('Please fill in all required fields.', 'red');
            return false;
        }

        return true;
    }

    function displayMessage(message, color) {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messageElement.style.color = color;
        document.body.appendChild(messageElement);

        // Remove the message after 3 seconds
        setTimeout(function() {
            document.body.removeChild(messageElement);
        }, 3000);
    }
});
