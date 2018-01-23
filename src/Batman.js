var makeBatmanDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  //this.$node = $('<span class="batman"></span>');
  this.$node.addClass('batman'); 
};
makeBatmanDancer.prototype = Object.create(makeDancer.prototype);
makeBatmanDancer.prototype.constructor = makeBatmanDancer;
makeBatmanDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
