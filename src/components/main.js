$(document).ready(function () {
  LazyLoadFunction();
});

function LazyLoadFunction() {
  var lazyLoad = new LazyLoad({
    elements_selector: '.lazy',
  });
  lazyLoad.update();
}