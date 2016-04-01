var through = require('through2');
var extend  = require('util')._extend;
var path    = require('path');

var fr;

/**
 * Creates a new instance of Front Router.
 * @class
 * @param {object} options - Configuration options.
 * @param {string} options.dir - Base path of all pages being used in routes.
 * @param {string} options.output - Output file with route definitions.
 * @param {string} options.mode - Framework to use. Can be `angular` or `angular2`.
 */
function FrontRouter(options) {
  this.options = extend({
    dir: process.cwd(),
    output: path.join(process.cwd(), 'routes.js'),
    mode: 'angular'
  }, options);

  this.routes = [];
}

FrontRouter.prototype.addRoute = require('./lib/addRoute');
FrontRouter.prototype.writeRoutes = require('./lib/writeRoutes');

/**
 * Process a series of pages into routes.
 * @param {object} options - Config options to pass to the `FrontRouter` class.
 * @returns {function} Transform stream.
 */
module.exports = function(options) {
  if (typeof fr === 'undefined') {
    fr = new FrontRouter(options);
  }

  return through.obj(function(file, enc, cb) {
    fr.addRoute(file, cb);
  }, function(cb) {
    fr.writeRoutes.call(fr, cb);
  });
};

module.exports.FrontRouter = FrontRouter;
