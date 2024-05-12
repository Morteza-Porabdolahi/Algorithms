const THREAD_COUNT = 4;
import { Worker } from 'worker_threads';

function createWorker() {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', {
      workerData: { thread_count: THREAD_COUNT },
    });

    worker.on('message', (data) => {
      resolve(data);
    })
    worker.on('error', (e) => {
      reject(e);
    })
  })
}

(async function() {
  try {
    const workerPromises = [];

    for (let i = 0; i < THREAD_COUNT - 1; i++) {
      workerPromises.push(createWorker())
    }

    const workerResults = await Promise.all(workerPromises);
    calculatePI(workerResults);
  } catch (e) {
    console.log(e)
  }
})()

function calculatePI(workerResults) {
  let totalPoints = 0,
  innerPoints = 0;

  for(let value of workerResults) {
    totalPoints += value.totalPoints;
    innerPoints += value.innerPoints;
  }

  console.log(4 * (innerPoints / totalPoints))
}
