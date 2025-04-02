// function sayHello() {
//     let you = prompt("What's your name? ");
//     console.log("Hello", you + "!");
// }
// sayHello();

// let varContainingFunction = function(){
//     let varInFunction = "I'm in a function.";
//     console.log("hi there!",varInFunction);
// };
// varContainingFunction();

// function tester(para1, para2){
//     return para1 + " " + para2;
// }
// const arg1 = "argument 1";
// const arg2 = "argument 2";
// console.log(tester(arg1,arg2));


// let add= function(num1 , num2){
//     console.log(num1+num2);
// }
// add(5,7);
// num1=parseInt(prompt("enter first number:"));
// num2=parseInt(prompt("enter second number:"));
// add(num1,num2);

// let add= function(x=2, y=3) {
//     console.log(x+y)
// }
// add(2,9,1,2);    //discard the extra values

//arrow functions are great for sending functions around as parameters and using shorter notations


// let arrowFunc = x => console.log(x);
// arrowFunc("hello");

// let addTwoNumbers = (x,y) => console.log(x+y);
// addTwoNumbers(5,3);

// const arr= ["squirrel","alpaca","buddy"];
// arr.forEach(e => console.log(e));

// let spread=["so","much","fun"];
// let message=["javascript", "is",...spread,"and","very","powerful"];
// console.log(message)

// function addTwoNumbers(x, y) {
//     console.log(x+y);
// }
// let arr=[5,9];
// addTwoNumbers(...arr);

// function addFourNumbers(x, y, z, a) {
//     console.log(x+y+z+a);
// }
// let arr1=[5,9];
// let arr2=[6,7];
// addFourNumbers(...arr1,...arr2);

function someFunction(para1, ...para2) {
    console.log(para1, para2);
}
someFunction("hi","there","how are you");
