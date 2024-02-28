# Hackazone Cleaning Robot Challenge

![](robot-animated.gif)

**Table of Content**
<!-- TOC -->
* [Hackazone Cleaning Robot Challenge](#hackazone-cleaning-robot-challenge)
  * [Challenge Description](#challenge-description)
  * [Java](#java)
  * [JavaScript](#javascript)
  * [License](#license)
<!-- TOC -->

## Challenge Description

Your task is to implement a cleaning robot controller using a provided API.
The robot can only look one step ahead, move forward, and turn around.
At the beginning, the floor map is unknown to the robot; it could have several rooms and barriers.
The goal is to implement an algorithm that cleans all rooms.

Example room layouts (`X` = barrier, `R` = initial robot position, `.` = space to clean):

`src/main/resources/room-layout-1.txt`
```
XXX....R
XXX.....
XXX.....
........
........
```

`src/main/resources/room-layout-2.txt`
```
.....X....
R....X....
..........
.....X....
.....X....
```

The controller API is provided in Java and JavaScript, see below. Chose one of them.

## Java

Add your implementation to the file `src/main/java/Challenge.java`.

The robot API:
```java
public interface RobotApi {

    /**
     * Move the robot one cell straight forward in the current direction.
     * If the target cell is a barrier, the robot will not move forward.
     */
    void move();

    /**
     * Turn the robot 90 degrees to the left.
     */
    void turnLeft();

    /**
     * Turn the robot 90 degrees to the right.
     */
    void turnRight();

    /**
     * Return the current direction the robot is looking to.
     */
    Direction getDirection();

    /**
     * Check if there is a barrier in the next cell in front of the robot.
     * The area outside the layout map is always considered as a barrier.
     */
    boolean isBarrierAhead();

    /**
     * Return the current position of the robot.
     */
    Position getPosition();

    /**
     * Return the position in front of the robot.
     * This method doesn't check if this was a valid move.
     */
    Position getPositionAhead();
}
```

`Direction` is an enum

```java
public enum Direction {
    UP, RIGHT, DOWN, LEFT
}

```

`Position` is a record class with fields `x` and `y`.

Run your Java code:
```
cd src/main/java
javac -cp .\Hackathon-CleaningRobot-api.jar Challenge.java
java -cp ".\Hackathon-CleaningRobot-api.jar;." Challenge
```

## JavaScript

Add your implementation to the file `src/main/javascript/challenge.js`.

The robot API:
```javascript
api.move();             // move robot one step forward
api.turnLeft();         // turn robot 90 degrees to the left
api.turnRight();        // turn robot 90 degrees to the right
api.getDirection();     // return the current direction, e.g. Direction.RIGHT
api.isBarrierAhead();   // true -> barrier ahead
api.getPosition();      // returns the current robot position, e.g. { x: 1, y: 2 }
api.getPositionAhead(); // returns the position in front of the robot, doesn't check if a barrier
```

Run your JavaScript code:
```
cd src/main/javascript
node challenge.js
```

