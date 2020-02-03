/*!
 * name: @feizheng/next-stack
 * description: Stack for next.
 * url: https://github.com/afeiship/next-stack
 * version: 1.0.0
 * date: 2020-02-03 18:41:54
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  var NxStack = nx.declare('nx.Stack', {
    methods: {
      init: function(inData) {
        this.data = inData;
      },
      push: function() {
        return this.data.push.apply(this.data, arguments);
      },
      pop: function() {
        return this.data.pop();
      },
      peek: function() {
        var length = this.data.length;
        return this.data[length - 1];
      },
      isEmpty: function() {
        return this.data.length === 0;
      },
      clear: function() {
        this.data.length = 0;
      },
      size: function() {
        return this.data.length;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxStack;
  }
})();

//# sourceMappingURL=next-stack.js.map
