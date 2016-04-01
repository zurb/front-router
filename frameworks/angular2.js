var format = require('util').format;
var multiline = require('multiline');

// Final module output
var output = multiline(function() {/*
window.__frontRouterConfig = %s;
*/});

module.exports = function(routes) {
  return format(output, JSON.stringify(routes));
}
