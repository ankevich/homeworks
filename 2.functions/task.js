// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  max = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  sum = 0;
  
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  avg = Math.round(sum / arr.length * 100) / 100;

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...

  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
