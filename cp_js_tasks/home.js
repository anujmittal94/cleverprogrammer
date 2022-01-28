//------------------------------------------------------------------------------
// // Print to console
// console.log("hello");
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// // Variables
// var b = 'smoothie';
// console.log(b);
//
// var age = prompt("Age?");
// document.getElementById('someText').innerHTML = age;
//------------------------------------------------------------------------------



//------------------------------------------------------------------------------
// // Numbers
// var num1 = 5.7;
// num1 = num1 + 1;
// // increment
// num1++;
// num1+=1;
// // decrement
// num1--;
// num1-=1;
// console.log(num1);
// // div /, mult *, rem %
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// // Functions
// /*
// 1. Create a function
// 2. Call the function
// */
// function fun() {
//     console.log("this is a function");
// }
//
// fun();
//
// // greeting
// function greeting(yourName){
//     var result = 'Hello ' + yourName;
//     console.log(result)
// }
//
// name = prompt("Name?")
// greeting(name);
//
// // arguments
// function sumNumbers(num1,num2){
//     console.log(num1+num2);
// }
//
// sumNumbers(1,3);
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// // While loops
// var num = 0;
// while (num < 10){
//     num++;
//     console.log(num)
// }
//
// // For loops
// for (let num=0; num <=10; num++) {
//     console.log(num);
// }
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// // Data types
// let yourAge = 18; //number
// let yourName = 'Bob' //string
// let name = {fisrt: 'Jane', last:'Doe'}; //object
// let truth = false; //Boolean
// let groc = ['apple', 'banana']; //array
// let random; //undefined
// let nothing = null; //value null
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// // Strings in Javascript (common methods)
// let fruit = 'banana';
// let morefruits = 'banana\napple'; //newline
//
// console.log(fruit.length);
// console.log(fruit.indexOf('b')); //-1 if not found
// console.log(fruit.slice(2,6));
// console.log(fruit.replace('ban', '123'));
// console.log(fruit.toUpperCase());
// console.log(fruit.toLowerCase());
// console.log(fruit.charAt(2));
// console.log(fruit[2]);
// console.log(fruit.split('')); //split by given delimiter
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// // Arrays
// let fruits = ['banana', 'apple', 'pineapple']
// fruits = new Array('banana', 'apple', 'pineapple')
//
// console.log(fruits[1]); //access values
// fruits[2] = 'orange'; //change values
//
// for (let index=0; index<fruits.length; index++){
//     console.log(fruits[index])
// }
//
// console.log('to string:', fruits.toString());
// console.log(fruits.join('.'));
// console.log(fruits, fruits.pop(), fruits); //remove last item
// console.log(fruits.push('berry'), fruits) //append item
// fruits[fruits.length] = 'new fruit'; //append alternative method
// fruits.shift(); //remove first element, expensive operation
// fruits.unshift('kiwi'); //add to beginning
// let vegetables = ['carrot', 'onion'];
// let allGroc = fruits.concat(vegetables);
// console.log(allGroc);
// console.log(allGroc.slice(1,4));
// console.log(allGroc.reverse());
// console.log(allGroc.sort());
//
// let someNumbers = [5,10,3,4,34,11];
// console.log(someNumbers.sort(function(a,b){return a-b}));
//  //regular sort will sort by first number
//
//  let emptyArray = new Array();
//  for (let num=0; num<10; num++){
//      emptyArray.push(num);
//  }
//  console.log(emptyArray);
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// Objects in Javascript (dictionaries in python)
// let student = {
//     first: 'Anuj',
//     last: 'Mittal',
//     age:27,
//     height:185,
//     studentInfo: function() {
//         return this.first + '\n' + this.last;
//     }
// }
// console.log(student.first, student['last']);
// student.first = 'Anuj2';
// console.log(student.first);
// student['first'] = 'Anuj';
// console.log(student.first);
// student.age++;
// console.log(student.studentInfo());
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// // Conditionals
// // && AND
// // || OR
// // if-else
// var age = 45 //let does not work with prompt
// if ((age >= 18) && (age <= 35)) {
//     status = 'target demo';
// }
// else {
//     status = 'not target demo';
// }
//
// //switch
// switch(0) {
//     case 0:
//         text = 'weekend';
//         break;
//     case 5:
//         text = 'weekend';
//         break;
//     case 6:
//         text = 'weekend';
//         break;
//     default:
//         text = 'weekday';
//         break;
// }
// console.log(text)
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// JSON
// cannot parse trailing commas
// cannot parse single quotes
