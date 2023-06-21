const btnLeft = document.querySelector('button.btn-arrow.btn-arrow-left')
const btnRight = document.querySelector('button.btn-arrow.btn-arrow-right')
const products = document.querySelector('.products')

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

const banners = document.querySelector('.slider .slider__banners')
const bannersCount = document.querySelectorAll('.slider .slider__banner').length
let count = 1

const intervalId = setInterval(() => {
  if (count === bannersCount) {
    count = 1
    banners.scrollTo({
      left: 0
    })
  } else {
    banners.scrollBy({
      left: window.innerWidth
    })
    count++
  }
}, 4000)
