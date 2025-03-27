document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantity");
    const incrementBtn = document.querySelector(".increment");
    const decrementBtn = document.querySelector(".decrement");
    const subtotal = document.getElementById("subtotal");
    const payable = document.getElementById("payable");

    const tokenPrice = 190000;

    function updatePrice() {
        let quantity = parseInt(quantityInput.value);
        if (quantity < 1) quantity = 1;
        const total = tokenPrice * quantity;
        subtotal.textContent = `$${total.toLocaleString()}`;
        payable.textContent = `$${total.toLocaleString()}`;
    }

    incrementBtn.addEventListener("click", () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updatePrice();
    });

    decrementBtn.addEventListener("click", () => {
        quantityInput.value = Math.max(1, parseInt(quantityInput.value) - 1);
        updatePrice();
    });

    quantityInput.addEventListener("input", updatePrice);
});
