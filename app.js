// Hosting With Var

// var myVar;              
// console.log(myVar);      undefined
// myVar = "Hello World";  
// console.log(myVar);     Result "Hello World"


//Hoisting with let and const:

// console.log(myLet);  
// let myLet = "I am declared after logging";
// Uncaught ReferenceError: Cannot access 'myLet' before initialization

// console.log(myConst);
// const myConst = "I am declared after logging";
// Uncaught ReferenceError: Cannot access 'myConst' before initialization

//Re-declaration:
   
// var myVar = "First declaration";
// var myVar = "Second declaration";
// console.log(myVar);  Output: "Second declaration"

// let myLet = "First declaration";
// let myLet = "Second declaration";  SyntaxError: Identifier 'myLet' has already been declared


// const myConst = "First declaration";
// const myConst = "Second declaration";  SyntaxError: Identifier 'myConst' has already been declared



//Re-assignment:

// var myVar = "Initial value";
// console.log(myVar);  Output: "Initial value"

// myVar = "Reassigned value";
// console.log(myVar);  Output: "Reassigned value"


// let myLet = "Initial value";
// console.log(myLet);  Output: "Initial value"

// myLet = "Reassigned value";
// console.log(myLet);  Output: "Reassigned value"


// const myConst = "Initial value";
// console.log(myConst);  Output: "Initial value"

// myConst = "Reassigned value";  TypeError: Assignment to constant variable.

//Temporal Dead Zone (TDZ):

// {
//   console.log(myLet); ReferenceError: Cannot access 'myLet' before initialization
//   let myLet = "I am inside the block";
//   console.log(myLet); This won't run due to the earlier error
// }

// {
//   console.log(myConst); ReferenceError: Cannot access 'myConst' before initialization
//   const myConst = "I am inside the block";
//   console.log(myConst); This won't run due to the earlier error
// }



// When to use var, let, and const:

// function oldFunction() {
//   var count = 0; // Function-scoped variable
//   for (var i = 0; i < 5; i++) {
//     count++;
//   }
//   console.log(i);    // Accessible outside the loop: 5
//   console.log(count); // Logs: 5
// }
// oldFunction();


// function updateScores() {
//   let scores = [10, 20, 30];
//   for (let i = 0; i < scores.length; i++) {
//     let score = scores[i] * 2; // Block-scoped variable
//     console.log(`Score ${i + 1}: ${score}`);
//   }
//   // console.log(score); // Error: score is not defined outside the loop
// }
// updateScores();


// const TAX_RATE = 0.07; 
// const person = { name: "John", age: 30 }; 

// // Attempting to reassign TAX_RATE will throw an error:
// // TAX_RATE = 0.08; // TypeError: Assignment to constant variable

// console.log(`Tax Rate: ${TAX_RATE}`);
// person.age = 31; // Allowed: modifying properties of the object
// console.log(`Updated Age: ${person.age}`);

// Attempting to reassign person will throw an error:
// person = { name: "Jane" }; // TypeError



//String Interpolation:


// const firstName = "Jane";
// const lastName = "Smith";
// const fullName = `${firstName} ${lastName}`;
// console.log(`The person's full name is: ${fullName}`);

//Multi-line Strings:


// const address = `
// Flat No B-13 North Karachi Anarkali Complex
// `;
// console.log("Address:");
// console.log(address);


//Simple Expressions:


// const num1 = 5;
// const num2 = 8;
// const result = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
// console.log(result);


// Function Calls:


// function multiply(num1, num2) {
//   return num1 * num2;
// }
// const result = `The product of 6 and 7 is ${multiply(6, 7)}.`;
// console.log(result);


// Creating a Tagged Template:

// function logTemplate(strings) {
//   console.log(strings);
// }
// const name = "Alice";
// const age = 25;
// logTemplate`Hello, my name is ${name} and I am ${age} years old.`;
// output: ["Hello, my name is ", " and I am ", " years old."]

// Formatting:
// function uppercase(strings, ...values) {
//   let result = strings[0];
//   for (let i = 0; i < values.length; i++) {
//     result += values[i] + strings[i + 1];
//   }
//   return result.toUpperCase();
// }

// const name = "John";
// const city = "New York";

// const formattedString = uppercase`Hello, my name is ${name} and I live in ${city}.`;
// console.log(formattedString);
// output: HELLO, MY NAME IS JOHN AND I LIVE IN NEW YORK.

