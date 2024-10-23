const company = {
  departments: [
    {
      name: "Engineering",
      employees: [
        { id: 1, name: "Alice", salary: 70000 },
        { id: 2, name: "Bob", salary: 90000 },
        { id: 3, name: "Charlie", salary: 120000 },
      ],
    },
    {
      name: "Marketing",
      employees: [
        { id: 4, name: "Dave", salary: 50000 },
        { id: 5, name: "Eve", salary: 60000 },
      ],
    },
    {
      name: "Sales",
      employees: [
        { id: 6, name: "Frank", salary: 45000 },
        { id: 7, name: "Grace", salary: 70000 },
      ],
    },
  ],
};

const salaryThreshold = 60000;

// Loop through each department
company.departments.forEach((department) => {
  console.log(`Department: ${department.name}`);

  let totalSalary = 0;
  let highEarners = [];

  // Nested .forEach() to loop through each employee in the department
  department.employees.forEach((employee) => {
    // Add employee's salary to the total for the department
    totalSalary += employee.salary;

    // Check if the employee's salary is above the threshold
    if (employee.salary > salaryThreshold) {
      highEarners.push(employee.name); // Add the employee to the high earners list
    }

    // Log each employee's details
    console.log(`  Employee: ${employee.name}, Salary: $${employee.salary}`);
  });

  // Log the total salary for the department
  console.log(`  Total Salary for ${department.name}: $${totalSalary}`);

  // Log the high earners for the department
  if (highEarners.length > 0) {
    console.log(
      `  Employees earning more than $${salaryThreshold}: ${highEarners.join(
        ", "
      )}`
    );
  } else {
    console.log(`  No employees earn more than $${salaryThreshold}`);
  }

  console.log("---");
});

/* Output:
Department: Engineering
  Employee: Alice, Salary: $70000
  Employee: Bob, Salary: $90000
  Employee: Charlie, Salary: $120000
  Total Salary for Engineering: $280000
  Employees earning more than $60000: Alice, Bob, Charlie
---
Department: Marketing
  Employee: Dave, Salary: $50000
  Employee: Eve, Salary: $60000
  Total Salary for Marketing: $110000
  No employees earn more than $60000
---
Department: Sales
  Employee: Frank, Salary: $45000
  Employee: Grace, Salary: $70000
  Total Salary for Sales: $115000
  Employees earning more than $60000: Grace
---
*/
