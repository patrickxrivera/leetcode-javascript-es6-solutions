var createStack = function() {
  var createInternalStack = function(top, rest) {
    var isEmpty = function() {
      return top === undefined;
    };

    var peek = function() {
      return top;
    };

    var push = function(item) {
      return createInternalStack(item, this);
    };

    var pop = function() {
      return rest;
    };

    return {
      isEmpty: isEmpty,
      peek: peek,
      push: push,
      pop: pop
    };
  };

  return createInternalStack(undefined, undefined);
};

const stack = createStack();
const newStack = stack.push(3);

console.log(stack.peek());

newStack.push(4);

console.log(newStack.peek());
