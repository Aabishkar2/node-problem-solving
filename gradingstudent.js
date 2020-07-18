const grades = [73, 67, 38, 33];

const gradingStudent = (grades) => {
  const newGradeArr = grades.map((grade, index) => {
    if (grade > 37) {
      const ng = grade % 5;
      const newGrade = ng >= 3 ? grade + (5 - ng) : grade;
      return newGrade;
    }
    return grade;
  });
  return newGradeArr;
};

console.log(gradingStudent(grades));
