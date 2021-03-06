/**
 * Test dependencies
 */

var errorify = require('../../../lib/waterline/error');
var WLError = require('../../../lib/waterline/error/WLError');
var assert = require('assert');


describe('lib/error', function () {

  describe('errorify', function () {

    it('(given a string) should return WLError', function () {
      var err = errorify('foo');
      assert(err instanceof WLError);
    });
    it('(given an object) should return WLError', function () {
      var err = errorify({what: 'will this do?'});
      assert(err instanceof WLError);
    });
    it('(given an array) should return WLError', function () {
      var err = errorify(['foo', 'bar', {baz: true}]);
      assert(err instanceof WLError);
    });
    it('(given a boolean) should return WLError', function () {
      var err = errorify(false);
      assert(err instanceof WLError);
    });
    it('(given a boolean) should return WLError', function () {
      var err = errorify(true);
      assert(err instanceof WLError);
    });
    it('(given a number) should return WLError', function () {
      var err = errorify(2428424.422429);
      assert(err instanceof WLError);
    });
    it('(given `null`) should return WLError', function () {
      var err = errorify(null);
      assert(err instanceof WLError);
    });
    it('(given `undefined`) should return WLError', function () {
      var err = errorify(undefined);
      assert(err instanceof WLError);
    });
    it('(given no arguments) should return WLError', function () {
      var err = errorify();
      assert(err instanceof WLError);
    });

  });
});
