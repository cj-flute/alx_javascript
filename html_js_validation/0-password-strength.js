document.addEventListener('DOMContentLoaded', function() {
    const passwordForm = document.getElementById('passwordForm');
    const errorElement = document.getElementById('error');

    passwordForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const passwordInput = document.getElementById('password');
        const password = passwordInput.value;

        if (validatePassword(password)) {
            errorElement.textContent = '';
            passwordForm.submit();
        } else {
            errorElement.textContent = 'Password must be at least 8 characters long and meet the specified criteria.';
        }
    });

    function validatePassword(password) {
        const minLength = 8;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /[0-9]/;
        const specialCharRegex = /[!@#$%^&*]/;

        return (
            password.length >= minLength &&
            uppercaseRegex.test(password) &&
            lowercaseRegex.test(password) &&
            digitRegex.test(password) &&
            specialCharRegex.test(password)
        );
    }
});
