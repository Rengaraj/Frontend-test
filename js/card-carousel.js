/**
 * @file
 *  Card carousel script
 *
 */
(function ($, Drupal) {
  Drupal.behaviors.cardCarousel = {
    attach: function (context, settings) {
      // 3 column Card carousel
      $(".view-conferences-tab .view-content")
        .not(".slick-initialized")
        .slick({
          arrows: true,
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: false,
          responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                arrows: false,
                infinite: false,
                dots: true,
              },
            },
          ],
        });

      $(".tabs__link").on("click", function () {
        // get the data attribute
        var tab_id = $(this).attr("href");
        // remove the default classes
        $(".tabs__link").removeClass("current");
        $(".layout--conferences .block-views").removeClass("current");
        // add new classes on mouse click
        $(this).addClass("current");
        $(tab_id).addClass("current");

        // Show from top while clicking on tabs
        $("html, body").animate(
          { scrollTop: $(".main-content").position().top },
          "fast"
        );
      });
    },
  };
})(jQuery, Drupal);
