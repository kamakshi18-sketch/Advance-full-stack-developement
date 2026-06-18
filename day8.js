// Q1
async function helloWorld() {
  return "Hello World";
}
helloWorld().then(result => console.log(result));


// Q2
async function getUser2() {
  return {
    name: "Ram",
    age: 20
  };
}
getUser2().then(result => console.log(result));


// Q3
async function getProducts() {
  return ["Laptop", "Phone", "Watch"];
}
getProducts().then(result => console.log(result));


// Q5
async function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}
getRandomNumber().then(result => console.log(result));


// Q6
async function getStudent() {
  return {
    name: "Kamakshi",
    course: "BCA"
  };
}
getStudent().then(result => console.log(result));


// Q7
async function getCompany() {
  return {
    name: "Google",
    location: "India"
  };
}
getCompany().then(result => console.log(result));


// Q8
async function getCartItems() {
  return ["Shoes", "Bag", "Watch"];
}
getCartItems().then(result => console.log(result));


// Q9
async function getTotalAmount() {
  return 2500;
}
getTotalAmount().then(result => console.log(result));


// Q11
async function getUser11() {
  return { name: "Ram", age: 20 };
}
async function showUser() {
  const user = await getUser11();
  console.log(user);
}
showUser();


// Q12
async function getProduct() {
  return "Laptop";
}
async function showProduct() {
  const product = await getProduct();
  console.log(product);
}
showProduct();


// Q13
async function getOrders() {
  return ["Order1", "Order2", "Order3"];
}
async function showOrders() {
  const orders = await getOrders();
  console.log(orders);
}
showOrders();


// Q14
async function getPayment() {
  return "Payment Successful";
}
async function showPayment() {
  const payment = await getPayment();
  console.log(payment);
}
showPayment();


// Q15
function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
wait(2000).then(() => console.log("Waited 2 seconds"));


function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Q16
async function startEnd() {
  console.log("Start");
  await wait(2000);
  console.log("End");
}
startEnd();


// Q17
async function printNumbers() {
  console.log(1);
  await wait(1000);
  console.log(2);
  await wait(1000);
  console.log(3);
}
printNumbers();


// Q18
async function greeting() {
  await wait(1000);

  console.log("Welcome Ram");
}
greeting();


// Q21
async function generateError() {
  throw new Error("Something went wrong");
}
async function run21() {
  try {
    await generateError();
  } catch (error) {
    console.log(error.message);
  }
}
run21();


