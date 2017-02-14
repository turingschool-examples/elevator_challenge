export default class Elevator {
  constructor(currentFloor) {
    this.currentFloor = 0
    this.status = 'idle' || 'moving' || 'broken'
    this.totalStopsMade = 0
    this.totalFloorsTransversed = 0
    this.requests = []
    this.riders = []
  }

  requestElevator(person) {
    this.state = 'moving'
    this.currentFloor = person.currentFloor
    this.stops = this.stops + 1
    this.riders.push(person)
    this.requestFloor(person)
  }

  requestFloor(person, requestedFloor) {
    this.currentFloor = person.requestedFloor
    this.state = 'idle'
    this.stops = this.stops + 1
    this.floors = person.requestedFloor
  }

  reset() {
    this.constructor()
  }
}
