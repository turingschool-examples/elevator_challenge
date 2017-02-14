export default class Elevator {
  constructor(currentFloor) {
    this.currentFloor = 0
    this.status = 'idle' || 'moving' || 'broken'
    this.totalStopsMade = 0
    this.totalFloors = 0
    this.requests = []
    this.riders = []
  }

  pickUpRider(person, requestedFloor) {
    this.addTotalFloors(person.currentFloor)
    this.status = 'moving'
    this.addStop()
    this.currentFloor = person.currentFloor
    this.riders.push(person)
    // this.currentFloor = person.currentFloor
    // this.stops = this.stops + 1
    // this.requestFloor(person, requestedFloor)
  }

  requestFloor(person, requestedFloor) {
    this.state = 'moving'
    this.currentFloor = person.currentFloor
    this.status = 'idle'
    this.totalStopsMade = this.totalStopsMade + 1
    this.riders.push(person)
    this.state = 'moving'
    this.currentFloor = person.requestedFloor
    this.totalStopsMade = this.totalStopsMade + 1

    // this.floors = person.requestedFloor
  }

  addStop() {
    this.status = 'idle'
    this.totalStopsMade = this.totalStopsMade + 1
  }

  addTotalFloors(currentFloor) {
    this.totalFloors = this.totalFloors + Math.abs(this.currentFloor - currentFloor)
  }

  reset() {
    this.constructor()
  }
}
