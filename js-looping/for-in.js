const users = {
  user1: {
    name: "Peter",
    age: 29,
    location: "Tokio",
    hobbies: ["coding", "running"],
  },
  user2: {
    name: "Anna",
    age: 32,
    location: "London",
    hobbies: ["reading", "traveling"],
  },
  user3: {
    name: "Tom",
    age: 27,
    location: "New York",
    hobbies: ["photography", "gaming"],
  },
};

for (let user in users) {
  console.log(`Details for ${user}:`);

  // Nested for...in to iterate over properties of each user
  for (let property in users[user]) {
    const value = users[user][property];

    // Check if the property is an array (e.g., hobbies) and handle it
    if (Array.isArray(value)) {
      console.log(`${property}: ${value.join(", ")}`);
    } else {
      console.log(`${property}: ${value}`);
    }
  }

  console.log("---");
}

/* Output:
Details for user1:
name: Peter
age: 29
location: Tokio
hobbies: coding, running
---
Details for user2:
name: Anna
age: 32
location: London
hobbies: reading, traveling
---
Details for user3:
name: Tom
age: 27
location: New York
hobbies: photography, gaming
---
*/
