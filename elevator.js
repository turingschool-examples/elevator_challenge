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
    var floor = person.currentFloor
    this.addTotalFloors(floor)
    this.status = 'moving'
    this.addStop()
    this.currentFloor = floor
    this.riders.push(person)
    this.requestFloor(person, requestedFloor)
  }

  requestFloor(person, requestedFloor) {
    this.requests.push({
      name: person.name,
      currentFloor: person.currentFloor,
      requestedFloor,
    })
    var floor = this.requests[0].requestedFloor
    this.addTotalFloors(floor)
    this.state = 'moving'
    this.addStop()
    this.currentFloor = floor
  }

  addStop() {
    this.status = 'idle'
    this.totalStopsMade = this.totalStopsMade + 1
  }

  addTotalFloors(floor) {
    this.totalFloors += Math.abs(this.currentFloor - floor)
  }

  reset() {
    this.constructor()
  }
}
