require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

const assert = require('chai').assert
const Elevator = require('../elevator').default
const Person = require('../person').default

describe('Elevator', function() {
  const elevator = new Elevator()

  afterEach(function() {
    elevator.reset();
  });

  it('should start on idle on floor 0 with no requests made from any riders', () => {
    assert.equal(elevator.currentFloor, 0)
    assert.deepEqual(elevator.status, 'idle')
    assert.equal(elevator.totalStopsMade, 0)
    assert.equal(elevator.totalFloorsTransversed, 0)
    assert.deepEqual(elevator.requests, [])
    assert.deepEqual(elevator.riders, [])
  })

  describe ('Level 2', () => {
    const floor = 2
    const alex = new Person("Alex", floor)

    xit('should stop on current floor person is on', () => {
      elevator.requestElevator(alex)
      assert.equal(elevator.state, 'moving')
      assert.equal(elevator.currentFloor, 2)
      assert.equal(elevator.stops, 1)
      assert.deepEqual(elevator.riders, [alex])
    })

    xit('should bring a rider to a floor above their current floor', () => {
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

  })

  xit('should bring a rider to a floor below their current floor', () => {
  });

});

describe('Person', function() {
  const person = new Person("Hilary", 2)

  it('should have a person with a name and current floor', () => {
    assert.deepEqual(person.name, 'Hilary')
    assert.equal(person.currentFloor, 2)
  })
})
