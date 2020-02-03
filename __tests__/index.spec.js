(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxStack = require('../src/next-stack');

  describe('NxStack.methods', function() {
    test('init', function() {
      var data = {
        key: 1,
        value: 2
      };
      expect(!!data).toBe(true);
    });
  });
})();
