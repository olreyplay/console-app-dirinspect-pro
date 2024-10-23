// Students array (list of student objects)
const students = [
  { id: 1, name: "Peter", courses: new Set(["Math", "Physics"]) },
  { id: 2, name: "Anna", courses: new Set(["Biology", "Chemistry"]) },
  { id: 3, name: "Tom", courses: new Set(["Literature", "Math"]) },
];

// Grades map (student ID mapped to their grades in courses)
const grades = new Map([
  [
    1,
    new Map([
      ["Math", "A"],
      ["Physics", "B"],
    ]),
  ],
  [
    2,
    new Map([
      ["Biology", "A+"],
      ["Chemistry", "A-"],
    ]),
  ],
  [
    3,
    new Map([
      ["Literature", "B+"],
      ["Math", "A"],
    ]),
  ],
]);

// Iterating over students using for...of
for (const student of students) {
  console.log(`Student: ${student.name}`);

  // Using for...of to iterate over the courses Set
  for (const course of student.courses) {
    console.log(`  Enrolled in: ${course}`);

    // Retrieving and logging the grade for the student in the specific course
    const studentGrades = grades.get(student.id);
    const grade = studentGrades ? studentGrades.get(course) : "No grade";
    console.log(`    Grade: ${grade}`);
  }
}
