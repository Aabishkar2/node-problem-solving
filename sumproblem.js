const sumProblem = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  const maxElem = sortedArr.slice(1, arr.length);
  const minElem = sortedArr.slice(0, arr.length - 1);
  console.log(minElem);
  const [minSum, maxSum] = minElem.reduce(
    (result, curr, index) => {
      result[0] += curr;
      result[1] += maxElem[index];
      return result;
    },
    [0, 0]
  );
  console.log([minSum, maxSum]);
};

const arr = [1, 2, 5, 6, 3];
sumProblem(arr);
