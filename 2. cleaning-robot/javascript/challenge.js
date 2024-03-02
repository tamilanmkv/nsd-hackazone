// Robot controller implementation

import { robotControl, Direction } from "./robot-api.js";

const rc = robotControl("../resources/room-layout-1.txt");
const api = rc.robotApi;
cleanRooms(api);
rc.evaluateResult();

// Robot API
//
// api.move(); // move robot one step forward
// api.turnLeft(); // turn robot 90 degrees to the left
// api.turnRight(); // turn robot 90 degrees to the right
// api.getDirection(); // return the current direction, e.g. Direction.RIGHT
// api.isBarrierAhead(); // true -> barrier ahead
// api.getPosition(); // returns the current robot position, e.g. { x: 1, y: 2 }
// api.getPositionAhead(); // returns the position in front of the robot, doesn't check if a barrier
// //write the code to clean the room

function checkTurnRight(api) {
  while (true) {
    if (!api.isBarrierAhead()) {
      api.turnRight();
      if (api.isBarrierAhead()) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
}

function checkTurnLeft(api) {
  while (true) {
    if (api.isBarrierAhead()) {
      api.turnLeft();
    }
    return false;
  }
}

function checkMove(api) {
  while (true) {
    if (!api.isBarrierAhead()) {
      api.move();
      if (api.isBarrierAhead()) {
        console.log(api.getPosition());
        break;
      }
    }
    break;
  }
}

function cleanRooms(api) {
  while (true) {
    if (!api.isBarrierAhead()) {
      checkMove(api);
    }
    if (checkTurnRight(api)) {
      if (!api.isBarrierAhead()) {
        checkMove(api);
      }
    } else if (checkTurnLeft(api)) {
      if (!api.isBarrierAhead()) {
        checkMove(api);
      }
    }
  }
}

function testCondtion(api) {
  api.move(); // move robot one step forward
  api.turnLeft(); // turn robot 90 degrees to the left
  api.turnLeft(); // turn robot 90 degrees to the left
  // api.turnRight(); // turn robot 90 degrees to the right
  api.move(); // move robot one step forward
  api.move(); // move robot one step forward
  api.move(); // move robot one step forward
  api.move(); // move robot one step forward
  console.log(api.isBarrierAhead()); // true -> barrier ahead, api.isBarrierAhead();
  const position = api.getPosition();
  console.log(position);
}

// without any movie position is { x: 8, y: 0 }
/* 
XXX....R 
XXX.....
XXX.....
........
........
*/
