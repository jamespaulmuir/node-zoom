'use strict';

var expect = require('chai').expect;
var zoom = require('../lib');
var conn = new zoom.Connection('z3950.indexdata.com:210/gils');

before(function (done) {
  conn.connect(function (err) {
    if (err) {
      throw err;
    }
    done();
  });
});

describe('connection', function () {
  describe('.search()', function () {
    it('should run widthout error', function (done) {
      var query = new zoom.Query('@attr 1=4 book');
      conn.search(query, function (err) {
        expect(err).to.be.null;
        done();
      });
    });
  });

  describe('.scan()', function () {
    it('should run widthout error', function (done) {
      var query = new zoom.Query('@attr 1=4 book');
      conn.scan(query, function (err) {
        expect(err).to.be.null;
        done();
      });
    });
  });
});
