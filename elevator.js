export default class Elevator {
  constructor() {
    this.currentFloor = 0
    this.state = 'idle'
    this.stops = 0
    this.floors = 0
    this.riders = []
  }

  requestElevator(person, currentFloor, requestedFloor) {
    this.state = 'moving'
    this.currentFloor = person.currentFloor
    this.stops = this.stops + 1
    this.riders.push(person)
  }

  requestFloor(person, currentFloor, requestedFloor) {
  }

  reset() {
    this.constructor()
  }
}
