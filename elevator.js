export default class Elevator {
  constructor() {
    this.state = 'idle'; //moving or broken
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
    console.log('rider', rider.currentFloor);
    this.floors = Math.abs(rider.currentFloor)
    this.state = 'moving'
    this.pickup(rider)
  }

  pickup(rider){
    this.floors = this.floors + Math.abs(this.floors - this.requests[0][rider.name])
    this.stops += 1
    this.dropoff(rider)
  }

  dropoff(rider){
    this.stops += 1
    this.state = 'idle'
    this.currentFloor = this.requests[0][rider.name]
  }
}
