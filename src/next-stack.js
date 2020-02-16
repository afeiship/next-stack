(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  var NxStack = nx.declare('nx.Stack', {
    methods: {
      init: function(inData) {
        this.data = inData || [];
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
