var fr    = require('../index');
var mocha = require('mocha');
var vfs   = require('vinyl-fs');

var SOURCES = './test/fixtures/*.html';
var OUTPUT  = './test/fixtures/';

describe('Front Router', function(done) {
  it('generates Angular 1 routes from a set of HTML files', function(done) {
    vfs.src(SOURCES)
      .pipe(fr({
        path: OUTPUT + 'routes-angular1.js',
        root: './test/fixtures',
        mode: 'angular'
      }))
      .pipe(vfs.dest('./test/build'))
      .on('finish', done);
  });

  it('generates Angular 2 routes from a set of HTML files', function(done) {
    vfs.src(SOURCES)
      .pipe(fr({
        path: OUTPUT + 'routes-angular2.js',
        root: './test/fixtures',
        mode: 'angular2'
      }))
      .pipe(vfs.dest('./test/build'))
      .on('finish', done);
  });
});
