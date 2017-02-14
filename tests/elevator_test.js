require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

const assert = require('chai').assert
const Elevator = require('../js/elevator').default
const Person = require('../js/person').default

describe('Elevator', function() {
  const elevator = new Elevator()

  afterEach(function() {
    elevator.reset();
  })

  describe('Level 1/2', () => {
    const floor = 4
    const alexander = new Person('Alexander', floor)
    it('should bring rider to their requested floor', () => {
      elevator.addRequest(alexander, 9)
      assert.equal(elevator.currentFloor, 9)
      assert.equal(elevator.floors, 9)
      assert.equal(elevator.stops, 2)
      assert.equal(elevator.state, 'idle')
      assert.equal(elevator.riders.length, 0)
      assert.equal(elevator.requestCount, 1)
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
      assert.equal(elevator.currentFloor, 33)
    })

    it('should end on the riders destination', () => {
      elevator.addRequest(alexander, 7)
      assert.equal(elevator.currentFloor, 7)
    })

    it('should not move floors if rider requests same floor', () => {
      elevator.addRequest(alexander, floor)
      assert.equal(elevator.requestCount, 1)
      assert.equal(elevator.stops, 1)
    })

    it('should not move floors if destination is less than lobby', () => {
      elevator.addRequest(alexander, -1)
      assert.equal(elevator.currentFloor, floor)
    })

    xit('should throw an error if destination is not a number', () => {
      //ERROR: throws error before assertion is made
      assert.throws(elevator.addRequest(alexander, '16'), Error, 'ERROR: please enter a valid desination');
    });
  })


  describe('Levels 3/4', () => {
    const alexander = new Person('Alexander', 4)
    const dobby = new Person('Dobby', 3)
    const blane = new Person('Blane', 30)
    const cleo = new Person('Cleo', 23)
    it('drop off first person before picking up second', () => {
      elevator.addRequest(alexander, 9)
      assert.equal(elevator.currentFloor, 9)
      elevator.addRequest(dobby, 6)
      assert.equal(elevator.stops, 4)
      assert.equal(elevator.floors, 18)
      assert.equal(elevator.requestCount, 2)
      assert.equal(elevator.currentFloor, 6)
    })

    it('should bring both riders to a floor below their current floor (correct order)', () => {
      elevator.addRequest(blane, 21)
      assert.equal(elevator.currentFloor, 21)
      assert.equal(elevator.requestCount, 1)
      elevator.addRequest(cleo, 16)
      assert.equal(elevator.currentFloor, 16)
      assert.equal(elevator.requestCount, 2)
      assert.equal(elevator.stops, 4)
      assert.equal(elevator.floors, 48)
    })

    it('should bring both riders to a floor above their current floor (correct order)', () => {
      elevator.addRequest(alexander, 25)
      assert.equal(elevator.currentFloor, 25)
      elevator.addRequest(dobby, 22)
      assert.equal(elevator.currentFloor, 22)
      assert.equal(elevator.requestCount, 2)
      assert.equal(elevator.stops, 4)
      assert.equal(elevator.floors, 66)
    })

    it('should drop off in correct order - Rider A goes up, B goes down', () => {
      elevator.addRequest(blane, 39)
      assert.equal(elevator.currentFloor, 39)
      assert.equal(elevator.requestCount, 1)
      elevator.addRequest(cleo, 11)
      assert.equal(elevator.currentFloor, 11)
      assert.equal(elevator.requestCount, 2)
      assert.equal(elevator.stops, 4)
      assert.equal(elevator.floors, 67)
    })

    it('should drop off in correct order - Rider A goes down, B goes up', () => {
      elevator.addRequest(blane, 0)
      assert.equal(elevator.currentFloor, 0)
      assert.equal(elevator.requestCount, 1)
      elevator.addRequest(cleo, 26)
      assert.equal(elevator.currentFloor, 26)
      assert.equal(elevator.requestCount, 2)
      assert.equal(elevator.stops, 4)
      assert.equal(elevator.floors, 86)
    })

    it('should only drop off B, A requests same floor', () => {
      elevator.addRequest(alexander, 4)
      assert.equal(elevator.currentFloor, 4)
      elevator.addRequest(dobby, 22)
      assert.equal(elevator.currentFloor, 22)
      assert.equal(elevator.requestCount, 2)
      assert.equal(elevator.stops, 3)
      assert.equal(elevator.floors, 24)
    })

    it('should only drop off A, B requests same floor', () => {
      elevator.addRequest(alexander, 0)
      assert.equal(elevator.currentFloor, 0)
      elevator.addRequest(dobby, 3)
      assert.equal(elevator.currentFloor, 3)
      assert.equal(elevator.requestCount, 2)
      assert.equal(elevator.stops, 3)
      assert.equal(elevator.floors, 11)
    })

    it('should not pick up any riders, they request same destination as current floor', () => {
      elevator.addRequest(alexander, 4)
      assert.equal(elevator.currentFloor, 4)
      elevator.addRequest(dobby, 3)
      assert.equal(elevator.currentFloor, 3)
      assert.equal(elevator.requestCount, 2)
      assert.equal(elevator.stops, 2)
      assert.equal(elevator.floors, 5)
    })

    it('should have an idle state after dropping off last rider', () => {
      elevator.addRequest(blane, 21)
      elevator.addRequest(cleo, 16)
      assert.equal(elevator.state, 'idle')
    })
  })
})