// Conditional Logic:
// const currentHour = new Date().getHours();
// const greeting = `${currentHour < 12 ? 'Good morning!' : 'Good afternoon!'}`;
// console.log(greeting);
// output:Good afternoon!

// Loops within Template Literals:
// const shoppingList = ["Apples", "Bananas", "Carrots", "Dairy", "Eggs"];
// const htmlList = `
//   <ul>
//     ${shoppingList.map(item => `<li>${item}</li>`).join('')}
//   </ul>
// `;
// console.log(htmlList);
// output:
// <ul>
//   <li>Apples</li>
//   <li>Bananas</li>
//   <li>Carrots</li>
//   <li>Dairy</li>
//   <li>Eggs</li>
// </ul>

// Escaping Backticks:
// const stringWithBacktick = `This is a string with a backtick \` character.`;
// console.log(stringWithBacktick); //output: This is a string with a backtick ` character.


// Nested Template Literals:
// const tableData = [
//   { name: "John", age: 28, city: "New York" },
//   { name: "Jane", age: 34, city: "Los Angeles" },
//   { name: "Sam", age: 22, city: "Chicago" }
// ];
// const tableHTML = `
//   <table border="1">
//     <tr>
//       <th>Name</th>
//       <th>Age</th>
//       <th>City</th>
//     </tr>
//     ${tableData.map(person => `
//       <tr>
//         <td>${person.name}</td>
//         <td>${person.age}</td>
//         <td>${person.city}</td>
//       </tr>
//     `).join('')}
//   </table>
// `;
// console.log(tableHTML);
// output:
// <table border="1">
//   <tr>
//     <th>Name</th>
//     <th>Age</th>
//     <th>City</th>
//   </tr>
//   <tr>
//     <td>John</td>
//     <td>28</td>
//     <td>New York</td>
//   </tr>
//   <tr>
//     <td>Jane</td>
//     <td>34</td>
//     <td>Los Angeles</td>
//   </tr>
//   <tr>
//     <td>Sam</td>
//     <td>22</td>
//     <td>Chicago</td>
//   </tr>
// </table>

// Simple Condition:

// const age = 20;
// const canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote);  //output:yes


// Even or Odd:
// const number = 7;
// const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
// console.log(evenOrOdd);  //output: Odd


//Grade Evaluation:

// const score = 85;
// const grade = score >= 90 ? "A" :
//               score >= 80 ? "B" :
//               score >= 70 ? "C" :
//               score >= 60 ? "D" : "F";
// console.log(grade);  //output:B


//Login Status:
// const isLoggedIn = true;
// const statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
// console.log(statusMessage);  //output : Welcome back!


// Discount Eligibility:
// const isMember = true; 
// const purchaseAmount = 150; 
// const discount = (isMember && purchaseAmount > 100) ? (purchaseAmount * 0.10) : 0;
// console.log(discount); //output: 15


// Determine Max Value:
// function maxValue(a, b) {
//   return a > b ? a : b;
// }
// console.log(maxValue(10, 20)); //output: 20


//Greeting Message:

// function greet(name) {
//   return name && name.trim() !== "" ? `Hello, ${name}!` : "Hello, guest!";
// }
// console.log(greet("John")); // Output: Hello, John!
// console.log(greet("")); // Output: Hello, guest!


//Mapping Values:
// const numbers = [1, 2, 3, 4, 5, 6];
// const modifiedNumbers = numbers.map(num => num % 2 === 0 ? num * 2 : num * 3);
// console.log(modifiedNumbers); output: [3, 4, 9, 8, 15, 12]

//Filtering Values:
// const strings = ["apple", "pie", "banana", "cat", "dog", "elephant"];
// const longStrings = strings.filter(str => str.length > 3 ? true : false);
// console.log(longStrings);  //output: ["apple", "banana", "elephant"]


//Copying an Array:
// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = [...originalArray];
// console.log("Original Array:", originalArray);
// console.log("Copied Array:", copiedArray);
// console.log("Are they the same reference?", originalArray === copiedArray);
// output: Original Array: [1, 2, 3, 4, 5]
// Copied Array: [1, 2, 3, 4, 5]
// Are they the same reference? false


