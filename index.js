var through = require('through2');
var extend  = require('util')._extend;
var path    = require('path');

var fr;

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

module.exports = function(options) {
  if (typeof fr === 'undefined') {
    fr = new FrontRouter(options);
  }

  return through.obj(fr.addRoute.bind(fr), function(cb) {
    fr.writeRoutes.call(fr, cb);
  });
};

module.exports.FrontRouter = FrontRouter;
