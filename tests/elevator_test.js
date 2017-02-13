require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

const assert = require('chai').assert
const Elevator = require('../js/elevator').default
const Person = require('../js/person').default

describe('Elevator', function() {
  const elevator = new Elevator()
  const floor = 4
  const alexander = new Person('Alexander', floor)

  afterEach(function() {
    elevator.reset();
  })

  describe('Level 1/2', () => {
    it('should bring rider to their requested floor', () => {
      elevator.addRequest(alexander, 9)
      assert.equal(elevator.currentFloor, 9)
      assert.equal(elevator.floors, 9)
      assert.equal(elevator.stops, 2)
      assert.equal(elevator.state, 'idle')
      assert.equal(elevator.riders.length, 0)
      assert.equal(elevator.requests.length, 1)
    })


    it('should bring a rider to a floor above their current floor', () => {
      elevator.addRequest(alexander, 5)
      assert.equal(elevator.currentFloor, 5)
      assert.equal(elevator.state, 'idle')
      assert.equal(elevator.stops, 2)
      assert.equal(elevator.floors, 5)
    })

    it('should bring a rider to a floor below their current floor', () => {
      elevator.addRequest(alexander, 0)
      assert.equal(elevator.currentFloor, 0)
      assert.equal(elevator.state, 'idle')
      assert.equal(elevator.stops, 2)
      assert.equal(elevator.floors, 8)
    })

    it('should have an idle state after dropping off rider', () => {
      elevator.addRequest(alexander, 30)
      assert.equal(elevator.state, 'idle')
    })

    it('should stop correctly', () => {
      elevator.addRequest(alexander, 81)
      assert.equal(elevator.stops, 2)
    })

    it('should travel the correct number of floors', () => {
      elevator.addRequest(alexander, 33)
      assert.equal(elevator.floors, 33)
    })

    it('should end on the riders destination', () => {
      elevator.addRequest(alexander, 7)
      assert.equal(elevator.currentFloor, 7)
    })

    it('should not move floors if rider requests same floor', () => {
      elevator.addRequest(alexander, floor)
      assert.equal(elevator.requests, 0)
      assert.equal(elevator.stops, 0)
    })

    it('should not move floors if destination is less than lobby', () => {
      elevator.addRequest(alexander, -1)
      assert.equal(elevator.currentFloor, 0)
    })

    xit('should throw an error if destination is not a number', () => {
      assert.throws(elevator.addRequest(alexander, '16'), Error, 'ERROR: please enter a valid desination');
    });
  })
})