// Q23
async function withdraw(balance, amount) {
  if (amount > balance) {
    throw new Error("Insufficient Balance");
  }
  return "Withdrawal Successful";
}
async function run23() {
  try {
    const result = await withdraw(5000, 2000);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
run23();


// Q24
async function paymentGateway(amount) {
  if (amount <= 0) {
    throw new Error("Invalid Amount");
  }
  return "Payment Successful";
}
async function run24() {
  try {
    const result = await paymentGateway(1000);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
run24();


// Q27
async function validatePassword(password) {
  if (password.length < 6) {
    throw new Error("Password Too Short");
  }
  return "Strong Password";
}
async function run27() {
  try {
    const result = await validatePassword("abc123");
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
run27();


// Q28
async function atm(balance, amount) {
  if (amount > balance) {
    throw new Error("Not Enough Balance");
  }

  return "Cash Withdrawn";
}
async function run28() {
  try {
    const result = await atm(10000, 3000);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
run28();


// Q29
async function buyProduct(stock) {
  if (stock === 0) {
    throw new Error("Product Out Of Stock");
  }
  return "Product Purchased";
}
async function run29() {
  try {
    const result = await buyProduct(5);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
run29();


// Q31
async function loginFlow() {
  await wait(1000);
  console.log("Login Successful");
  await wait(1000);
  console.log("User Fetched");
  await wait(1000);
  console.log("Orders Fetched");
  await wait(1000);
  console.log("Payment Successful");
}
loginFlow();


// Q32
async function movieBooking() {
  console.log("Movie Selected");
  console.log("Seat Booked");
  console.log("Payment Done");
  console.log("Ticket Confirmed");
}
movieBooking();


// Q33
async function foodDelivery() {
  console.log("Food Ordered");
  console.log("Food Prepared");
  console.log("Food Delivered");
}
foodDelivery();


// Q34
async function trainBooking() {
  console.log("Train Found");
  console.log("Seat Selected");
  console.log("Ticket Confirmed");
}
trainBooking();


// Q35
async function collegeAdmission() {
  console.log("Form Submitted");
  console.log("Documents Verified");
  console.log("Admission Confirmed");
}
collegeAdmission();


// Q36
async function fetchAllData() {
  const result = await Promise.all([
    Promise.resolve(["Ram", "Shyam"]),
    Promise.resolve(["Laptop", "Phone"]),
    Promise.resolve(["Order1", "Order2"])
  ]);
  console.log(result);
}
fetchAllData();


// Q37
async function fetchFiveApis() {
  const result = await Promise.all([
    Promise.resolve("API1"),
    Promise.resolve("API2"),
    Promise.resolve("API3"),
    Promise.resolve("API4"),
    Promise.resolve("API5")
  ]);
  console.log(result);
}
fetchFiveApis();


// Q38
async function dashboardLoader() {
  const result = await Promise.all([
    Promise.resolve("User"),
    Promise.resolve("Orders"),
    Promise.resolve("Products"),
    Promise.resolve("Notifications")
  ]);
  console.log(result);
}
dashboardLoader();


// Q39
async function imageGallery() {
  const result = await Promise.all([
    Promise.resolve("Image1"),
    Promise.resolve("Image2"),
    Promise.resolve("Image3")
  ]);
  console.log(result);
}
imageGallery();


// Q40
async function fileDownloader() {
  const result = await Promise.all([
    Promise.resolve("File1"),
    Promise.resolve("File2"),
    Promise.resolve("File3")
  ]);
  console.log(result);
}
fileDownloader();


// Q41
async function allSettledDemo() {
  const result = await Promise.allSettled([
    Promise.resolve("API1"),
    Promise.resolve("API2"),
    Promise.resolve("API3"),
    Promise.reject("API4 Failed"),
    Promise.reject("API5 Failed")
  ]);
  console.log(result);
}
allSettledDemo();


// Q42
async function adminDashboard() {
  const result = await Promise.allSettled([
    Promise.resolve("Users"),
    Promise.reject("Reports Error"),
    Promise.resolve("Orders")
  ]);
  console.log(result);
}
adminDashboard();


// Q43
async function batchUpload() {
  const result = await Promise.allSettled([
    Promise.resolve("File1 Uploaded"),
    Promise.reject("File2 Failed"),
    Promise.resolve("File3 Uploaded")
  ]);
  console.log(result);
}
batchUpload();


// Q44
async function studentResults() {
  const result = await Promise.allSettled([
    Promise.resolve("Ram Pass"),
    Promise.reject("Shyam Fail"),
    Promise.resolve("Mohan Pass")
  ]);
  console.log(result);
}
studentResults();


// Q45
async function fastestServer() {
  const result = await Promise.race([
    new Promise(resolve => setTimeout(() => resolve("Server1"), 3000)),
    new Promise(resolve => setTimeout(() => resolve("Server2"), 1000)),
    new Promise(resolve => setTimeout(() => resolve("Server3"), 2000))
  ]);
  console.log(result);
}
fastestServer();


// // Q46
async function firstSuccess() {
  try {
    const result = await Promise.any([
      Promise.reject("Server1 Failed"),
      Promise.reject("Server2 Failed"),
      Promise.resolve("Server3 Success")
    ]);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}


// Q48
async function* names() {
  yield "Ram";
  yield "Shyam";
  yield "Mohan";
}
async function showNames() {
  for await (const name of names()) {
    console.log(name);
  }
}
showNames();


// Q50
async function ecommerceFlow() {
  console.log("Login");
  console.log("User Fetched");
  console.log("Products Fetched");
  console.log("Cart Fetched");
  console.log("Coupon Applied");
  console.log("Total Calculated");
  console.log("Payment Successful");
  console.log("Invoice Generated");
  console.log("Email Sent");
  console.log("Order Tracking Started");
  console.log("Order Delivered");
}
ecommerceFlow();
