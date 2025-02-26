// ---------Import---------------

// import { apikey } from "./util.js";
// import apikey from "./util.js";
// import {apikey,abc as content} from "./util.js";
// import * as util from "./util.js"

// console.log(apikey);
// console.log(content);

// ------------variable---------------

// let userMessage = "Hello World !!"
// console.log(userMessage);

// // --------------operator----------------
// console.log(5 + 22);


// -------------------function----------------

// function greet() {
//     console.log("Hello ");    
// }
// greet();

// function greetUser(userName, message = "hello") {
//     console.log(userName);
//     console.log(message);
// }
// greetUser("Max");
// greetUser("Manual", "hello, What's up?");

// function createGreet(userName, message = "hello") {

//     return "Hi, i am " + userName + " " + message;
// }

// const greetMessage1 = createGreet("Max")
// console.log(greetMessage1);

// const greetMessage2 = createGreet("mina", "welcome")
// console.log(greetMessage2);

// --------------------Arrow function-----------------

// export default (userName, message) =>{
//     console.log("Hello");
//     return userName + message;
// }


// ---------------------object-----------------------

// const userName = "Max";
// const userAge = 34;

// const user = {
//     name: 'max',
//     age:  34,
//     greet() {
//         console.log("hello")  
//         console.log(this.age)                
//     }
// };

// console.log(user.name);
// user.greet()


// -----------------------class------------------------------

// class User {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         console.log("hi !");        
//     }

// }

// const user1 = new User("Manu",34);
// console.log(user1);
// user1.greet()

// -------------------------Arrays---------------------------

// const hobbies = ["sports","cooking","reading"];
// console.log(hobbies[0]);

// hobbies.push("working")
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "cooking");

// console.log(index);


// // ----------------------------Map----------------------------

// const editedHobbies = hobbies.map((item) => ({text : item}))
// console.log(editedHobbies);

// -----------------------------Destructuring-----------------

// const userNameData = ["Max", "More"]

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// insted of

// const [firstName, lastName] = ["Max", "More"]
// console.log(firstName);
// console.log(lastName);

// const {name: userName,age} = {
//     name: "max",
//     age: 34
// }

// console.log(userName);
// console.log(age);

// ------------------------------Spread Operator------------------

// const hobbies = ["sports","cooking"];

// const newHobbies = ["reading"]

// const mergeHobbies = [...hobbies, ...newHobbies]
// console.log(mergeHobbies);


// const user = {
//     name: "max",
//     age: 34
// }

// const extendUser = {
//     isAdmin : true,
//     ...user
// }

// console.log(extendUser);

// --------------------------Control structure-------------------

// const password = prompt('your password')

// if (password === 'hello') {
//     console.log("hello works");    
// } else if(password === 'HELLO'){
//     console.log("hello works");   
// } else{
//     console.log("access not granted");
// }


// const hobbies = ["sports","cooking"];
// for (const hobby of hobbies) {
//     console.log(hobby);
    
// }


// const list = document.querySelector('ul')
// list.remove()


// ---------------------function as value------------------


// function handleTimeOut(){
//     console.log("Timed out !");    
// }

// const handleTimeOut2 = () => {
//     console.log("Timed out !....Again");
// }

// setTimeout(handleTimeOut, 2000);
// setTimeout(handleTimeOut2, 3000);
// setTimeout(() => {
//     console.log('More timing out!....');
// }, 4000);

// function greeter(greetFn) {
//     greetFn();   
// }
// greeter(() => console.log("hi"))


// ---------------------function inside of function-------------------------

// function inti(){

//     function greet(){
//         console.log("Hello");        
//     }
//     greet()
// }
// inti()

//-------------------Reference vs primitive value-------------------

let userMessage = "hello"
userMessage = userMessage.concat('!!!')

const hobbies = ["sports","cooking"]; 
hobbies.push('working')
console.log(hobbies);
