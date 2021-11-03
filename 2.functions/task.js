// Задание 1
function getArrayParams(arr) {
  const min = arr.reduce((prev, x) => prev < x ? prev : x, arr[0])
  const max = arr.reduce((prev, x) => prev > x ? prev : x, arr[0])
  const sum = arr.reduce((prev, x) => prev + x, 0)
  const avg = Math.round((sum / arr.length) * 100) / 100;

  return { min: min, max: max, avg: avg };
}

// Задание 2
const worker = (arr) => arr.reduce((prev, x) => prev + x, 0)


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
  const min = arr.reduce((prev, x) => prev < x ? prev : x, arr[0])
  const max = arr.reduce((prev, x) => prev > x ? prev : x, arr[0])

  return max-min
}
