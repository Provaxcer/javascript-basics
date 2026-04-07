const students = [
  { name: "Santanu", marks: 75 },
  { name: "Raj", marks: 45 },
  { name: "Priya", marks: 90 },
  { name: "Amit", marks: 55 }
];


function getPass(students) {
  return students.filter(({ marks }) => marks >= 60);
}

console.log(getPass(students));