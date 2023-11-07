document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('emailForm');
    const errorElement = document.getElementById('error');

    emailForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailInput = document.getElementById('email');
        const email = emailInput.value;

        if (validateEmail(email)) {
            errorElement.textContent = '';
            emailForm.submit();
        } else {
            errorElement.textContent = 'Please enter a valid email address.';
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
