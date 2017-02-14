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

    if(destination === person.currentFloor || destination < 0) return

    this.requests.push({
                    name: person.name,
                    currentFloor: person.currentFloor,
                    destination })

    this.requestCount++
    
    if(this.requests.length) {
      this.moveToCurrentFloor()
    }
  }

  moveToCurrentFloor() {
    const request = this.requests[0]
    this.calcTraversedFloors(request.currentFloor)
    this.state = 'moving'
    this.currentFloor = request.currentFloor
    this.pickUp(request)
  }

  pickUp(request) {
    this.stops++
    this.riders.push(request)
    this.state = 'idle'
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
    this.stops++
    this.state = 'idle'
  }

  calcTraversedFloors(floorType) {
    const traversed = Math.abs(this.currentFloor - floorType)
    this.floors += traversed
  }

  reset() {
    this.constructor()
  }
}
