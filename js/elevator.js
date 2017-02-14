export default class Elevator {
  constructor() {
    this.currentFloor = 0
    this.floors = 0
    this.stops = 0
    this.requests = []
    this.requestCount = 0
    this.riders = []
    this.state = 'idle'
  }

  addRequest(person, destination) {
    if(typeof destination !== 'number') {
      throw new Error('ERROR: please enter a valid desination')
    }

    this.requestCount++
    this.moveToCurrentFloor(person, destination)
  }

  moveToCurrentFloor(person, destination) {
    this.state = 'moving'
    this.calcTraversedFloors(person.currentFloor)
    this.currentFloor = person.currentFloor
    this.increaseStops()
    this.state = 'idle'
    this.pickUp(person, destination)
  }

  pickUp(person, destination) {
    if(destination === person.currentFloor || destination < 0) return
    this.addRequestToQueue(person, destination)
    const request = this.requests[0]
    this.riders.push(request)
    this.moveToDestination(request)
  }

  moveToDestination(request) {
    this.state = 'moving'
    this.calcTraversedFloors(request.destination)
    this.currentFloor = request.destination
    this.dropOff(request)
  }

  dropOff(request) {
    this.riders.shift()
    this.requests.shift()
    this.increaseStops()
    this.state = 'idle'
  }

  addRequestToQueue(person, destination) {
    this.requests.push({
      name: person.name,
      currentFloor: person.currentFloor,
      destination })
  }

  increaseStops() {
    this.stops++
  }

  calcTraversedFloors(floorType) {
    const traversed = Math.abs(this.currentFloor - floorType)
    this.floors += traversed
  }

  reset() {
    this.constructor()
  }
}
