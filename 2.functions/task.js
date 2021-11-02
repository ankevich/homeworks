// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  for (i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  for (i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  avg = Math.round((sum / arr.length) * 100) / 100;

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);

  for (j = 0; j < arrOfArr.length; j++) {
    let sum = func(arrOfArr[j]);
    if (max < sum) {
      max = sum;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  for (i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return max-min
}
