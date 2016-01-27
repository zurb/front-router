var fr    = require('../index');
var mocha = require('mocha');
var vfs   = require('vinyl-fs');

var SOURCES = './test/fixtures/*.html';
var OUTPUT  = './test/fixtures/routes.js';

describe('Front Router', function(done) {
  it('generates a JavaScript object of routes from a set of HTML files', function(done) {
    vfs.src(SOURCES)
      .pipe(fr({
        path: OUTPUT,
        root: './test/fixtures',
        angular: true
      }))
      .on('finish', done);
  });
});
