//1
function greetUser(name, callback) {
    console.log("Hello " + name);
    callback(name);
}
function welcome(name) {
    console.log("Welcome " + name);
}
greetUser("Ram", welcome);


//2
function calculate(a, b, callback) {
    return callback(a, b);
}
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));


//3
function calculator(a, b, operation) {
    console.log(operation(a, b));
}
calculator(20, 10, (a, b) => a - b);
calculator(20, 10, (a, b) => a + b);


//4
function processStudent(student, callback) {
    callback(student);
}
const student = {
    name: "Ram",
    age: 20
};
processStudent(student, (s) => {
    console.log(`Name: ${s.name}`);
    console.log(`Age: ${s.age}`);
});


//5
function downloadFile(callback) {
    console.log("Downloading...");

    setTimeout(() => {
        console.log("File Downloaded");
        callback();
    }, 2000);
}
downloadFile(() => {
    console.log("Open File");
});


//6
function registerUser(callback) {
    console.log("User Registered");
    callback();
}
function sendEmail() {
    console.log("Welcome Email Sent");
}
registerUser(sendEmail);


//7
function placeOrder(callback) {
    console.log("Order Placed");
    callback();
}
function generateInvoice() {
    console.log("Invoice Generated");
}
placeOrder(generateInvoice);


//8
function fetchUser(callback) {
    setTimeout(() => {
        callback({
            name: "Ram",
            age: 21
        });
    }, 3000);
}
fetchUser((user) => {
    console.log(user);
});


//9
function verifyOTP(otp, callback) {
    if (otp === "1234") {
        callback(true);
    } else {
        callback(false);
    }
}
verifyOTP("1234", (result) => {
    console.log(result ? "OTP Verified" : "Invalid OTP");
});



//10
function login(username, password, callback) {
    if (username === "admin" && password === "123") {
        callback(true);
    } else {
        callback(false);
    }
}
login("admin", "123", (success) => {
    console.log(success ? "Login Successful" : "Login Failed");
});



//11 
// A
// C 
// B


//12
// 2
// 1


//13
// Start
// End
// Timeout


//14
for (let i = 5; i >= 1; i--) {
    setTimeout(() => {
        console.log(i);
    }, (5 - i) * 1000);
}
setTimeout(() => {
    console.log("Boom");
}, 5000);


//Q15 
let time = 10;
let bomb = setInterval(() => {
    console.log(time);
    if (time === 0) {
        console.log("BOOM!");
        clearInterval(bomb);
    }
    time--;
}, 1000);


//16
function greet(name) {
    setTimeout(() => {
        console.log("Hello " + name);
    }, 2000);
}
greet("Ram");


//17
setTimeout(() => {
    console.log("New Notification Received");
}, 3000);


//18
setTimeout(() => {
    document.querySelector("button").disabled = true;
}, 5000);


//19
console.log("Redirecting in 3 seconds...");
setTimeout(() => {
    console.log("Redirected");
}, 3000);


//20
function wait(seconds, callback) {
    setTimeout(callback, seconds * 1000);
}
wait(3, () => {
    console.log("Done");
});


//21
function login(cb) {
    setTimeout(() => {
        console.log("Login");
        cb();
    }, 1000);
}
function getUser(cb) {
    setTimeout(() => {
        console.log("Get User");
        cb();
    }, 1000);
}
function getOrders(cb) {
    setTimeout(() => {
        console.log("Get Orders");
        cb();
    }, 1000);
}
login(() => {
    getUser(() => {
        getOrders(() => {
            console.log("Show Orders");
        });
    });
});


//22
setTimeout(() => {
    console.log("Level 1");
    setTimeout(() => {
        console.log("Level 2");
        setTimeout(() => {
            console.log("Level 3");
            setTimeout(() => {
                console.log("Level 4");
                setTimeout(() => {
                    console.log("Level 5");
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


//23 
console.log("Order");
setTimeout(() => {
    console.log("Cook");
    setTimeout(() => {
        console.log("Pack");
        setTimeout(() => {
            console.log("Deliver");
        }, 1000);
    }, 1000);
}, 1000);


//24 
console.log("Registration");
setTimeout(() => {
    console.log("Doctor");
    setTimeout(() => {
        console.log("Test");
        setTimeout(() => {
            console.log("Medicine");
        }, 1000);
    }, 1000);
}, 1000);


//25 
console.log("Form");
setTimeout(() => {
    console.log("Verification");
    setTimeout(() => {
        console.log("Payment");
        setTimeout(() => {
            console.log("Admission Confirmed");
        }, 1000);
    }, 1000);
}, 1000);


//26
console.log("Signup");
setTimeout(() => {
    console.log("Verify Email");
    setTimeout(() => {
        console.log("Login");
        setTimeout(() => {
            console.log("Dashboard");
        }, 1000);
    }, 1000);
}, 1000);


//27
setTimeout(() => {
    console.log("Task 1");
    setTimeout(() => {
        console.log("Task 2");
        setTimeout(() => {
            console.log("Task 3");
        }, Math.random() * 3000);
    }, Math.random() * 3000);
}, Math.random() * 3000);


//28
function fetchWeather(callback) {
    setTimeout(() => {
        callback("32°C Sunny");
    }, 2000);
}
fetchWeather((data) => {
    console.log(data);
});


//29
console.log("Cart");
setTimeout(() => {
    console.log("Payment");
    setTimeout(() => {
        console.log("Order Confirmed");
        setTimeout(() => {
            console.log("Delivery");
        }, 1000);
    }, 1000);
}, 1000);


//30
console.log("Movie Selected");
setTimeout(() => {
    console.log("Seat Selected");
    setTimeout(() => {
        console.log("Payment Done");
        setTimeout(() => {
            console.log("Ticket Generated");
        }, 1000);
    }, 1000);
}, 1000);



//31 
setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);


//32 
let seconds = 0;
let timer;
function start() {
    timer = setInterval(() => {
        seconds++;
        console.log(seconds);
    }, 1000);
}
function pause() {
    clearInterval(timer);
}
function reset() {
    clearInterval(timer);
    seconds = 0;
}


//33  
let lights = ["Red", "Yellow", "Green"];
let index = 0;
setInterval(() => {
    console.log(lights[index]);
    index = (index + 1) % lights.length;
}, 2000);


//34 
let images = ["img1", "img2", "img3"];
let index = 0;
setInterval(() => {
    console.log(images[index]);
    index = (index + 1) % images.length;
}, 3000);
//35 Typing Effect
let text = "Hello World";
let i = 0;
let typing = setInterval(() => {
    process.stdout?.write?.(text[i] || "");
    i++;
    if (i === text.length) {
        clearInterval(typing);
    }
}, 200);


//36
// A
// D
// C
// B


//37
// Two
// One
// 


//38
// Start
// End
// Timeout



