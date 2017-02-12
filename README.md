# Elevator Challenge

## Description


### Level 1
* Build two Javascript classes - Elevator and Person. A
person should be able to request a drop off floor to the elevator. The elevator should be able to pick up the person on their current floor and drop them off on the requested floor.
* Elevator properties:
  * It should be able to keep track of how many total floors it has traversed and how many total stops it has made.
  * It should store a collection of requests and a collection of current riders on the elevator.
  * It has one of three statuses at any given moment: "idle", "moving", and "broken".
* Person properties:
  * Name
  * Current floor

### Level 2
* Create a test suite that tests the following scenarios:
  * Person A goes up.
  * Person A goes down.
  * Both tests should assert total number of stops and floors the elevator tailed.
  * There should also be a unit test for every Elevator method.

### Level 3
* Create the ability for multiple people to request drop off floors. The elevator should pick up and drop off each person in order of the requests. For example:
  * Bob is on floor 3 and requests to go to floor 9.
  * Sue is on floor 6 and requests to go to floor 2.
  * The elevator will pick up Bob, drop him off on floor 9, then pick up Sue and drop her off on floor 2.

### Level 4
* Add to your test suite that tests the following scenarios with the assumption that Person A sends an elevator request before Person B:
  *  Person A goes up, Person B goes up.
  *  Person A goes up, Person B goes down.
  *  Person A goes down, Person B goes up.
  *  Person A goes down, Person B goes down.
  * All four tests should assert total number of stops and floors the elevator tailed.
  * All four tests should assert the total number of requests and current riders.
