function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  let totalScore = 0;
  let pass = 0;
  let fail = 0;

  if (marks.length === 0) {
    return {
      finalScore: 0,
      pass: 0,
      fail: 0,
    };
  }

  for (const mark of marks) {
    totalScore = totalScore + mark;
    if (mark >= 40) {
      pass++;
    } else {
      fail++;
    }
  }

  const average = totalScore / marks.length;
  const roundedAverage = Math.round(average);

  return {
    finalScore: roundedAverage,
    pass: pass,
    fail: fail,
  };
}

console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12, 87]));
console.log(resultReport(100));