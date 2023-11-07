document.addEventListener('DOMContentLoaded', function() {
    const dynamicForm = document.getElementById('dynamicForm');
    const inputContainer = document.getElementById('inputContainer');

    dynamicForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            dynamicForm.submit();
        }
    });

    const numFieldsSelect = document.getElementById('numFields');
    numFieldsSelect.addEventListener('change', function() {
        const numFields = parseInt(numFieldsSelect.value);
        generateInputFields(numFields);
    });

    function generateInputFields(numFields) {
        inputContainer.innerHTML = '';

        for (let i = 1; i <= numFields; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.name = `field${i}`;
            input.placeholder = `Field ${i}`;
            inputContainer.appendChild(input);
        }
    }

    function validateForm() {
        const inputs = document.querySelectorAll('#inputContainer input');
        let isValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
            }
        });

        if (!isValid) {
            alert('Please fill in all fields.');
        }

        return isValid;
    }
});