//Merging Arrays:
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const mergedArray = [...array1, ...array2];
// console.log(mergedArray);// [1, 2, 3, 4, 5, 6]

//Adding Elements to an Array:
// const numbers = [2, 3, 4];
// const updatedNumbers = [1, ...numbers, 5];
// console.log(updatedNumbers); //output: [1, 2, 3, 4, 5]


//Copying an Object:
// const originalObject = { name: "John", age: 30, city: "New York" };
// const copiedObject = { ...originalObject };
// console.log("Original Object:", originalObject);
// console.log("Copied Object:", copiedObject);
// console.log("Are they the same reference?", originalObject === copiedObject);
// output: Original Object: { name: "John", age: 30, city: "New York" }
// Copied Object: { name: "John", age: 30, city: "New York" }
// Are they the same reference? false


//Merging Objects:
// const object1 = { name: "John", age: 30, city: "New York" };
// const object2 = { age: 35, city: "Los Angeles", country: "USA" };
// const mergedObject = { ...object1, ...object2 };
// console.log(mergedObject);  //{ name: 'John', age: 35, city: 'Los Angeles', country: 'USA' }


//Updating Object Properties:
// const user = { name: "Alice", age: 25, email: "alice@example.com" };
// const updatedUser = { ...user, email: "alice.new@example.com", address: "123 Main St, Cityville" };
// console.log(updatedUser); //{ name: 'Alice', age: 25, email: 'alice.new@example.com', address: '123 Main St, Cityville' }

//Passing Array Elements as Arguments:
// function sum(a, b, c) {
//   return a + b + c;
// }
// const numbers = [1, 2, 3];
// const result = sum(...numbers);
// console.log(result); //6


//Combining Multiple Arrays:
// function combineArrays(...arrays) {
//   return [].concat(...arrays);
// }
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];
// const combinedArray = combineArrays(array1, array2, array3);
// console.log(combinedArray); //[1, 2, 3, 4, 5, 6, 7, 8, 9]


//Rest Parameter with Spread Operator:
// function multiply(multiplier, ...numbers) {
//   return numbers.map(number => number * multiplier);
// }
// const result = multiply(2, 1, 2, 3, 4, 5);
// console.log(result); //[2, 4, 6, 8, 10]


//Spread Operator with Nested Structures:
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const copiedArray = [...nestedArray];
// copiedArray[0][0] = 10; 
// copiedArray[1][1] = 20;
// console.log("Original Array:", nestedArray);
// console.log("Copied Array:", copiedArray);
// output:
// Original Array: [[10, 2], [3, 20], [5, 6]]
// Copied Array: [[10, 2], [3, 20], [5, 6]]

//Sum Function:
// function sum(...numbers) {
//   return numbers.reduce((total, number) => total + number, 0);
// }
// console.log(sum(1, 2, 3));       // 6
// console.log(sum(5, 10, 15, 20)); // 50
// console.log(sum(7, 8));          // 15
// console.log(sum());              // 0 (no arguments)

//Average Function:
// function average(...numbers) {
//   if (numbers.length === 0) {
//     return 0;
//   }
//   const sum = numbers.reduce((total, number) => total + number, 0);
//   return sum / numbers.length;
// }
// console.log(average(1, 2, 3));       // 2
// console.log(average(5, 10, 15, 20)); // 12.5
// console.log(average(7, 8));          // 7.5
// console.log(average());              // 0 (no arguments)

//First and Rest:
// const numbers = [10, 20, 30, 40, 50];
// const [first, ...rest] = numbers;
// console.log(first);  // 10
// console.log(rest);   // [20, 30, 40, 50]

//Skip and Rest:
// const colors = ["red", "blue", "green", "yellow", "purple"];
// const [, , ...remainingColors] = colors;
// console.log(remainingColors);  // ["green", "yellow", "purple"]

//Basic Destructuring:
// const person = {
//   name: "John Doe",
//   age: 30,
//   email: "johndoe@example.com",
//   address: "123 Main St"
// };
// const { name, email, ...rest } = person;
// console.log(name);    // "John Doe"
// console.log(email);   // "johndoe@example.com"
// console.log(rest);    // { age: 30, address: "123 Main St" }

