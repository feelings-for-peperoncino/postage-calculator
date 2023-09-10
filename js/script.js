const priceElements = document.querySelectorAll('.price');
const quantityInputs = document.querySelectorAll('.quantity-input');

priceElements.forEach((priceElement, index) => {
  priceElement.addEventListener('click', () => {
    updateTotal(index);
  });
});

quantityInputs.forEach((quantityInput, index) => {
  quantityInput.addEventListener('click', () => {
    if (quantityInput.value === '0') {
      quantityInput.value = '';
    }
  });

  quantityInput.addEventListener('input', () => {
    updateTotal(index);
  });
});

function updateTotal(index) {
  const priceElement = priceElements[index];
  const quantityElement = quantityInputs[index];
  const totalElement = priceElement.parentElement.querySelector('.total');
  const totalQuantityElement = document.querySelector('.total-quantity');
  const grandTotalElement = document.querySelector('.grand-total');

  const priceValue = parseFloat(priceElement.getAttribute('data-value'));
  const quantity = parseInt(quantityElement.value) || 0;
  const total = priceValue * quantity;

  totalElement.textContent = total === Math.floor(total) ? total + '円' : total.toFixed(2) + '円';

  let totalQuantity = 0;
  quantityInputs.forEach((input) => {
    totalQuantity += parseInt(input.value) || 0;
  });
  totalQuantityElement.textContent = totalQuantity;

  let grandTotal = 0;
  priceElements.forEach((element, i) => {
    grandTotal += parseFloat(element.parentElement.querySelector('.total').textContent);
  });

  grandTotalElement.textContent = grandTotal === Math.floor(grandTotal) ? grandTotal + '円' : grandTotal.toFixed(2) + '円';
}