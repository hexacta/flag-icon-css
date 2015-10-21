'use strict';

angular.module('flag-icon-css', []).directive('flagIconCss', function(){
  return{
    restrict: 'E',
    replace: true,
    scope: {
      iso: '=',
      width: '@'
    },
    template: '<div class="flag-icon flag-icon-{{iso | lowercase}}" style="width:{{width}}px; height:{{height}}px;"></div>',
    link: function(scope, element, attrs){
    	scope.height = scope.width * 3/4;
    }
  }
});