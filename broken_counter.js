// Our counter prototype is broken. Can you spot, what's wrong here?
// function Counter() {
//   this.value = 0;
// }
//
// Counter.prototype.increase() {
//   this.value++;
// };
//
// Counter.prototype.getValue() {
//   return this.value;
// };
//
// Counter.prototype.reset() {
//   this.value = 0;
// };
function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function() {
  return this.value++;
};

Counter.prototype.getValue = function() {
  return this.value;
};

Counter.prototype.reset = function() {
  return this.value = 0;
};
