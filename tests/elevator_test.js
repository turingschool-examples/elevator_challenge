const Elevator = require('../elevator');

describe('Elevator', function() {
  let elevator = new Elevator();

  afterEach(function() {
    elevator.reset();
  });

  it('should bring a rider to a floor above their current floor', () => {
    let mockUser = { name: "Brittany", currentFloor: 2, dropOffFloor: 5 };
    elevator.goToFloor(mockUser);

    assert(elevator.currentFloor).equals(5);
    assert(elevator.motionStatus).equals('idle');
    assert(elevator.getStops()).equals([2, 5]);
  });

  it('should bring a rider to a floor below their current floor', () => {
    let mockUser = { name: "Brittany", currentFloor: 8, dropOffFloor: 3 };
    elevator.goToFloor(mockUser);

    assert(elevator.currentFloor).equals(3);
    assert(elevator.motionStatus).equals('idle');
    assert(elevator.getStops()).equals([8, 3]);
  });
});
