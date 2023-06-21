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

const banners = document.querySelectorAll('.slider .slider__banner-content')
const ellipses = document.querySelectorAll('.slider .slider__control-ellipse')
const map = new Map()

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      ellipses.forEach((ellipse) => {
        ellipse.classList.remove('active-ellipse')
      })

      const target = map.get(entry.target)
      target.classList.add('active-ellipse')
    }
  })
})

banners.forEach((banner, index) => {
  map.set(banner, ellipses[index])
  observer.observe(banner)
})

const bannersContainer = document.querySelector('.slider .slider__banners')
const bannersCount = document.querySelectorAll('.slider .slider__banner').length
let count = 1

const intervalId = setInterval(() => {
  if (count === bannersCount) {
    count = 1
    bannersContainer.scrollTo({
      left: 0
    })
  } else {
    bannersContainer.scrollBy({
      left: window.innerWidth
    })
    count++
  }
}, 4000)
