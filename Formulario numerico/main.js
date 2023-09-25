document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("numeric-form");
    const firstNumberInput = document.getElementById("First-number");
    const secondNumberInput = document.getElementById("Second-number");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const firstName = document.getElementById("name").value;
        const firstNumber = parseFloat(firstNumberInput.value);
        const secondNumber = parseFloat(secondNumberInput.value);
        const successMessage = "Your form is valid!";
        const negativeMessage = "Your form is not valid.";

        const successMessageElement = document.querySelector('.success-message');
        const negativeMessageElement = document.querySelector('.negative-message');

        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            alert("Please enter valid numbers for both fields.");
        } else {
            if (secondNumber > firstNumber) {
                successMessageElement.style.display = "block";
                negativeMessageElement.style.display = "none";
            } else {
                negativeMessageElement.style.display = "block";
                successMessageElement.style.display = "none";
            }
        }
    });
});

