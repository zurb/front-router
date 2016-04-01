angular.module('foundation.dynamicRouting').config([
  '$FoundationStateProvider',
  function(FoundationStateProvider) {
    FoundationStateProvider.registerDynamicRoutes([{"name":"parent","url":"/parent","path":"parent.html"},{"name":"parent","url":"/parent","path":"parent.html"},{"name":"parent.child","url":"/child2","path":"child2.html"},{"name":"parent.child","url":"/child2","path":"child2.html"},{"name":"child","parent":"parent","url":"/child1","path":"child1.html"},{"name":"child","parent":"parent","url":"/child1","path":"child1.html"},{"name":"home","url":"/","path":"home.html"},{"name":"home","url":"/","path":"home.html"}]);
  }
]);