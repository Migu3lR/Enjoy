if (typeof (jQuery) === 'undefined') {
  let jQuery;

  if (typeof (require) === 'function') {
    jQuery = $ = require('jquery');
  } else {
    jQuery = $;
  }
}

(function ($) {
  // INITIALIZE
  $(function() {
    $('.button-collapse').sideNav();
    $('.dropdown-button').dropdown({ 
      inDuration: 300, 
      outDuration: 225, 
      constrain_width: true, 
      hover: false, 
      gutter: 0, 
      belowOrigin: false,
    });
  });
}(jQuery));
