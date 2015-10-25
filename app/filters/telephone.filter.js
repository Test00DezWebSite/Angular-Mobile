(function() {
  'use strict';

  angular
    .module('app.filters')
    .filter('tel', filter);

  function filter() {
    return telephone;
  }

  function telephone(tel) {
    var country = '1',
      area = '',
      prefix = '',
      line = '',
      phoneNumber = '';

    tel = tel
      .replace('(', '')
      .replace(')', '')
      .replace('-', '')
      .replace('+', '')
      .replace(' ', '');

    if (tel.length === 10) {
      area = tel.substr(0, 3);
      prefix = tel.substr(3, 3);
      line = tel.substr(6);
    } else if (tel.length === 11) {
      country = tel.substr(0, 1);
      area = tel.substr(1, 3);
      prefix = tel.substr(4, 3);
      line = tel.substr(7);
    }

    phoneNumber = country + " (" + area + ") " + prefix + "-" + line;
    return phoneNumber.trim();
  }
})();
