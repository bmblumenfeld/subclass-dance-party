$(document).ready(function() {
  window.dancers = [];
  window.batmanDancers = [];
  window.superHeroDancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  
  $('.lineUpButton').on('click', function (event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('.partyButton').on('click', function (event) {
    var startingPointX = 700;
    var startingPointY = 500;
    var tranformX = 30;
    var tranformY = 10;
    var tranformX2 = 10;
    var tranformY2 = 30;
    //////////////////////////////////////    
    for (var i = 0; i < (window.dancers.length) / 2; i++) {  
      if (i === 0) {
        window.dancers[i].party(startingPointX, startingPointY);
      } else {
        startingPointX += tranformX;
        startingPointY -= tranformY;
        window.dancers[i].party(startingPointX, startingPointY);
      }
    }
    for (var k = (Math.ceil(window.dancers.length / 2)); k < (window.dancers.length); k++) {
      if (k === (Math.ceil(window.dancers.length / 2))) {
        startingPointX = 1200;
        startingPointY = 500;
        window.dancers[k].party(startingPointX, startingPointY);
      } else {
        startingPointX += tranformX2;
        startingPointY -= tranformY;
        window.dancers[k].party(startingPointX, startingPointY);
      }
    }
  });

  $('body').on({
    mouseenter: function () {
      $(this).css({
        'position' : 'absolute', 
        'width' : '200px', 
        'height' : '200px'
      });
    },
    
    mouseleave: function () {
      $(this).css({
        'position' : 'absolute',
        'width' : '100px',
        'height' : '100px'
      });
    }
  }, '.batman');

  $('body').on({
    mouseenter: function () {
      $(this).css({
        // 'border' : '20px solid blue',
        // 'border-radius' : '20px',
        'position' : 'absolute', 
        'width' : '200px', 
        'height' : '200px'
      });
    },
    
    mouseleave: function () {
      $(this).css({
        'position' : 'absolute',
        'width' : '100px',
        'height' : '100px'
      });
    }
  }, '.superhero');

  $('body').on({
    mouseenter: function () {
      $(this).css({
        // 'border' : '20px solid blue',
        // 'border-radius' : '20px',
        'position' : 'absolute', 
        'width' : '200px', 
        'height' : '200px'
      });
    },
    
    mouseleave: function () {
      $(this).css({
        'position' : 'absolute',
        'width' : '100px',
        'height' : '100px'
      });
    }
  }, '.dancer');

});





































