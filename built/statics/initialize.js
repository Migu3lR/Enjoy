import firebase from 'firebase';
import serviceAccount from '../../source/EnjoyLife-d535250a0bd1.json';

firebase.initializeApp({
  serviceAccount,
  databaseURL: 'https://enjoylife-32afb.firebaseio.com',
});

if (typeof (jQuery) === 'undefined') {
  let jQuery

  if (typeof (require) === 'function') {
    jQuery = $ = require('jquery');

  } else {
    jQuery = $;
  }
}
;
(function ($) {
  // INITIALIZE
  $('.button-collapse').sideNav();
}(jQuery));