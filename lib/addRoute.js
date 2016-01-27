var fm          = require('front-matter');
var PluginError = require('gulp-util').PluginError;
var path        = require('path');

module.exports = function(file, enc, cb) {
  var route, content;

  if (file.isNull()) {
    cb(null, file);
  }

  if (file.isBuffer()) {
    try {
      content = fm(file.contents.toString());
    }
    catch (e) {
      return cb(new PluginError('Front Router', e));
    }

    if (content.attributes.name) {
      file.contents = new Buffer(content.body);
      route = content.attributes;
      var relativePath = path.relative(this.options.dir + path.sep + this.options.root, file.path);
      route.path = relativePath.split(path.sep).join('/');
      this.routes.push(route);
    }
  }

  cb(null, file);
}
