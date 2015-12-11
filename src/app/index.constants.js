/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('mongodbAngular')
    .constant('malarkey', malarkey)
    .constant('moment', moment);

})();
