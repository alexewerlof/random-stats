function noOp() {
  return;
}

function compose(...funcs) {
  if (funcs.length === 0) {
    return noOp;
  }
  return function (/* arguments */) {
    var lastIndex = funcs.length - 1;
    var ret = funcs[lastIndex].apply(this, arguments);
    for (var i = lastIndex - 1; i >= 0; i--) {
      ret = funcs[i](ret);
    }
    return ret;
  }
}

exports.compose = compose;
