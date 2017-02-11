require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

const assert = require('chai').assert
const Elevator = require('../elevator').default
const Person = require('../person').default

describe('Elevator', function() {
  const elevator = new Elevator()
  const larry = new Person("Larry", 2)
  const gary = new Person("Gary", 6)

  afterEach(function() {
    elevator.reset();
  });

  it('should bring a rider to a floor above their current floor', () => {
    elevator.requestFloor(larry, larry.currentFloor, 5)

    assert.equal(elevator.currentFloor, 5)
    assert.equal(elevator.state, 'idle')
    assert.equal(elevator.stops, 2)
    assert.equal(elevator.floors, 5)
  });

  it('should bring a rider to a floor below their current floor', () => {
    elevator.requestFloor(gary, gary.currentFloor, 2)

    assert.equal(elevator.currentFloor, 2)
    assert.equal(elevator.state, 'idle')
    assert.equal(elevator.stops, 2)
    assert.equal(elevator.floors, 10)
  });

  it('should pick up and drop off two riders in order of requests', () => {
    elevator.requestFloor(larry, larry.currentFloor, 5)
    elevator.requestFloor(gary, gary.currentFloor, 0)

    assert.equal(elevator.currentFloor, 0)
    assert.equal(elevator.state, 'idle')
    assert.equal(elevator.stops, 4)
    assert.equal(elevator.floors, 12)
  });

});
