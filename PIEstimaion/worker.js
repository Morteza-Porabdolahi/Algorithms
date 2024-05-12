import { parentPort, workerData } from 'worker_threads';
import { getRandomNumber } from "./utils.js";

let totalPoints = 0, innerPoints = 0;

(function() {
  let currentPoint = [0, 0],
    currentX = 0,
    currentY = 0;

  while (totalPoints <= 1_000_000_000_000 / workerData.thread_count) {
    currentX = getRandomNumber() * 2 - 1;
    currentY = getRandomNumber() * 2 - 1;

    currentPoint = [currentX, currentY];
    totalPoints++;

    if (Math.sqrt(Math.pow(currentX, 2) + Math.pow(currentY, 2)) <= 1) {
      innerPoints++;
    }
  }
})();

parentPort.postMessage({ innerPoints, totalPoints })
