$(document).ready(function() {

    $('.svg').each(function() {
        
        var $img = $(this),
            imgURL = $img.attr('src'),
            imgID  = $img.attr('id');
      
        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');
            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
          
            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);
        }, 'xml');
      });
  });