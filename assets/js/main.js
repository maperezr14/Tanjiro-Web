$(document).ready(function () {
  // Change header background color on scroll
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("header").addClass("active");
        $(".navbar-collapse.justify-content-end.collapse.show").removeClass("show");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $("header").removeClass("active");
    }
  });

  // Stop Video Modal
  $("#trailerModal").on('hidden.bs.modal', function (e) {
    $("#trailerModal iframe").attr("src", $("#trailerModal iframe").attr("src"));
  });


  // Sliders
  // Principal
  $('.single-item').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    prevArrow: '<span class="slick-prev"><i class="fas fa-chevron-left"></i></span>',
    nextArrow: '<span class="slick-next"><i class="fas fa-chevron-right"></i></span>'
  });

  // Top 5
  $('.center').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: true,
    prevArrow: '<span class="slick-prev"><i class="fas fa-chevron-left"></i></span>',
    nextArrow: '<span class="slick-next"><i class="fas fa-chevron-right"></i></span>',
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // Our Series
  $(".multiple-items").not('.slick-initialized').slick({
    prevArrow: '<span class="slick-prev"><i class="fas fa-chevron-left"></i></span>',
    nextArrow: '<span class="slick-next"><i class="fas fa-chevron-right"></i></span>',
  });
  $('.multiple-items').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    arrows: true,
    prevArrow: '<span class="slick-prev"><i class="fas fa-chevron-left"></i></span>',
    nextArrow: '<span class="slick-next"><i class="fas fa-chevron-right"></i></span>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
});

