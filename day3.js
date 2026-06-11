//1. Ek student object banao jisme: ● name ● age ● city Store ho.
const student = {
  name: "Ram",
  age: 25,
  city: "Kathmandu"
};
console.log(student);

//2.Upar wale object ka name print karo.
console.log(student.name);

//3.Object me greet() method add karo jo print kare: Hello I am Ram 
student.greet = function() {
  console.log(`Hello I am ${this.name}`);
};
student.greet("Ram");

//4 Object me isAdult() method banao jo age check kare.
student.isAdult = function() {
  return this.age >= 18;
};
console.log(student.isAdult());         

//5 Object ki sabhi keys print karo. 
console.log(Object.keys(student));

//6 Object ki sabhi values print karo.
console.log(Object.values(student));    

//7 Check karo ki object me email property hai ya nahi.
console.log(student.hasOwnProperty("email"));

//8 Object me dynamically property add karo. student.course = "MERN";
student.course = "MERN";
console.log(student);   

//9 Object se age property delete karo. 
delete student.age;
console.log(student);

//10 Ek object ka clone banao. 
const clonedStudent = { ...student };
console.log(clonedStudent);

//11 Ek object banao jisme showName() method ho aur this.name print kare. 
const person = {
  name: "Mohan",
  showName: function() {                
    console.log(this.name);
  } 
};
person.showName();

//12 Ek object me: name = "Ram" store karo aur method se uppercase print karo.
const user = {
  name: "Ram",
  printUpperCase: function() {          
    console.log(this.name.toUpperCase());
  }
};
user.printUpperCase();

//13 Object me do methods banao: deposit() withdraw() Aur balance update karo.
const bankAccount = {
  balance: 1000,
  deposit: function(amount) {
    this.balance += amount;
  },
  withdraw: function(amount) {
    this.balance -= amount;
  }
};
bankAccount.deposit(500);
bankAccount.withdraw(200);
console.log(bankAccount.balance);

//14 Ram

//15 undefined

//16 Student constructor function banao. Parameters: name age 
function Student(name, age) {
  this.name = name;
  this.age = age;
}       
const student1 = new Student("Ram", 25);
console.log(student1);

//17 3 student objects create karo constructor se. 
const student2 = new Student("Mohan", 30);
const student3 = new Student("Amit", 22);
console.log(student2);
console.log(student3);  

//18 Constructor function me greet() method add karo. 
Student.prototype.greet = function() {
  console.log(`Hello I am ${this.name}`);
}   
student1.greet();
student2.greet();
student3.greet();

//19 Ram

//20 Car constructor function banao. Properties: brand price
function Car(brand, price) {
  this.brand = brand;
  this.price = price;
}
const car1 = new Car("Toyota", 20000);
console.log(car1);

//21 Student constructor banao aur prototype me greet() method add karo.
function Student(name, age) {
  this.name = name;
  this.age = age;
}    
Student.prototype.greet = function() {
  console.log(`Hello I am ${this.name}`);
};      
const student1 = new Student("Ram", 25);
student1.greet();

//22 Check karo: obj.__proto__ === Student.prototype 
console.log(student1.__proto__ === Student.prototype);

//23 Prototype me isAdult() method add karo. 
Student.prototype.isAdult = function() {
  return this.age >= 18;
}   
console.log(student1.isAdult());

//24 Hi

//25 Prototype me course property add karo.
Student.prototype.course = "MERN";
console.log(student1.course);

//26 Check karo: student1.hasOwnProperty("course")
console.log(student1.hasOwnProperty("course"));

//27 Check karo: "course" in student1
console.log("course" in student1);  

//28 Prototype chain draw karo: const arr=[] 
const arr = [];
console.log(arr.__proto__);

//29 Animal object banao. Method: eat()
const animal = {
  eat: function() {
    console.log("Animal is eating");
  }
};  

//30 Animal se dog object create karo using: Object.create()
const dog = Object.create(animal);
dog.eat();

//31 Dog me bark() method add karo. 
dog.bark = function() {
  console.log("Dog is barking");
}   
dog.bark();
dog.eat();

//32 Eating

//33 Student class banao. Properties: name age
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const student1 = new Student("Ram", 25);
console.log(student1);

//34 Class me greet() method add karo. 
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
    greet() {
    console.log(`Hello I am ${this.name}`);
    }
}
const student1 = new Student("Ram", 25);
student1.greet();

//35 Class me isAdult() method add karo. 
class Student {
    constructor(name, age) {        
    this.name = name;
    this.age = age;
    }
    greet() {
    console.log(`Hello I am ${this.name}`);
    }
    isAdult() {
    return this.age >= 18;
    }   
}
const student1 = new Student("Ram", 25);
console.log(student1.isAdult());        

//36 3 objects create karo class se. 
const student2 = new Student("Mohan", 30);
const student3 = new Student("Amit", 22);
console.log(student2);  
console.log(student3);

//37 Animal class banao. Method: eat()
class Animal {
    eat() {
    console.log("Animal is eating");
    }
}
const animal1 = new Animal();
animal1.eat();

//38 Dog class banao jo Animal ko inherit kare
class Dog extends Animal {
    bark() {
    console.log("Dog is barking");
    }
}
const dog1 = new Dog();
dog1.eat();
dog1.bark();

//39 Dog class me bark() method add karo.
class Dog extends Animal {
    bark() {
    console.log("Dog is barking");
    }
}
const dog1 = new Dog();
dog1.bark();

//40 