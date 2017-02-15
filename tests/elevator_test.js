require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
})

const assert = require('chai').assert
const Elevator = require('../elevator').default
const Person = require('../person').default

describe('Elevator', function() {
  const elevator = new Elevator()

  afterEach(function() {
    elevator.reset()
  })

  it('should start on idle on floor 0 with no requests made from any riders', () => {
    assert.equal(elevator.currentFloor, 0)
    assert.deepEqual(elevator.status, 'idle')
    assert.equal(elevator.totalStopsMade, 0)
    assert.equal(elevator.totalFloors, 0)
    assert.deepEqual(elevator.requests, [])
    assert.deepEqual(elevator.riders, [])
  })

  describe ('Level 2', () => {
    const person = new Person("Hilary", 2)

    it('should bring a rider to a floor above their current floor', () => {
      elevator.pickUpRider(person, 5)
      assert.deepEqual(elevator.riders, [person])
      assert.equal(elevator.totalFloors, 5)
      assert.equal(elevator.totalStopsMade, 2)
      assert.equal(elevator.status, 'idle')
      assert.equal(elevator.currentFloor, 5)
    })

    it('should bring a rider to a floor below their current floor', () => {
      elevator.pickUpRider(person, 0)
      assert.deepEqual(elevator.riders, [person])
      assert.equal(elevator.totalFloors, 4)
      assert.equal(elevator.totalStopsMade, 2)
      assert.equal(elevator.status, 'idle')
      assert.equal(elevator.currentFloor, 0)
    })
  })
})

describe('Person', function() {
  const person = new Person("Hilary", 2)

  it('should have a person with a name and current floor', () => {
    assert.deepEqual(person.name, 'Hilary')
    assert.equal(person.currentFloor, 2)
  })
})
