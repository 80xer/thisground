'use strict';

angular.module('thisgroundApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
