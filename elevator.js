export default class Elevator {
  constructor() {
    this.state = 'idle';
    this.currentFloor = 0;
    this.riders = [];
    this.requests = [];
    this.floors = 0
    this.stops = 0
  }

  reset() {
    this.constructor()
  }

  requestFloor(rider, floor) {
    this.riders.push(rider)
    let newRequest = Object.assign({}, {[rider.name]: floor})
    this.requests.push(newRequest)
    this.state = 'idle'
    this.activateElevator(rider)
  }

  activateElevator(rider) {
    this.state = 'moving'
    this.pickup(rider)
    this.dropoff(rider)
    this.requests.shift()
    this.riders.shift()
    this.requests.length > 0 && this.activateElevator
  }

  pickup(rider){
    this.floors += Math.abs(rider.currentFloor - this.currentFloor)
    this.stops += 1
  }

  dropoff(rider){
    this.state = 'idle'
    this.floors += Math.abs(rider.currentFloor - this.requests[0][rider.name])
    this.stops += 1
    this.currentFloor = this.requests[0][rider.name]
  }
}
