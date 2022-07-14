let scrollpos = window.scrollY
const header = document.querySelector('.header')
const header_height = 15

const add_class_on_scroll = () => header.classList.add('header__fixed')
const remove_class_on_scroll = () => header.classList.remove('header__fixed')

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY

  if (scrollpos >= header_height) {
    add_class_on_scroll()
  } else {
    remove_class_on_scroll()
  }
})

document.querySelectorAll('.popular__save').forEach((btn) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    let heart = this.querySelector('.fa-heart')
    if (heart.classList.contains('fa-regular')) {
      heart.classList.remove('fa-regular')
      heart.classList.add('fa-solid')
    } else {
      heart.classList.remove('fa-solid')
      heart.classList.add('fa-regular')
    }
  })
})

const burger = document.querySelector('.burger-mnu')

burger.addEventListener('click', () => {
  burger.classList.toggle('burger-mnu--active')
  document.querySelector('.navigation').classList.toggle('navigation--active')
})

const benefitsSlider = new Swiper('.benefits-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoHeight: true,
  pagination: {
    el: '.benefits-pagination',
  },
})

const teamSlider = new Swiper('.team-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.team-pagination',
  },
})

$(document).ready(function () {
  // Planet Animation
  var hT = $('#avocado-group').offset().top
  var hH = $('#avocado-group').outerHeight()
  var wH = $(window).height()
  var wS = $(this).scrollTop()
  var pad = 200
  if (wS >= hT + hH - wH) $('#avocado-group').removeClass('noanimate')

  $(window).scroll(function () {
    wS = $(this).scrollTop()

    // Header
    if (wS > 50) $('#header').addClass('scroll')
    else $('#header').removeClass('scroll')

    // Planet Animation
    if (wS >= hT + hH - wH - pad) $('#avocado-group').removeClass('noanimate')
  })
})

document.querySelectorAll('.callback').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.callback-modal').style.display = 'flex'
  })
})

document
  .querySelector('.callback-modal .close')
  .addEventListener('click', () => {
    document.querySelector('.callback-modal').style.display = 'none'
  })
