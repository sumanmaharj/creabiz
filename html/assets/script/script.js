function client() {
  $(".client .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });
}
function discover() {
  $(".discover").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [
      "<img src='assets/images/icon/arrow-left.svg'>",
      "<img src='assets/images/icon/arrow-right.svg'>",
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      600: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });
}
function CaseStudies() {
  $(".case-studies").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 80,
    nav: true,
    dots: true,
    navText: [
      "<img src='assets/images/icon/arrow-left--light.svg'>",
      "<img src='assets/images/icon/arrow-right--light.svg'>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
      },
    },
  });
}
function Testimonials() {
  $("#testimonials").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
  });
}
function Portfolio() {
  $(".portfolio").owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    dots: false,
    navText: [
      "<img src='assets/images/icon/arrow-left.svg'>",
      "<img src='assets/images/icon/arrow-right.svg'>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      600: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });
}
function InIt() {
  new WOW().init();
}
function stickyHeader() {
  var scroll = $(window).scrollTop();
  var HeaderH = $("header").height();

  if (scroll >= HeaderH) {
    console.log(scroll);
    $(".navbar").addClass("sticky");
  } else {
    $(".navbar").removeClass("sticky");
  }
}
function footerSlide() {
  var winWidth = $(window).width();
  if (winWidth <= 767) {
    $(".footer-widget__content").hide();
    $(".footer-widget__toggle").on("click", function () {
      $(this).parent().next(".footer-widget__content").slideToggle();
    });
  }
}
function modalCarousel() {
  $(".freedemoModal .owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    navText: [
      "<img src='assets/images/icon/arrow-left--light.svg'>",
      "<img src='assets/images/icon/arrow-right--light.svg'>",
    ],
  });
}
$(document).ready(function () {
  client();
  discover();
  CaseStudies();
  Testimonials();
  Portfolio();
  InIt();
  footerSlide();
  modalCarousel();
});

$(window).scroll(function () {
  stickyHeader();
});
