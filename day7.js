//Q1
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello World");
    }, 2000);
});
promise.then(console.log);

//Q2
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Server Down");
    }, 3000);
});
promise.catch(console.log);

//Q3
const promise = new Promise((resolve, reject) => {
    Math.random() > 0.5
        ? resolve("Success")
        : reject("Failed");
});
promise.then(console.log).catch(console.log);

//Q4
function checkAge(age) {
    return new Promise((resolve, reject) => {
        age >= 18
            ? resolve("Eligible")
            : reject("Not Eligible");
    });
}
checkAge(20).then(console.log).catch(console.log);

//Q5
function validatePassword(password) {
    return new Promise((resolve, reject) => {
        password.length >= 8
            ? resolve("Valid Password")
            : reject("Password Too Short");
    });
}

//Q6
function validateEmail(email) {
    return new Promise((resolve, reject) => {
        email.includes("@")
            ? resolve("Valid Email")
            : reject("Invalid Email");
    });
}

//Q7
function withdraw(balance, amount) {
    return new Promise((resolve, reject) => {
        balance >= amount
            ? resolve("Withdrawal Successful")
            : reject("Insufficient Balance");
    });
}

//Q9
const promise = Promise.resolve({
    id: 1,
    name: "Ram"
});
promise.then(console.log);

//Q10
const promise = Promise.reject({
    code: 500,
    message: "Server Error"
});
promise.catch(console.log);

//Q11
Promise.resolve(10)
.then(num => num * 2)
.then(num => num * 2)
.then(num => num * 2)
.then(console.log);

//Q12
Promise.resolve("Ram")
.then(name => name.toUpperCase())
.then(name => name + " MOHAN")
.then(name => name + " DIXIT")
.then(console.log);


//Q13
Promise.resolve(1000)
.then(price => price + 180)
.then(price => price - 100)
.then(console.log);

//Q14
Promise.resolve("Login")
.then(() => "Get User")
.then(() => "Get Orders")
.then(() => "Get Payment")
.then(console.log);

//Q15
Promise.resolve("Select Movie")
.then(() => "Choose Seat")
.then(() => "Make Payment")
.then(() => "Ticket Booked")
.then(console.log);

//Q16
Promise.resolve("Browse Menu")
.then(() => "Select Food")
.then(() => "Pay")
.then(() => "Order Confirmed")
.then(console.log);

//Q17
Promise.resolve("Apply")
.then(() => "Verify Documents")
.then(() => "Pay Fees")
.then(() => "Admission Confirmed")
.then(console.log);

//Q18
Promise.resolve("Search Train")
.then(() => "Select Seat")
.then(() => "Pay")
.then(() => "Ticket Booked")
.then(console.log);

//Q19
Promise.resolve()
.then(() => new Promise(r => setTimeout(() => r("Step 1"), 1000)))
.then(console.log)
.then(() => new Promise(r => setTimeout(() => r("Step 2"), 1000)))
.then(console.log);

//Q20
let p = Promise.resolve(0);
for(let i = 1; i <= 10; i++) {
    p = p.then(() => console.log(`Then ${i}`));
}

//Q21
Promise.resolve()
.then(() => {
    throw new Error("Oops");
})
.catch(err => console.log(err.message));

//Q22
Promise.resolve()
.then(() => console.log("1"))
.then(() => console.log("2"))
.then(() => {
    throw new Error("Error");
})
.then(() => console.log("Skipped"))
.catch(console.log);

//Q23
Promise.resolve("Step1")
.then(data => {
    console.log(data);
    return "Step2";
})
.then(data => {
    console.log(data);
    throw new Error("Error");
})
.catch(err => console.log(err.message));

//Q24
Promise.reject("Failed")
.catch(() => "Recovered")
.then(console.log);

//Q25
Promise.reject("Error")
.catch(err => {
    console.log("Catch 1");
    throw err;
})
.catch(() => console.log("Catch 2"));

//Q26
function greet(name) {
    return new Promise(resolve => {
        resolve(`Hello ${name}`);
    });
}

//Q27
function add(a, b) {
    return new Promise(resolve => {
        resolve(a + b);
    });
}

//Q29
function downloadFile() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Download Complete");
        }, 2000);
    });
}

//30
function getWeather() {
    return new Promise(resolve => {
        resolve("25°C Sunny");
    });
}

//31
Promise.all([
    Promise.resolve("User"),
    Promise.resolve("Orders"),
    Promise.resolve("Products")
]).then(console.log);

//Q33
Promise.all([
    Promise.resolve(1),
    Promise.reject("Failed"),
    Promise.resolve(3)
]).catch(console.log);

//Q34
Promise.all([
    Promise.resolve("Users"),
    Promise.resolve("Sales"),
    Promise.resolve("Revenue")
]).then(console.log);

//Q35
Promise.all([
    Promise.resolve("File1"),
    Promise.resolve("File2"),
    Promise.resolve("File3")
]).then(console.log);

//Q36
Promise.allSettled([
    Promise.resolve("A"),
    Promise.resolve("B"),
    Promise.resolve("C"),
    Promise.reject("D"),
    Promise.reject("E")
]).then(console.log);

//Q37
Promise.allSettled([
    Promise.resolve("Users"),
    Promise.reject("Orders Failed"),
    Promise.resolve("Products")
]).then(console.log);

//Q38
Promise.allSettled([
    Promise.resolve("Upload1"),
    Promise.reject("Upload2"),
    Promise.resolve("Upload3")
]).then(console.log);

//Q39
Promise.race([
    new Promise(r => setTimeout(() => r("Server1"), 5000)),
    new Promise(r => setTimeout(() => r("Server2"), 2000)),
    new Promise(r => setTimeout(() => r("Server3"), 1000))
]).then(console.log);

//Q39
Promise.any([
    Promise.reject("Server1"),
    Promise.reject("Server2"),
    Promise.resolve("Server3")
]).then(console.log);

//IQ1
//B
//A

//IQ2
//A
//C
//B

//IQ3
//25

//IQ5
//Boom

//IQ6
//100

//IQ7
//A
//B

//IQ8
//[1, 2, 3]
