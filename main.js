// nav bar scrolling function 
window.addEventListener('scroll', () => {
  if (scrollY > 10) {
    $('.nav-bar').css({ position: 'fixed', top: '0', zIndex: '10', borderBottom: '1px solid lightgray' })
  } else {
    $('.nav-bar').css({ position: 'relative', top: '0', zIndex: '2' })
  }
})

let btn = $('#btn')
btn.click(function () {
  $('.showdiv').fadeIn('fast')
  $('.ul1').fadeIn('fast')
})

$('#cross').click(function () {
  $('.showdiv').hide()
  $('.ul1').hide()
})

// main-slider
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// drop ul 2
$('.ul1>li:nth-child(6)').hover(function () {
  $('.drop-ul1').show()
}, function () {
  $('.drop-ul1').hide()
})

// portfolio section functionality
$('.one').click(function () {
  $('.hide-img-1:nth-child(1)').fadeIn("slow")
  $('.hide-img-1:nth-child(2)').fadeIn("slow")
  $('.hide-img-1:nth-child(3)').fadeIn("slow")
  $('.hide-img-1:nth-child(4)').fadeIn("slow")
  $('.hide-img-1:nth-child(5)').fadeIn("slow")
  $('.hide-img-1:nth-child(6)').fadeIn("slow")
  $('.hide-img-1:nth-child(7)').fadeIn("slow")
  $('.hide-img-1:nth-child(8)').fadeIn("slow")
  $('.hide-img-1:nth-child(9)').fadeIn("slow")
})

$('.two').click(function () {
  $('.hide-img-1:nth-child(2)').fadeOut()
  // $('.hide-img-1:nth-child(6)').animate({left:'380px',top:'-315px'},"slow")
  $('.hide-img-1:nth-child(6)').animate({ left: '0px', top: '0px' }, "slow")
  $('.hide-img-1:nth-child(4)').fadeOut()
  $('.hide-img-1:nth-child(5)').fadeOut()
  $('.hide-img-1:nth-child(7)').fadeOut()
  $('.hide-img-1:nth-child(8)').fadeOut()
  $('.hide-img-1:nth-child(9)').fadeOut()
})

// animated counter 

$('.count').counterUp({
  delay:10,
  time:1000
})