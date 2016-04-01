var fs = require('fs');

/**
 * Write a collection of routes to disk as a JavaScript file, using the framework hook defined in `options.mode`.
 * @param {finishedCallback} cb - Callback to run when the file has been written to disk.
 */
module.exports = function(cb) {
  var lib, output;

  this.routes.sort(function(a, b) {
    return a.url < b.url;
  });

  // Load the output creator for the given framework
  try {
    lib = require('../frameworks/' + this.options.mode);
  }
  catch (e) {
    cb(new PluginError('Front Router', 'No support for ' + this.options.mode + '.'));
  }

  output = lib(this.routes);

  // Create file with routes
  fs.writeFile(this.options.path, output, function(err) {
    if (err) throw err;

    /**
     * Called when the file has been written to disk without errors.
     * @callback finishedCallback
     */
    cb();
  });
}
