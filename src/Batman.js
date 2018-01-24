var makeBatmanDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node = $('<span>' + '<img src="https://media.giphy.com/media/l0Iy2u0RfcJ769kdi/giphy.gif" class = "batman">' + '</span>');
  this.$node.addClass('batman');
  this.setPosition(top, left); 
};
makeBatmanDancer.prototype = Object.create(makeDancer.prototype);
makeBatmanDancer.prototype.constructor = makeBatmanDancer;
makeBatmanDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.slideDown();
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

makeBatmanDancer.prototype.batmanLineUp = function () {
  
  var randomValueX = Math.floor(Math.random() * window.width);
  var styleSettings = {
    top: 300,
    left: randomValueX
  };
  this.$node.css(styleSettings);

};

$(document).ready(function() {
  window.batmanDancers = [];
  
  $('.batmanButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.batmanDancers.push(dancer);
  // $('body').append(dancer.$node);
  });

  $('.batmanButton').on('click', function (event) {
    for (var i = 0; i < window.batmanDancers.length; i++) {
      window.batmanDancers[i].batmanLineUp();
    }
  });


});

