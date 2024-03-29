window.addEventListener('DOMContentLoaded', function () {
  LazyLoadFunction()
  AOS.init()
  navbarOffCanvas()
  headerSearch()
  eventScrollBackToTop()
  sliderHighLightHome()
  sliderJobHome()
  sliderGalleryHome()
  sliderPartnerHome()
  sliderNewsHome()
  sliderViecLam()
})


function LazyLoadFunction() {
  var lazyLoad = new LazyLoad({
    elements_selector: '.lazy',
  })
  lazyLoad.update()
}

//#region Navbar OffCanvas pure JS
function navbarOffCanvas() {
  // When the user clicks anywhere outside of the offcanvas, close it
  window.addEventListener('click', function (event) {
    if (event.target === document.querySelector('.offcanvas.open')) {
      CloseOffCanvas()
    }
  })
  // toggle offcanvas_nav_sub
  var offCanvasNavLink = document.querySelectorAll('.offcanvas_nav__link')
  offCanvasNavLink.forEach(function (item) {
    if (item.nextElementSibling !== null) {
      item.classList.add('has_navsub')
      // console.log(item)
    }
    item.addEventListener('click', function (e) {
      // console.log(this.nextSibling) // https://www.w3schools.com/jsref/prop_node_nextsibling.asp
      // console.log(this.nextElementSibling)
      if (this.nextElementSibling !== null) {
        e.preventDefault()
        this.classList.toggle('show')
        this.nextElementSibling.classList.toggle('show')
      }
    })
  })
  document.querySelector('.offcanvas_button__open').addEventListener('click', function (e) {
    e.preventDefault()
    OpenOffCanvas()
  })
  document.querySelector('.offcanvas_button__close').addEventListener('click', function (e) {
    e.preventDefault()
    CloseOffCanvas()
  })

  function OpenOffCanvas() {
    document.querySelector('.offcanvas').classList.add('open')
    document.querySelector('body').classList.add('offcanvas_container')
  }
  function CloseOffCanvas() {
    document.querySelector('.offcanvas').classList.remove('open')
    document.querySelector('body').classList.remove('offcanvas_container')
  }
}
//#endregion


function headerSearch() {
  const input = document.querySelector('.header_search__input')
  const searchBtn = document.querySelector('.header_search__button')
  searchBtn !== null && searchBtn.addEventListener('click', function () {
    searchBtn.classList.toggle('close')
    input !== null && input.classList.toggle('square')
  })
}


//#region back to top event
function eventScrollBackToTop() {
  $('.social_media__BackToTop').click(function (e) {
    e.preventDefault()
    $('html, body').animate({
      scrollTop: 0
    }, 1000)
  })
}
//#endregion

//#region all slide
function sliderHighLightHome() {
  var highLightHomeThumbs = new Swiper('.highlight_home__slider__thumbnail', {
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slideToClickedSlide: true,
    breakpoints: {
      slidesPerView: 1,
      768: {
        slidesPerView: 3
      }
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    on: {
      click: function () {
        const title = $(this.clickedSlide).find('.highlight_home__sub_title').text()
        const short = $(this.clickedSlide).find('.highlight_home__sub_desc').text()
        const postTime = $(this.clickedSlide).find('.highlight_home__sub_postedtime').text()
        $('.highlight_home__title').text(title)
        $('.highlight_home__desc').text(short)
        $('.highlight_home__postedtime').text(postTime)
      }
    }
  })
  new Swiper('.highlight_home__slider', {
    spaceBetween: 15,
    speed: 2000,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 90,
      stretch: 90,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    lazy: true,
    simulateTouch: false, // tắt kéo-thả chuột khi chuyển slide
    breakpoints: {
      992: {
        autoplay: false,
      }
    },
    pagination: {
      el: '.highlight_home__slider .swiper-pagination',
      clickable: true
    },
    thumbs: {
      swiper: highLightHomeThumbs
    }
  })
}

function sliderJobHome() {
  new Swiper('.job_home__slider', {
    // autoHeight: true,
    lazy: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
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
    lazy: true,
    autoplay: {
      delay: 4000,
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
      },
      1200: {
        slidesPerView: 5
      }
    }
  })
}

function sliderNewsHome() {
  new Swiper('.news_home__main .swiper-container', {
    slideToClickedSlide: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    lazy: true,
    spaceBetween: 16,
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: '.news_home__main__nav-next',
      prevEl: '.news_home__main__nav-prev'
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
  new Swiper('.news_home__sub .swiper-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    autoHeight: true,
    // loop: true,
    navigation: {
      nextEl: '.news_home__sub__nav-next',
      prevEl: '.news_home__sub__nav-prev'
    },
  })
}

function sliderViecLam() {
  new Swiper('.vl-company .swiper-container', {
    slidesPerView: 1,
    lazy: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.vl-company .swiper-pagination',
      clickable: true
    },
  })
}
//#endregion
