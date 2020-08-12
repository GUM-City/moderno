$(function(){

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        normalFill: "#A0A0A0", //defolt bg grey
        ratedFill: "#E74C3C",
        readOnly: true,
      });

    $(".product-slider__inner").slick({
      dots: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
    });

      

    var mixer = mixitup('.products__inner-box');

});