const compareArrays = (arr1, arr2) =>
  arr1.length === arr2.length &&
  arr1.every((element, index) => element === arr2[index]);

const advancedFilter = (arr) =>
  arr
    .filter((item) => item % 3 === 0)
    .filter((item) => item > 0)
    .map((item) => item * 10);
