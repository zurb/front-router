var format = require('util').format;
var multiline = require('multiline');

// Final module output
var output = multiline(function() {/*
angular.module('foundation.dynamicRouting').config([
  '$FoundationStateProvider',
  function(FoundationStateProvider) {
    FoundationStateProvider.registerDynamicRoutes(%s);
  }
]);
*/});

module.exports = function(routes) {
  return format(output, JSON.stringify(routes));
}
