(function() {
  'use strict';

  angular
    .module('mongodbAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