//Nested Destructuring:
// const student = {
//   id: 123,
//   name: "Alice",
//   grades: [85, 90, 88],
//   info: {
//     age: 21,
//     major: "Computer Science"
//   }
// };
// const { id, name, info: { major }, ...rest } = student;
// console.log(id);      // 123
// console.log(name);    // "Alice"
// console.log(major);   // "Computer Science"
// console.log(rest);    // { grades: [85, 90, 88] }

//Filter Even Numbers:
// function filterEven(...numbers) {
//   return numbers.filter(num => num % 2 === 0);
// }
// console.log(filterEven(1, 2, 3, 4, 5, 6)); // [2, 4, 6]
// console.log(filterEven(10, 15, 20, 25));   // [10, 20]
// console.log(filterEven(7, 11, 13, 17));    // []

//Combine and Sort Arrays:
// function combineAndSort(...arrays) {
//   return arrays.flat().sort((a, b) => a - b);
// }
// console.log(combineAndSort([3, 1, 4], [5, 9, 2], [8, 7])); // [1, 2, 3, 4, 5, 7, 8, 9]
// console.log(combineAndSort([10, 20], [15, 5], [25, 30]));   // [5, 10, 15, 20, 25, 30]
// console.log(combineAndSort([4, 8], [3, 7], [2, 6, 1]));      // [1, 2, 3, 4, 6, 7, 8]

//Basic Destructuring:
// const fruits = ["apple", "banana", "cherry"];
// const [firstFruit, secondFruit, thirdFruit] = fruits;
// console.log(firstFruit);  // "apple"
// console.log(secondFruit); // "banana"
// console.log(thirdFruit);  // "cherry"

//Skipping Elements:
// const colors = ["red", "green", "blue", "yellow"];
// const [primaryColor, , tertiaryColor] = colors;
// console.log(primaryColor);    // "red"
// console.log(tertiaryColor);   // "blue"


//Rest Operator:
// const numbers = [1, 2, 3, 4, 5];
// const [firstNumber, ...remainingNumbers] = numbers;
// console.log(firstNumber);        // 1
// console.log(remainingNumbers);   // [2, 3, 4, 5]


//Basic Destructuring:
// const person = {
//   name: 'John Doe',
//   age: 30,
//   city: 'New York'
// };
// const { name, age, city } = person;
// console.log(name);  // John Doe
// console.log(age);   // 30
// console.log(city);  // New York


//Renaming Variables:
// const car = {
//   make: 'Toyota',
//   model: 'Corolla',
//   year: 2022
// };
// const { make: carMake, model: carModel, year: carYear } = car;
// console.log(carMake);  // Toyota
// console.log(carModel); // Corolla
// console.log(carYear);  // 2022

//Default Values:
// const settings = {
//   theme: 'dark',
// };
// const { theme, language = 'English' } = settings;
// console.log(theme);     // dark
// console.log(language);  // English

//Array of Arrays:
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const [[a], [b], [c]] = nestedArray;
// console.log(a); // 1
// console.log(b); // 3
// console.log(c); // 5

//Object within an Object:
// const profile = {
//   username: 'john_doe',
//   details: {
//     email: 'john.doe@example.com',
//     address: '123 Main St, Springfield'
//   }
// };
// const { username, details: { email, address } } = profile;
// console.log(username); // "john_doe"
// console.log(email);    // "john.doe@example.com"
// console.log(address);  // "123 Main St, Springfield"

//Mix of Arrays and Objects:
// const data = {
//   id: 1,
//   info: [
//     { name: "Alice" },
//     { age: 25 }
//   ]
// };
// const { id, info: [{ name }, { age }] } = data;
// console.log(id);    // 1
// console.log(name);  // "Alice"
// console.log(age);   // 25

//Array Parameters:
// function printCoordinates([x, y]) {
//   console.log(`x: ${x}, y: ${y}`);
// }
// printCoordinates([10, 20]);  // x: 10, y: 20
// printCoordinates([30, 40]);  // x: 30, y: 40
// printCoordinates([50, 60]);  // x: 50, y: 60

//Object Parameters:
// function displayUser({name, age}) {
//   console.log(`Name: ${name}, Age: ${age}`);
// }
// displayUser({name: "Alice", age: 30});  // name: Alice, Age: 30
// displayUser({name: "Bob", age: 25});    // name: Bob, Age: 25
// displayUser({name: "Charlie", age: 35}); // name: Charlie, Age: 35

//List Property Names:
// const book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   year: 1925
// };
// const propertyNames = Object.keys(book);
// console.log(propertyNames); //["title", "author", "year"]


