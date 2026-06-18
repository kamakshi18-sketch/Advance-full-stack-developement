
//1. ans-20


//2. ans- refrence error


//3. Create a nested function structure of 4 levels and print variables from all parent scopes. 
function level1() {
    let a = "1";
    function level2() {
        let b = "2";
        function level3() {
            let c = "3";
            function level4() {
                let d = "4";
                console.log(a); 
                console.log(b);
                console.log(c);
                console.log(d);
            }   
            level4();
        }   
        level3();
    }
    level2();
}
level1();



//4. Write a function that returns another function and demonstrates lexical scope. 
function outer() {
    let outerVar = "outer function";
    function inner() {
        console.log(outerVar); 
    }
    return inner;
}

const Innerfunction = outer();
Innerfunction();



//5. ans- undefined



//6.Create a function where a child function can access grandparent variables.
function grandparent() {
    let grandparentVar = "grandparent variable";
    function parent() {
        let parentVar = "parent variable";
        function child() {
            console.log(grandparentVar); 
            console.log(parentVar); 
        }
        child();
    }
    parent();
}
grandparent();



//7. ans- "Mohan"



//8.Create a 3-level nested function and access all variables inside the innermost function. 
function level1() {
    let a = "1";
    function level2() {
        let b = "2";
        function level3() {
            let c = "3";
            console.log(a); 
            console.log(b);
            console.log(c);
        }
        level3();
    }
    level2();
}
level1();       



//9. Can a parent access a child variable? Demonstrate using code. 
function parent() {
    let parentVar = "parent variable";
    function child() {
        let childVar = "child variable";
        console.log(parentVar); 
    }
    child();
    console.log(childVar); 
}
parent();



//10.Create a private variable using lexical scope. 
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
const counter = createCounter();
console.log(counter()); 
console.log(counter()); 
console.log(counter());



//11.Create a counter closure.  Output:  1  2  3 
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
const counter = createCounter();
console.log(counter()); 
console.log(counter()); 
console.log(counter());



//14. Remember Username Forever
function user(name) {
  return function () {
    return name;
  };
}
const getUser = user("Kamakshi");
console.log(getUser());



//15. Login Attempt Tracker
function loginTracker() {
  let attempts = 0;
  return function () {
    attempts++;
    if (attempts >= 3) {
      console.log("Account Locked");
    } else {
      console.log("Failed Attempt");
    }
  };
}
const login = loginTracker();
login();
login();
login();



//16. Secret Password
function passwordManager() {
  let password = "12345";
  return {
    getPassword() {
      return password;
    }
  };
}
const user = passwordManager();
console.log(user.getPassword());



//18. Voting Machine
function votingMachine() {
  let votedUsers = [];
  return function (name) {
    if (votedUsers.includes(name)) {
      console.log("Already Voted");
    } else {
      votedUsers.push(name);
      console.log("Vote Accepted");
    }
  };
}
const vote = votingMachine();
vote("Ram");
vote("Ram");



//19. Function Execution Counter
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const execute = counter();
console.log(execute());
console.log(execute());
console.log(execute());



//20. Expense Tracker
function expenseTracker() {
  let total = 0;
  return {
    addExpense(amount) {
      total += amount;
    },
    getTotal() {
      return total;
    }
  };
}
const expense = expenseTracker();
expense.addExpense(500);
expense.addExpense(300);
console.log(expense.getTotal());




//21. Welcome to JavaScript
(function () {
  console.log("Welcome to JavaScript");
})();



//22. Area of Rectangle
(function (length, width) {
  console.log(length * width);
})(10, 5);


//23. Arrow Function IIFE
(() => {
  console.log("Hello");
})();



//24. Private Variable using IIFE
const result = (function () {
  let secret = "Hidden";
  return {
    getSecret() {
      return secret;
    }
  };
})();
console.log(result.getSecret());



//25. Module Pattern using IIFE
const counter = (function () {
  let count = 0;
  return {
    increment() {
      count++;
      console.log(count);
    },
    decrement() {
      count--;
      console.log(count);
    },
    reset() {
      count = 0;
      console.log(count);
    }
  };
})();
counter.increment();
counter.decrement();
counter.reset();



//26. calculate(a,b,operation)
function calculate(a, b, operation) {
  return operation(a, b);
}
console.log(calculate(10, 5, (a, b) => a + b));
console.log(calculate(10, 5, (a, b) => a - b));
console.log(calculate(10, 5, (a, b) => a * b));
console.log(calculate(10, 5, (a, b) => a / b));



//27. repeat()
function repeat(times, fn) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}
function sayHello() {
  console.log("Hello");
}
repeat(5, sayHello);



//28. Logger HOF
function logger(message) {
  console.log(`[INFO] ${message}`);
}
logger("User Logged In");



//29. Function Execution Timer
function timer(fn) {
  const start = Date.now();
    fn();
        const end = Date.now();
            console.log("Execution Time:", end - start, "ms");
}
timer(() => {
  for (let i = 0; i < 1000000; i++) {}
});



//31. User Names
const users = [
  { name: "Ram", age: 25 },
  { name: "Mohan", age: 30 },
  { name: "Amit", age: 22 }
];
const names = users.map(user => user.name);
console.log(names);



//32. Square Numbers
const nums = [1, 2, 3, 4, 5];
const result = nums.map(num => num * num);
console.log(result);



//34. Even Numbers
const nums = [1, 2, 3, 4, 5, 6];
const even = nums.filter(num => num % 2 === 0);
console.log(even);



//35. Age Greater Than 25
const users = [
  { name: "Ram", age: 25 },
  { name: "Mohan", age: 30 },
  { name: "Amit", age: 22 }
];
const result = users.filter(user => user.age > 25);
console.log(result);



//37. Total Sum
const nums = [10, 20, 30, 40];
const total = nums.reduce((sum, num) => sum + num, 0);
console.log(total);



//38. Maximum Value
const nums = [5, 12, 3, 45, 2];
const max = nums.reduce((max, num) => {
  return max > num ? max : num;
});
console.log(max);



//39. Total Characters
const words = ["JavaScript", "React", "Node"];
const total = words.reduce((sum, word) => sum + word.length, 0);
console.log(total);



//40. Ultra Hard
const orders = [
  { id: 1, amount: 5000, status: "completed" },
  { id: 2, amount: 2000, status: "pending" },
  { id: 3, amount: 7000, status: "completed" },
  { id: 4, amount: 1000, status: "completed" }
];

const completedOrders = orders.filter(order => order.status === "completed");
const totalRevenue = completedOrders.reduce(
  (sum, order) => sum + order.amount,
  0
);
const averageRevenue = totalRevenue / completedOrders.length;
const highestOrder = completedOrders.reduce((max, order) =>
  max.amount > order.amount ? max : order
).amount;
const orderIds = completedOrders.map(order => order.id);
console.log(completedOrders);
console.log(totalRevenue);
console.log(averageRevenue);
console.log(highestOrder);
console.log(orderIds);
