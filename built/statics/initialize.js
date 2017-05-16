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
    $('.collapsiblelineas').collapsible();
  });
}(jQuery));