//Count Properties:
// const student = {
//   name: "John Doe",
//   age: 16,
//   grade: "11th",
//   school: "Greenwood High"
// };
// const propertyNames = Object.keys(student);
// const numberOfProperties = propertyNames.length;
// console.log(numberOfProperties); //4

//Iterate Over Keys:
// const product = {
//   name: "Laptop",
//   price: 1200,
//   category: "Electronics"
// };
// const keys = Object.keys(product);
// keys.forEach(key => {
//   console.log(`${key}: ${product[key]}`);
// });
// output: 
// name: Laptop
// price: 1200
// category: Electronics

//List Property Values:
// const movie = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   year: 2010,
//   genre: "Sci-Fi"
// };
// const values = Object.values(movie);
// console.log(values);  //["Inception", "Christopher Nolan", 2010, "Sci-Fi"]

//Sum Values:
// const scores = {
//   math: 90,
//   science: 85,
//   english: 88
// };
// const values = Object.values(scores);
// const totalSum = values.reduce((sum, value) => sum + value, 0);
// console.log(totalSum); //263

//Iterate Over Values:
// const user = {
//   username: 'john_doe',
//   email: 'john.doe@example.com',
//   location: 'New York'
// };
// const values = Object.values(user);
// values.forEach(value => {
//   console.log(value);
// });
//output:
// john_doe
// john.doe@example.com
// New York


//List Entries:
// const car = {
//   make: 'Toyota',
//   model: 'Corolla',
//   year: 2020
// };
// const entries = Object.entries(car);
// console.log(entries);
// output:
// [  ['make', 'Toyota'],
//   ['model', 'Corolla'],
//   ['year', 2020]
// ]


//Convert Object to Array:
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30
// };
// const personArray = Object.entries(person);
// console.log(personArray);
// output:
// [  ['firstName', 'John'],
//   ['lastName', 'Doe'],
//   ['age', 30]
// ]


//Iterate Over Entries:
// const settings = {
//   theme: 'dark',
//   notifications: true,
//   privacy: 'high'
// };
// for (const [key, value] of Object.entries(settings)) {
//   console.log(`${key}: ${value}`);
// }
// output:
// theme: dark
// notifications: true
// privacy: high

//Filter Keys:
// const inventory = {
//   apples: 15,
//   bananas: 8,
//   oranges: 12,
//   grapes: 5
// };
// const keysAboveTen = Object.keys(inventory).filter(key => inventory[key] > 10);
// console.log(keysAboveTen); //  [ 'apples', 'oranges' ]

//Transform Values:
// const temperatures = {
//   morning: 20,
//   afternoon: 25, 
//   evening: 18 
// };
// const temperaturesInFahrenheit = Object.entries(temperatures).map(([time, temp]) => {
//   return [time, (temp * 9/5) + 32];
// });
// const transformedTemperatures = Object.fromEntries(temperaturesInFahrenheit);
// console.log(transformedTemperatures);
// output:
// {
//   morning: 68,
//   afternoon: 77,
//   evening: 64.4
// }

//Key-Value Swap:
// const roles = {
//   admin: "Administrator",
//   editor: "Content Editor",
//   viewer: "Content Viewer"
// };
// const swappedRoles = Object.entries(roles).map(([key, value]) => [value, key]);
// const swappedRolesObject = Object.fromEntries(swappedRoles);
// console.log(swappedRolesObject);
// output:
// {
//   "Administrator": "admin",
//   "Content Editor": "editor",
//   "Content Viewer": "viewer"
// }


//Filter and Map:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filterAndMap = (array, filterFn, mapFn) => {
//   return array.filter(filterFn).map(mapFn);
// };
// const result = filterAndMap(numbers, num => num % 2 !== 0, num => num * num);
// console.log(result);
// output: [1, 9, 25, 49, 81]


//Sort and Reduce:
// const words = ["apple", "banana", "cherry", "date"];
// const sortAndReduce = (array, sortFn, reduceFn) => {
//   return array.sort(sortFn).reduce(reduceFn);
// };
// const result = sortAndReduce(words, (a, b) => a.localeCompare(b), (acc, curr) => acc + curr);
// console.log(result); //applebananacherrydate


