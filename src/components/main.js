$(document).ready(function () {
  LazyLoadFunction()
  sliderHighLightHome()
  eventClickHighLightHome()
  sliderJobHome()
  sliderGalleryHome()
  sliderPartnerHome()
  sliderNewsHome()
})

function LazyLoadFunction() {
  var lazyLoad = new LazyLoad({
    elements_selector: '.lazy',
  })
  lazyLoad.update()
}

function eventClickHighLightHome() {
  $('.highlight_home__slider__thumbnail .highlight_home__slider__item').click(function () {
    $('.highlight_home__slider__item').removeClass('active')
    $(this).addClass('active')
    const title = $(this).children('.highlight_home__sub_title').text()
    const short = $(this).children('.highlight_home__sub_desc').text()
    const postTime = $(this).children('.highlight_home__sub_postedtime').text()
    $('.highlight_home__title').text(title)
    $('.highlight_home__desc').text(short)
    $('.highlight_home__postedtime').text(postTime)
  })
}

function sliderHighLightHome() {
  var galleryThumbs = new Swiper('.highlight_home__slider__thumbnail', {
    slidesPerView: 3,
    speed: 2000,
    breakpoints: {},
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    watchSlidesVisibility: true,
    watchSlidesProgress: true
  })
  new Swiper('.highlight_home__slider', {
    spaceBetween: 15,
    speed: 2500,
    slideToClickedSlide: true,
    simulateTouch: false,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    thumbs: {
      swiper: galleryThumbs
    },
  })
}

function sliderJobHome() {
  new Swiper('.job_home__slider', {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: '.job_home__slider__navigation .next',
      prevEl: '.job_home__slider__navigation .prev'
    }
  })
}

function sliderGalleryHome() {
  new Swiper('.gallery_home__slider', {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 2000,
    breakpoints: {
      slidesPerView: 1,
      768: {
        slidesPerView: 3
      }
    },
    pagination: {
      el: '.gallery_home__slider .swiper-pagination',
      clickable: true
    },
  })
}

function sliderPartnerHome() {
  new Swiper('.partner_home__slider', {
    loop: true,
    speed: 3000,
    lazy: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    slidesPerView: 2,
    breakpoints: {
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 4
      }
    }
  })
}

function sliderNewsHome() {
  new Swiper('.home-news__main .swiper-container', {
    slideToClickedSlide: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    spaceBetween: 16,
    loop: true,
    speed: 1500,
    navigation: {
      nextEl: '.home-news__main__nav-next',
      prevEl: '.home-news__main__nav-prev'
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    breakpoints: {
      768: {
        speed: 3000
      }
    }
  })
  new Swiper('.home-news__sub .swiper-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    autoHeight: true,
    loop: true,
    navigation: {
      nextEl: '.home-news__sub__nav-next',
      prevEl: '.home-news__sub__nav-prev'
    },
  })
}