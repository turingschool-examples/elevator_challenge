require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

const assert = require('chai').assert
const Elevator = require('../js/elevator').default
const Person = require('../js/person').default

describe('Elevator', function() {
  const elevator = new Elevator()
  const dobby = new Person('Dobby', 2)

  afterEach(function() {
    elevator.reset();
  });

  it('should bring rider to their requested floor', () => {
    elevator.addRequest(dobby, 9)
    assert.equal(elevator.currentFloor, 9)
    assert.equal(elevator.floors, 9)
    assert.equal(elevator.stops, 2)
    assert.equal(elevator.state, 'idle')
    assert.equal(elevator.riders.length, 0)
    assert.equal(elevator.requests.length, 1)
  });


  it('should bring a rider to a floor above their current floor', () => {
    elevator.addRequest(dobby, 5)
    assert.equal(elevator.currentFloor, 5)
    assert.equal(elevator.state, 'idle')
    assert.equal(elevator.stops, 2)
    assert.equal(elevator.floors, 5)
  });

  xit('should bring a rider to a floor below their current floor', () => {
  });

});
