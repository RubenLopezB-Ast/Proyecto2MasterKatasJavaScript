const approvedScore = exams
  .filter(exam => exam.score >= 5)
  .reduce((acc, exam) => acc + exam.score, 0);

console.log(approvedScore); 