var fm          = require('front-matter');
var PluginError = require('gulp-util').PluginError;
var path        = require('path');

/**
 * Adds a route definition to the route list.
 * @param {string} file - Path to the page.
 * @param {addedCallback} cb - Callback to run when the route has been processed.
 */
module.exports = function(file, cb) {
  var route, content, relativePath;

  if (file.isNull()) {
    cb(null, file);
  }

  if (file.isBuffer()) {
    // Extract Front Matter from page
    try {
      content = fm(file.contents.toString());
    }
    catch (e) {
      cb(new PluginError('Front Router', e));
    }

    // Create page metadata
    if (content.attributes.name) {
      file.contents = new Buffer(content.body);
      route = content.attributes;
      relativePath = path.relative(this.options.dir + path.sep + this.options.root, file.path);
      route.path = relativePath.split(path.sep).join('/');
      this.routes.push(route);
    }
  }

  /**
   * Runs when the route has been processed.
   * @callback addedCallback
   * @param {Error|null} err - Error instance, or `null` if there's no error.
   * @param {Vinyl} file - File object.
   */
  cb(null, file);
}
