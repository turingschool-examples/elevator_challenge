export default class Elevator {
  constructor() {
    this.currentFloor = 0
    this.floors = 0
    this.stops = 0
    this.requests = []
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

    //this conditional is temporary
    if(this.requests.length === 1) {
      this.moveToCurrentFloor()
    }
  }

  moveToCurrentFloor() {
    const request = this.requests[0]
    this.calcTraversedFloors(request.currentFloor)
    this.status = 'moving'
    this.currentFloor = request.currentFloor
    this.pickUp(request)
  }

  pickUp(request) {
    this.stops++
    this.riders.push(request)
    this.status = 'idle'
    this.moveToDestination(request)
  }

  moveToDestination(request) {
    this.status = 'moving'
    this.calcTraversedFloors(request.destination)
    this.currentFloor = request.destination
    this.dropOff(request)
  }

  dropOff(request) {
    this.riders.shift()
    this.stops++
    this.status = 'idle'
  }

  calcTraversedFloors(floorType) {
    const traversed = Math.abs(this.currentFloor - floorType)
    this.floors += traversed
  }

  reset() {
    this.constructor()
  }
}
