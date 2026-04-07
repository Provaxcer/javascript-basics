const student1 = {
  name: "Arjun",
  age: 17,
  scores: [85, 72, 90, 65, 80]
};

const student2 = {
  name: "Priya",
  age: 16,
  scores: [55, 60, 48, 70, 52]
};

const student3 = {
  name: "Gojo",
  age: 22,
  scores: [67, 55, 80, 45, 70]
};

function getAverage(scores) {
  const total = scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return total / scores.length;
}

// captured the avg score number
const avg1 = getAverage(student1.scores);
const avg2 = getAverage(student2.scores);
const avg3 = getAverage(student3.scores);

function grade(num) {
  if (num >= 90) {
    return "A"
  }
  else if (num >= 75 && num <= 89) {
    return "B"
  }
  else if (num >= 60 && num <= 74) {
    return "C"
  }
  else {
    return "F"
  }
}

// here is the grade letters
const grade1 = grade(avg1);
const grade2 = grade(avg2);
const grade3 = grade(avg3);

const { name: name1, scores: scores1 } = student1;
const { name: name2, scores: scores2 } = student2;
const { name: name3, scores: scores3 } = student3;

console.log(`Student: ${name1}\nAverage Score: ${avg1}\nGrade: ${grade1}`);
console.log(`Student: ${name2}\nAverage Score: ${avg2}\nGrade: ${grade2}`);
console.log(`Student: ${name3}\nAverage Score: ${avg3}\nGrade: ${grade3}`);
