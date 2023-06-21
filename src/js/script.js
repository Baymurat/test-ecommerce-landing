const btnLeft = document.querySelector('button.btn-arrow.btn-arrow-left')
const btnRight = document.querySelector('button.btn-arrow.btn-arrow-right')
const products = document.querySelector('.products')

console.log(btnLeft);
console.log(btnRight);
console.log(products);

btnLeft.addEventListener('click', () => {
  products.scrollBy({
    left: -100
  })
})

btnRight.addEventListener('click', () => {
  products.scrollBy({
    left: 100
  })
})