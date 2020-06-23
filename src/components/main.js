$(document).ready(function () {
  LazyLoadFunction();
  allSliderFuntion();
  allEventClickFunction();
});

function LazyLoadFunction() {
  var lazyLoad = new LazyLoad({
    elements_selector: '.lazy',
  });
  lazyLoad.update();
}

function allEventClickFunction() {
  $('.highlight_home__slider__thumbnail .highlight_home__slider__item').click(function () {
    $('.highlight_home__slider__item').removeClass('active');
    $(this).addClass('active');
    // console.log($(this).children('.highlight_home__subtitle'));
    const title = $(this).children('.highlight_home__sub_title').text();
    const short = $(this).children('.highlight_home__sub_desc').text();
    const postTime = $(this).children('.highlight_home__sub_postedtime').text();
    $('.highlight_home__title').text(title);
    $('.highlight_home__desc').text(short);
    $('.highlight_home__postedtime').text(postTime);
  })
}

function allSliderFuntion() {
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
  });
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
  });
}