//Simple Callback:
// const greet = (name, callback) => {
//   const message = `Hello, ${name}!`;
//   callback(message);
// };
// const printGreeting = (message) => {
//   console.log(message);
// };
// greet("John", printGreeting);  //Hello, John!


//Asynchronous Callback:
// const fetchData = (callback) => {
//   setTimeout(() => {
//     const data = { userId: 1, username: 'JohnDoe', age: 30 };
//     callback(data);
//   }, 2000);
// };
// const displayData = (data) => {
//   console.log("Fetched Data:", data);
// };
// fetchData(displayData);
// ooutput: Fetched Data: { userId: 1, username: 'JohnDoe', age: 30 }


//Simple Arrow Function:
// const add = (a, b) => a + b;
// console.log(add(3, 5)); // Output: 8

//Arrow Function with Array Methods:
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(number => number * number);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


//Variable Scope:
// function outer() {
//   let x = 10;
//   function inner() {
//     console.log(x);
//   }
//   inner();
// }
// outer(); // Output: 10

//Closure:
// function createCounter() {
//   let counter = 0;
//   return function() {
//     counter++;
//     console.log(counter);
//   };
// }
// const counter1 = createCounter();
// const counter2 = createCounter();
// counter1(); // Output: 1
// counter1(); // Output: 2
// counter2(); // Output: 1
// counter2(); // Output: 2


//Simple Default Parameters:
// function greet(name, greeting = "Hello") {
//   console.log(`${greeting}, ${name}!`);
// }
// greet("Alice", "Good morning");
// greet("Bob"); // Output: Hello, Bob!


//Default Parameters with Other Arguments:
// function calculateArea(width = 10, height = 5) {
//   return width * height;
// }
// console.log(calculateArea(15, 7)); // Output: 105
// console.log(calculateArea()); // Output: 50

//Square Numbers:
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//Convert to Uppercase:
// const words = ["apple", "banana", "cherry"];
// const uppercaseWords = words.map(word => word.toUpperCase());
// console.log(uppercaseWords); // Output: ["APPLE", "BANANA", "CHERRY"]

//Filter Even Numbers:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

//Filter Long Words:
// const words = ["apple", "banana", "cherry", "date"];
// const longWords = words.filter(word => word.length > 5);
// console.log(longWords); // Output: ["banana", "cherry"]

