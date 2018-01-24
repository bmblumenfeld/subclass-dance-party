var makeSuperHeroDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node = $('<span>' + '<img src="https://media.giphy.com/media/3ohhwIRTYlZCcUO06s/giphy.gif" class = "superhero">' + '</span>');
  this.setPosition(top, left); 
  this.$node.addClass('superhero'); 
};
makeSuperHeroDancer.prototype = Object.create(makeDancer.prototype);
makeSuperHeroDancer.prototype.constructor = makeSuperHeroDancer;
makeSuperHeroDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  
};

makeBatmanDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
