// const birthdayProblem = (arr) => {
//   const largestNumber = arr.reduce((value, curr) => {
//     if (curr > value) {
//       value = curr;
//     }
//     return value;
//   }, 0);
//   const occuranceCount = arr.reduce((count, val) => {
//     if (val == largestNumber) {
//       count += 1;
//     }
//     return count;
//   }, 0);
//   //   console.log(occuranceCount);
// };

// birthdayProblem([1, 5, 6, 8, 8, 3]);

const birthdayProblem2 = (arr) => {
  const result = arr.reduce(
    (value, curr) => {
      let max = Math.max(value[0], curr);
      let count = value[1];
      if (max == curr && max !== value[0]) {
        count = 1;
      } else if (max == curr && max == value[0]) {
        count += 1;
      } else {
        count = count;
      }
      return [max, count];
    },
    [0, 0]
  );
  return result;
};

console.log(birthdayProblem2([8, 5, 6, 8, 3]));