//Log Numbers:
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(number => {
//   console.log(number);
// }); 
// output:
// 1
// 2
// 3
// 4
// 5

//Log Word Lengths:
// const words = ["apple", "banana", "cherry"];
// words.forEach(word => {
//   console.log(word.length);
// });
// output:
// 5
// 6
// 6

//Sum of Numbers:
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); //15

//Concatenate Strings:
// const words = ["Hello", "world", "this", "is", "JavaScript"];
// const sentence = words.reduce((accumulator, currentValue) => accumulator + " " + currentValue);
// console.log(sentence);
// output:
// Hello world this is JavaScript

//Check for Even Number:
// const numbers = [1, 3, 5, 7, 8];
// const hasEven = numbers.some(num => num % 2 === 0);
// console.log(hasEven); //output: true

//Check for Long Word:
// const words = ["apple", "banana", "cherry", "date"];
// const hasLongWord = words.some(word => word.length > 5);
// console.log(hasLongWord);  //output: true


//Check All Even Numbers:
// const numbers = [2, 4, 6, 8, 10];
// const allEven = numbers.every(number => number % 2 === 0);
// console.log(allEven); //output: true


//Check All Long Words:
// const words = ["elephant", "giraffe", "hippopotamus"];
// const allLongWords = words.every(word => word.length > 5);
// console.log(allLongWords); //output: true


//Find First Even Number:
// const numbers = [1, 3, 5, 7, 8];
// const firstEvenNumber = numbers.find(num => num % 2 === 0);
// console.log(firstEvenNumber); //output:8


//Find Long Word:
// const words = ["apple", "banana", "cherry", "date"];
// const longWord = words.find(word => word.length > 5);
// console.log(longWord); //output: banana

//Find Index of First Even Number:
// const numbers = [1, 3, 5, 7, 8];
// const indexOfFirstEven = numbers.findIndex(number => number % 2 === 0);
// console.log(indexOfFirstEven); //output: 4

//Find Index of Long Word:
// const words = ["apple", "banana", "cherry", "date"];
// const indexOfLongWord = words.findIndex(word => word.length > 5);
// console.log(indexOfLongWord); //output: 1

//Simple Promise:
// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// delay(2000).then(() => {
//   console.log("Hello, world!");
// });
// output: Hello, world!

//Promise Chain:
// function fetchData() {
//   return new Promise(resolve => {
//     const data = { name: "Alice", age: 25 };
//     resolve(data);
//   });
// }
// fetchData()
//   .then(data => {
//     console.log(data);
//   });
//   output: { name: "Alice", age: 25 }

//Error Handling:
// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     const userData = { name: "Alice" };
//     if (userData.age === undefined) {
//       reject("Error: Missing age property");
//     } else {
//       resolve(userData);
//     }
//   });
// }
// fetchUserData()
//   .then(userData => {
//     console.log(userData);
//   })
//   .catch(error => {
//     console.log(error);
//   });
// output: Error: Missing age property


//Simulate Network Request:
// function getWeather() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isSuccess = Math.random() > 0.5;

//       if (isSuccess) {
//         resolve({ temperature: 25, condition: "Sunny" });
//       } else {
//         reject("Error: Failed to fetch weather data");
//       }
//     }, 1000);
//   });
// }
// getWeather()
//   .then(weatherData => {
//     console.log("Weather data received:", weatherData); 
//   })
//   .catch(error => {
//     console.log(error);
//   });

  //Simple async Function:
  // function delay(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }
  // async function sayHello() {
  //   await delay(2000);
  //   console.log("Hello, world!");
  // }
  // sayHello(); //output: Hello, world!

  //Fetch Data with async/await:
  // Function to simulate fetching user data, it resolves with an object or rejects if there's no age
// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     const user = { name: "John Doe", age: 25 };

//     if (user.age) {
//       resolve(user);
//     } else {
//       reject("Error: Missing age property");
//     }
//   });
// }
// async function getUserData() {
//   try {
//     const user = await fetchUserData();
//     console.log("User data:", user);
//   } catch (error) {
//     console.error(error);
//   }
// }
// getUserData(); //output: User data: { name: "John Doe", age: 25 }

//Fetch and Process Data:
// function fetchUser() {
//   return new Promise((resolve) => {
//     const user = { name: "John Doe", age: 30 };
//     resolve(user);
//   });
// }
// function fetchPosts(user) {
//   return new Promise((resolve) => {
//     const posts = [
//       { title: "Post 1", content: "This is the first post." },
//       { title: "Post 2", content: "This is the second post." },
//     ]; 
//     resolve(posts);
//   });
// }
// async function getUserAndPosts() {
//   try {
//     const user = await fetchUser(); 
//     console.log("User data:", user); 

//     const posts = await fetchPosts(user); 
//     console.log("Posts:", posts); 
//   } catch (error) {
//     console.error("Error:", error); 
//   }
// }
// getUserAndPosts(); 
//output
// User data: { name: "John Doe", age: 30 }
// Posts: [
//   { title: "Post 1", content: "This is the first post." },
//   { title: "Post 2", content: "This is the second post." }
// ]


//Error Handling in async/await:
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     const user = null;
//     if (user) {
//       resolve(user);
//     } else {
//       reject(new Error("User not found"));
//     }
//   });
// }
// async function getUserInfo() {
//   try {
//     const user = await fetchUser(); 
//     console.log("User data:", user); 
//   } catch (error) {
//     console.error("Error:", error.message); 
//   }
// }
// getUserInfo(); //output: Error: User not found

//Simulate API Calls:
// function apiCall() {
//   return new Promise((resolve, reject) => {
//     const delay = Math.random() * 2000; 
//     setTimeout(() => {
//       const success = Math.random() > 0.2;
//       if (success) {
//         resolve(`Data fetched after ${Math.round(delay)}ms`);
//       } else {
//         reject(new Error("API call failed"));
//       }
//     }, delay);
//   });
// }
// async function getData() {
//   try {
//     const result1 = await apiCall();
//     console.log(result1); 
    
//     const result2 = await apiCall(); 
//     console.log(result2);
    
//     const result3 = await apiCall(); 
//     console.log(result3); 
//   } catch (error) {
//     console.error("Error:", error.message); 
//   }
// }
// getData();
// output:
// Data fetched after 1482ms
// Data fetched after 1135ms
// Error: API call failed

