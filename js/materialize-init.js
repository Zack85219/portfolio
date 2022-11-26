$(document).ready(function () {
  // Init Scrollspy
  $(".scrollspy").scrollSpy();
  // Init slider
  $(".slider").slider({
    indicators: false,
    interval: 4000,
  });
  // Init Sidenav
  $(".sidenav").sidenav({
    edge: "right",
    preventScrolling: false,
  });

  // Init carousel slider
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: false,
  });
});
