// 金額をクリックしたときの処理
const priceElements = document.querySelectorAll('.price');
const quantityInputs = document.querySelectorAll('.quantity-input');

priceElements.forEach((priceElement, index) => {
  priceElement.addEventListener('click', () => {
    updateTotal(index);
  });
});

quantityInputs.forEach((quantityInput, index) => {
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

  // 金額の値を取得
  const priceValue = parseFloat(priceElement.getAttribute('data-value'));

  // 通数を取得
  const quantity = parseInt(quantityElement.value);

  // 合計金額を計算
  const total = priceValue * quantity;

  // 金額を表示する際に小数点以下の ".00" を削除して表示
  totalElement.textContent = total === Math.floor(total) ? total + '円' : total.toFixed(2) + '円';

  // 合計通数を更新
  let totalQuantity = 0;
  quantityInputs.forEach((input) => {
    totalQuantity += parseInt(input.value);
  });
  totalQuantityElement.textContent = totalQuantity;

  // 合計金額を更新
  let grandTotal = 0;
  priceElements.forEach((element, i) => {
    grandTotal += parseFloat(element.parentElement.querySelector('.total').textContent);
  });

  // 金額を表示する際に小数点以下の ".00" を削除して表示
  grandTotalElement.textContent = grandTotal === Math.floor(grandTotal) ? grandTotal + '円' : grandTotal.toFixed(2) + '円';
}



