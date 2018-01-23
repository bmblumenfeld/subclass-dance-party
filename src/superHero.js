var makeSuperHeroDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  //this.$node = $('<span class="superhero"></span>');
  this.$node.addClass('superhero'); 
};
makeSuperHeroDancer.prototype = Object.create(makeDancer.prototype);
makeSuperHeroDancer.prototype.constructor = makeSuperHeroDancer;
makeSuperHeroDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
