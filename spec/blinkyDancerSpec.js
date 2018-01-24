describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
  describe('push to window array', function () {
    it('should correctly add dancers to window array', function () {
      window.dancers = [];
      var blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
      var blinkyDancer2 = new makeBlinkyDancer(10, 20, timeBetweenSteps);
      window.dancers.push(blinkyDancer);
      window.dancers.push(blinkyDancer2);
      expect(window.dancers.length).to.be.equal(2);
    });
  });
  describe('Line Up', function () {
    it('Should correctly line up', function () {
      window.dancers = [];
      var blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
      var blinkyDancer2 = new makeBlinkyDancer(10, 20, timeBetweenSteps);
      window.dancers.push(blinkyDancer);
      window.dancers.push(blinkyDancer2);
      for (var i = 0; i < window.dancers.length; i++) {
        window.dancers[i].setPosition(1, 2);
      }
      expect($(window.dancers[0].$node[0]).css('top')).to.be.equal(1 + 'px');    
    });
  });

});
