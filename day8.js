// Q1
async function helloWorld() {
  return "Hello World";
}
helloWorld().then(result => console.log("Q1:", result));


// Q2
async function getUser() {
  return {
    name: "Ram",
    age: 20
  };
}
getUser().then(result => console.log("Q2:", result));


// Q3
async function getProducts() {
  return ["Laptop", "Phone", "Watch"];
}
getProducts().then(result => console.log("Q3:", result));


// Q4
async function getCurrentDate() {
  return new Date().toDateString();
}
getCurrentDate().then(result => console.log("Q4:", result));


// Q5
async function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}
getRandomNumber().then(result => console.log("Q5:", result));


// Q6
async function getStudent() {
  return {
    name: "Kamakshi",
    course: "BCA"
  };
}
getStudent().then(result => console.log("Q6:", result));


// Q7
async function getCompany() {
  return {
    name: "Google",
    location: "India"
  };
}
getCompany().then(result => console.log("Q7:", result));


// Q8
async function getCartItems() {
  return ["Shoes", "Bag", "Watch"];
}
getCartItems().then(result => console.log("Q8:", result));


// Q9
async function getTotalAmount() {
  return 2500;
}
getTotalAmount().then(result => console.log("Q9:", result));


// Q10
async function checkPromise() {
  return "Hello";
}
console.log("Q10:", checkPromise() instanceof Promise);


// Q11
async function getUser() {
  return { name: "Ram", age: 20 };
}
async function showUser() {
  const user = await getUser();
  console.log("Q11:", user);
}
showUser();


// Q12
async function getProduct() {
  return "Laptop";
}
async function showProduct() {
  const product = await getProduct();
  console.log("Q12:", product);
}
showProduct();


// Q13
async function getOrders() {
  return ["Order1", "Order2", "Order3"];
}
async function showOrders() {
  const orders = await getOrders();
  console.log("Q13:", orders);
}
showOrders();


// Q14
async function getPayment() {
  return "Payment Successful";
}
async function showPayment() {
  const payment = await getPayment();
  console.log("Q14:", payment);
}
showPayment();


// Q15
function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
wait(2000).then(() => console.log("Q15: Waited 2 seconds"));


// Q16
async function startEnd() {
  console.log("Q16: Start");
  await wait(2000);
  console.log("Q16: End");
}
startEnd();


// Q17
async function printNumbers() {
  console.log("Q17:", 1);
  await wait(1000);
  console.log("Q17:", 2);
  await wait(1000);
  console.log("Q17:", 3);
}
printNumbers();


// Q18
async function greeting() {
  await wait(1000);

  console.log("Q18: Welcome Ram");
}
greeting();


// Q21
async function generateError() {
  throw new Error("Something went wrong");
}
async function runQ21() {
  try {
    await generateError();
  } catch (error) {
    console.log("Q21:", error.message);
  }
}
runQ21();


// Q23
async function withdraw(balance, amount) {
  if (amount > balance) {
    throw new Error("Insufficient Balance");
  }
  return "Withdrawal Successful";
}
async function runQ23() {
  try {
    const result = await withdraw(5000, 2000);
    console.log("Q23:", result);
  } catch (error) {
    console.log("Q23:", error.message);
  }
}
runQ23();


// Q24
async function paymentGateway(amount) {
  if (amount <= 0) {
    throw new Error("Invalid Amount");
  }
  return "Payment Successful";
}
async function runQ24() {
  try {
    const result = await paymentGateway(1000);
    console.log("Q24:", result);
  } catch (error) {
    console.log("Q24:", error.message);
  }
}
runQ24();


// Q25
async function register(name) {
  if (!name) {
    throw new Error("Name Required");
  }
  return "Registration Successful";
}
async function runQ25() {
  try {
    const result = await register("Ram");
    console.log("Q25:", result);
  } catch (error) {
    console.log("Q25:", error.message);
  }
}
runQ25();


// Q27
async function validatePassword(password) {
  if (password.length < 6) {
    throw new Error("Password Too Short");
  }
  return "Strong Password";
}
async function runQ27() {
  try {
    const result = await validatePassword("abc123");
    console.log("Q27:", result);
  } catch (error) {
    console.log("Q27:", error.message);
  }
}
runQ27();


// Q28
async function atm(balance, amount) {
  if (amount > balance) {
    throw new Error("Not Enough Balance");
  }

  return "Cash Withdrawn";
}
async function runQ28() {
  try {
    const result = await atm(10000, 3000);
    console.log("Q28:", result);
  } catch (error) {
    console.log("Q28:", error.message);
  }
}
runQ28();


// Q29
async function buyProduct(stock) {
  if (stock === 0) {
    throw new Error("Product Out Of Stock");
  }
  return "Product Purchased";
}
async function runQ29() {
  try {
    const result = await buyProduct(5);
    console.log("Q29:", result);
  } catch (error) {
    console.log("Q29:", error.message);
  }
}
runQ29();


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
  console.log("Q36:", result);
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
  console.log("Q37:", result);
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
  console.log("Q38:", result);
}
dashboardLoader();


// Q39
async function imageGallery() {
  const result = await Promise.all([
    Promise.resolve("Image1"),
    Promise.resolve("Image2"),
    Promise.resolve("Image3")
  ]);
  console.log("Q39:", result);
}
imageGallery();


// Q40
async function fileDownloader() {
  const result = await Promise.all([
    Promise.resolve("File1"),
    Promise.resolve("File2"),
    Promise.resolve("File3")
  ]);
  console.log("Q40:", result);
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
  console.log("Q41:", result);
}
allSettledDemo();


// Q42
async function adminDashboard() {
  const result = await Promise.allSettled([
    Promise.resolve("Users"),
    Promise.reject("Reports Error"),
    Promise.resolve("Orders")
  ]);
  console.log("Q42:", result);
}
adminDashboard();


// Q43
async function batchUpload() {
  const result = await Promise.allSettled([
    Promise.resolve("File1 Uploaded"),
    Promise.reject("File2 Failed"),
    Promise.resolve("File3 Uploaded")
  ]);
  console.log("Q43:", result);
}
batchUpload();


// Q44
async function studentResults() {
  const result = await Promise.allSettled([
    Promise.resolve("Ram Pass"),
    Promise.reject("Shyam Fail"),
    Promise.resolve("Mohan Pass")
  ]);
  console.log("Q44:", result);
}
studentResults();


// Q45
async function fastestServer() {
  const result = await Promise.race([
    new Promise(resolve => setTimeout(() => resolve("Server1"), 3000)),
    new Promise(resolve => setTimeout(() => resolve("Server2"), 1000)),
    new Promise(resolve => setTimeout(() => resolve("Server3"), 2000))
  ]);
  console.log("Q45:", result);
}
fastestServer();


// Q46
async function firstSuccess() {
  const result = await Promise.any([
    Promise.reject("Server1 Failed"),
    Promise.reject("Server2 Failed"),
    Promise.resolve("Server3 Success")
  ]);
  console.log("Q46:", result);
}
firstSuccess();


// Q48
async function* names() {
  yield "Ram";
  yield "Shyam";
  yield "Mohan";
}
async function showNames() {
  for await (const name of names()) {
    console.log("Q48:", name);
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
