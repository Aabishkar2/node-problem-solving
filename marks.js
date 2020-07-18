const data = [
  {
    id: 1,
    marks: 5,
    subQuestion: [
      {
        id: 2,
        marks: 6,
        subQuestion: [
          {
            id: 3,
            marks: 8,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    marks: 7,
    subQuestion: [
      {
        id: 5,
        marks: 6,
        subQuestion: [
          {
            id: 6,
            marks: 3,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    marks: 5,
    subQuestion: [
      {
        id: 8,
        marks: 6,
        subQuestion: [
          {
            id: 3,
          },
        ],
      },
    ],
  },
];

// function getTotalMarks(data, marks) {
//   if (data.marks) {
//     marks += data.marks;
//   }
//   if (data.subQuestion) {
//     return getTotalMarks(data.subQuestion, marks);
//   }
//   return marks;
// }

function getTotalMarks(arr) {
  const result = arr.reduce((totalMarks, curr) => {
    if (curr.marks) {
      totalMarks += curr.marks;
    }
    if (curr.subQuestion) {
      totalMarks += getTotalMarks(curr.subQuestion);
    }
    return totalMarks;
  }, 0);
  return result;
}

// const result = data.reduce((totalMarks, curr) => {
//   totalMarks += getTotalMarks(curr, totalMarks);
//   return totalMarks;
// }, 0);

// console.log(result);
console.log(getTotalMarks(data));
