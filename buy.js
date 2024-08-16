document.addEventListener("DOMContentLoaded", function () {
    const modelSelection = document.getElementById("model-selection");
    const amountField = document.getElementById("amount");
    const paymentMethod = document.getElementById("payment-method");
    const upiOptions = document.getElementById("upi-options");

    function updateAmount() {
        const selectedModelPrice = modelSelection.value;
        amountField.value = "$" + selectedModelPrice;
    }

    function toggleUPIOptions() {
        if (paymentMethod.value === "upi") {
            upiOptions.style.display = "block";
        } else {
            upiOptions.style.display = "none";
        }
    }

    modelSelection.addEventListener("change", updateAmount);
    paymentMethod.addEventListener("change", toggleUPIOptions);

    updateAmount();
    toggleUPIOptions();
});
