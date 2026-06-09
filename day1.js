//1. Create a variable using const and store your college name. Print it.
const college = "Geeta University";
console.log(college);

//2. Create a variable using let and update its value three times.
let count = 1;
count = 2;
count = 3;
count = 4;
console.log(count);

//3. Show that let cannot be accessed outside a block.
{
    let message = "Hello";
    console.log(message);
}
console.log(message); // error

//4. Swap two numbers using array destructuring.
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);

//5. Arrow function to return cube of a number.
const cube = num => num ** 3;
console.log(cube(3));

//6. Arrow function to check even or odd.
const checkNumber = num =>
    num % 2 === 0 ? "Even" : "Odd";
console.log(checkNumber(7));

//7. Arrow function to find maximum of three numbers.
const maxNum = (a, b, c) => Math.max(a, b, c);
console.log(maxNum(10, 25, 15));

//8. Destructure first, second and remaining values.
const nums = [10, 20, 30, 40, 50];
const [first, second, ...remaining] = nums;
console.log(first);
console.log(second);
console.log(remaining);

//9. Function using template literals.
function userInfo(name, age) {
    return `Hello ${name}, you are ${age} years old.`;
}
console.log(userInfo("Ram", 25));

//10. Generate URL dynamically.
const id = 101;
const url = `/api/users/${id}`;
console.log(url);

//11. Destructure all properties of object.
const student = {
    name: "Ram",
    age: 25,
    course: "MERN"
};
const { name, age, course } = student;
console.log(name, age, course);

//12. Rename course to technology.
const student = {
    name: "Ram",
    age: 25,
    course: "MERN"
};
const { name, age, course: technology } = student;
console.log(name, age, technology);

//13. Function with default parameter.
function createUser(name, role = "Student") {
    return `${name} is a ${role}`;
}
console.log(createUser("Ram"));

//14. Calculator function with default operation.
function calculator(a, b, operation = "add") {
    if (operation === "add") {
        return a + b;
    }
    return a - b;
}
console.log(calculator(10, 5));

//15. Sum of unlimited numbers using Rest Operator.
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(10, 20, 30, 40));

//16. Find largest number using Rest Operator.
function largest(...numbers) {
    return Math.max(...numbers);
}
console.log(largest(10, 50, 30, 80));

//17. Merge two arrays using Spread Operator.
const frontend = ["HTML", "CSS"];
const backend = ["Node", "Express"];
const fullStack = [...frontend, ...backend];
console.log(fullStack);

//18. Copy an array and add one extra value.
const arr = [1, 2, 3];
const newArr = [...arr, 4];
console.log(newArr);

//19. Copy an object and update email.
const user = {
    name: "Ram",
    email: "old@gmail.com"
};
const updatedUser = {
    ...user,
    email: "new@gmail.com"
};
console.log(updatedUser);

//20. Add discount field using Spread Operator.
const product = {
    name: "Laptop",
    price: 50000
};
const newProduct = {
    ...product,
    discount: 10
};
console.log(newProduct);

//21. Use map() to return only names.
const users = [
    { name: "Ram", age: 25 },
    { name: "Mohan", age: 30 },
    { name: "Amit", age: 22 }
];
const names = users.map(user => user.name);
console.log(names);

//22. Use filter() to get age greater than 24.
const users = [
    { name: "Ram", age: 25 },
    { name: "Mohan", age: 30 },
    { name: "Amit", age: 22 }
];
const result = users.filter(user => user.age > 24);
console.log(result);

//23. Use reduce() to calculate total age.
const users = [
    { name: "Ram", age: 25 },
    { name: "Mohan", age: 30 },
    { name: "Amit", age: 22 }
];
const totalAge = users.reduce(
    (total, user) => total + user.age,
    0
);
console.log(totalAge);

//24. Create invoice using template literals.
function createInvoice(customerName, amount) {
    return `Customer: ${customerName}, Amount: rs.${amount}`;
}
console.log(createInvoice("Ram", 5000));

//25. Mini Challenge
const student = {
    name: "Ram",
    marks: [80, 90, 70, 85]
};
const { name, marks } = student;
const total = marks.reduce((sum, mark) => sum + mark, 0);
const average = total / marks.length;
console.log(`Student: ${name}`);
console.log(`Total: ${total}`);
console.log(`Average: ${average}`);

