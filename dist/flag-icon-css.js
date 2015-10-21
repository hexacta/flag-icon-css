'use strict';

angular.module('flag-icon-css', []).directive('flagIconCss', function(){
  return{
    restrict: 'E',
    replace: true,
    scope: {
      width: '=',
      iso: '='
    },
    template: '<span class="flag-icon flag-icon-{{iso | lowercase}}"></span>'
  }
});