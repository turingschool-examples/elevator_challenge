# Elevator Challenge

## Description
For this challenge, you will be implementing Javascript code to represent an elevator picking up various people throughout a day. While it may seem trivial, you will quickly find out all the nuances of the elevator world and be marveled that they work as well as they do. You cannot move on to the next Level unless you have completed the current Level (or made a valiant effort).

We will focus heavily on TDDing and writing super clean code. This project is not graded but you will be presenting your work to a panel of expert elevator code engineers to judge you on your logic decisions and Javascript style.  The panel will declare a winner based on the following criteria:
* Code Quality
* Robustness of test suite
* Efficiency of elevator algorithm
* Number of Levels completed

Fabulous prizes will be showered on said winner.

### Level 0
* Pencil and paper out the elevator process. What kinds of things do you need to keep track of? What is a modern elevator's pickup and drop off strategy?

### Level 1
* Build two Javascript classes - Elevator and Person. A
person should be able to request a drop off floor to the elevator. The elevator should be able to pick up the person on their current floor and drop them off on the requested floor.
* Elevator properties:
  * When a class of Elevator is instantiated, it should start on floor 0 (lobby).
  * It should be able to keep track of it's current floor.
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
  * Both tests should assert total number of stops and floors the elevator traversed.
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
  * All four tests should assert total number of stops and floors the elevator traversed.
  * All four tests should assert the total number of requests and current riders.

### Level 5
* Create a git hook at the commit-msg hook to check that all commit messages include 'Level x', where x is the level number you working on.

### Level 6
* Have the elevator return to floor 0 (lobby) if there are no current riders in the elevator and the current time is before 12:00 p.m.
* Have the elevator stay on current floor of last drop off if there are no current riders in the elevator and the current time is after 12:00 p.m.

### Level 7
* Create a more efficient algorithm for pickups and drop offs. Whatever algorithm you chose needs to be tested against the same four Level 4 situations and show for each situation the elevator traversed less total floors.

### Level 8
* If the elevator holds more than 4 riders at any given time, change the status of the elevator to 'broken'.

### Level 9
* Create a DOM representation of the elevator and people to visualize the elevator process.

### Level 10
* Replace all insertions and deletions of requests and current riders with API calls to a Node/Express backend with the correct CRUD methods.
