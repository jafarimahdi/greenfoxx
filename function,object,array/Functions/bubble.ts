
function bubble(input) {
  input.sort((a, b) => a - b)   // dorst kardan function ba sort tarighey aval
  return input
}

function advancedBubble(input, boolean) {
  if (boolean === true) {
    input.sort(function (a, b) {      // dorst kardan function ba sort tarighey dovom
      return b - a
    })
  } else {
    input.sort(function (a, b) {
      return a - b
    })
  }
  return input
}

//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 5, 9], true));
//  should print [34, 24, 12, 9, 5]