(function ($) {
    "use strict";
  
  /*----------------------------------
      background image holder
  -----------------------------------*/
  function backgroundHolder() {
    $(".background-image-holder").each(function () {
        var thesrc = $(this).attr('src');
        $(this).parent().css("background-image", "url(" + thesrc + ")");
        $(this).parent().css("background-repeat", "no-repeat");
        $(this).hide();
    });
  }
  backgroundHolder();

  /* ---------------------------------------------
  Carosuel Slider
  --------------------------------------------- */
  $(".slide-container").slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    arrows: false,
    
    responsive:[{
      breakpoint: 1200,
      settings:{
        slidesToShow:1
      }
    }]
    
  }),
  
  /* ---------------------------------------------
  venobox
  --------------------------------------------- */
  $('.venobox').venobox({
    numeratio: true,
  });
  
  /* ---------------------------------------------
  search
  --------------------------------------------- */
  $('.search-toggle').on('click', function(event) {                    
		$('.navbar').toggleClass('active');
	});  
  

  })(jQuery);
  