const students = [
  { name: "Santanu", marks: 75 },
  { name: "Raj", marks: 45 },
  { name: "Priya", marks: 90 },
  { name: "Amit", marks: 55 }
];

function totalMarks(students) {
  return students.reduce((acc, curr) => acc + curr.marks, 0);
}

console.log(totalMarks(students));