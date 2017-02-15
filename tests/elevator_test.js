require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

const assert = require('chai').assert
const Elevator = require('../elevator').default
const Person = require('../person').default

describe('Elevator', function() {
  const elevator = new Elevator()
  const alex = new Person("Alex", 2)
  const meeka = new Person("Meeka", 4)
  const brittany = new Person("Brittany", 6)

  afterEach(function() {
    elevator.reset();
  });

  it('should bring a rider to a floor above their current floor', () => {
    // Alex requests the elevator to take him from 2 to 5
    elevator.requestFloor(alex, 5)

    // Assert the current floor of the elevator is the drop off floor
    assert.equal(elevator.currentFloor, 5)
    // Assert the current status of the elevator is idle after drop off
    assert.equal(elevator.state, 'idle')
    // Assert the total number of stops is 2 after drop off
    assert.equal(elevator.stops, 2)
    // Assert the total number of floors traversed
    assert.equal(elevator.floors, 5)
  });

  it('should bring a rider to a floor below their current floor', () => {
    // Alex requests the elevator to take him from 2 to 5
    elevator.requestFloor(alex, 1)

    // Assert the current floor of the elevator is the drop off floor
    assert.equal(elevator.currentFloor, 1)
    // Assert the current status of the elevator is idle after drop off
    assert.equal(elevator.state, 'idle')
    // Assert the total number of stops is 2 after drop off
    assert.equal(elevator.stops, 2)
    // Assert the total number of floors traversed
    assert.equal(elevator.floors, 3)

  });

  it('should carry two riders, calculate total floors traversed over the course of both rides and calculate total stops', () => {
    // Alex requests the elevator to take him from 2 to 5
    elevator.requestFloor(alex, 1)
    elevator.requestFloor(meeka, 7)

    // Assert the current floor of the elevator is the drop off floor
    assert.equal(elevator.currentFloor, 7)
    // Assert the current status of the elevator is idle after drop off
    assert.equal(elevator.state, 'idle')
    // Assert the total number of stops is 2 after drop off
    assert.equal(elevator.stops, 4)
    // Assert the total number of floors traversed
    assert.equal(elevator.floors, 9)
  });

  it('should carry three riders, calculate total floors traversed over the course of both rides and calculate total stops', () => {
    // Alex requests the elevator to take him from 2 to 5
    elevator.requestFloor(alex, 1)
    elevator.requestFloor(meeka, 7)
    elevator.requestFloor(brittany, 12)

    // Assert the current floor of the elevator is the drop off floor
    assert.equal(elevator.currentFloor, 12)
    // Assert the current status of the elevator is idle after drop off
    assert.equal(elevator.state, 'idle')
    // Assert the total number of stops is 2 after drop off
    assert.equal(elevator.stops, 6)
    // Assert the total number of floors traversed
    assert.equal(elevator.floors, 16)
  });

});
