// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  console.log(price)
  console.log(quantity)
  console.log(price.innerHTML) //price.innerHTML
  console.log(quantity.value)
  const totalprice = price.innerHTML * quantity.value
  console.log(totalprice)
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = totalprice;
  console.log(subtotal.innerText)
  return totalprice;
  //... your code goes here
}
 console.log(updateSubtotal(document.querySelector('.product')))

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
const 
  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
