export default class Elevator {
  constructor() {
    this.state = "idle",
    this.currentFloor = 0,
    this.requests = [],
    this.riders = [],
    this.stops = 0,
    this.floors = 0
  }

  reset() {
    this.constructor()
  }

  requestFloor(person, x, y) {
    this.requests.push({ person: person.name, pickUpFloor: x, dropOffFloor: y })
    if(this.state === "idle") {
      this.moveToFloor(person.currentFloor)
    }
  }

  moveToFloor(n) {
    while(n !== this.currentFloor) {
      this.floors += 1
      this.state === 'moving'
      n < this.currentFloor ? this.currentFloor -= 1 : this.currentFloor += 1
    }
    this.stop()
  }

  stop() {
    this.stops += 1
    this.state === 'idle'
    if(this.currentFloor === this.requests[0].pickUpFloor) return this.pickUpPerson()
    if(this.currentFloor === this.requests[0].dropOffFloor) return this.dropOffPerson()
  }

  pickUpPerson() {
    // console.log(`We have reached floor ${this.currentFloor}. Please enter the elevator`)
    this.riders.push(this.requests[0].person)
    this.moveToFloor(this.requests[0].dropOffFloor)
  }

  dropOffPerson() {
    // console.log(`We have reached floor ${this.currentFloor}. Please exit the elevator`)
    this.requests.shift()
    this.riders.shift()
    if(this.requests.length > 0) {
      this.moveToFloor(this.requests[0].pickUpFloor)
    }
  }
}
