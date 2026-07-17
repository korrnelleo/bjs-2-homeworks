function getArrayParams(...arr) {
  if (arr.length === 0) {
    console.log(0);
    return { length: 0 };
  }
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const average = arr.reduce((sum, current) => sum + current, 0) / arr.length;
  let avg = average.toFixed(2);
  return { min: min, max: max, avg: +avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((sum, current) => sum + current, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    if (arr[i] % 2 === 0) {
      sumEvenElement += sum;
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork(argOfArg, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < argOfArg.length; i++) {
    const result = func(...argOfArg[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}

const arr = [
  [10, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62],
];
