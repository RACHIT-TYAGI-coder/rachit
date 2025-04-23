//class
//  class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
//  }
//  let obj = new ClassName("args1","args2");
//  console.log(obj.prop1);
//  console.log(obj.prop2);

// class Dog {
//   constructor(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
// }
// } 
// let dog= new dog ("javascript",2.4,"brown","chihuahua")
// console.log(dog.dogName,"is a",dog.breed, "and weight",dog.weight,"kg");


//CLASSES(it should be started with the capital letters)
//   class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;

//     }
// }
// let p=new Person("Rachit","tyagi");
// console.log(p.firstName,p.lastName);

// class Person{
//     constructor(firstName,lastName="Tyagi"){
//         this.firstName=firstName;
//         this.lastName=lastName;

//     }
// }
// let p=new Person("Rachit");
// console.log(p.firstName,p.lastName);

//functions on the classes are called methods 
// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
//     greet(){
//         console.log("hi there! i'm",this.firstName);
//     }
// }
// let p=new person("Rachit","van putten")
// p.greet();

// //PROPERTIES
// class Person{
//     #firstname;
//     #lastname;

// constructor (firstname, lastname){
//     this.#firstname=firstname;
//     this.#lastname=lastname;
// }
// }
// let p= new Person("Maria","saga");
// console.log(p.firstname);

// constructor(firstname,lastname){
//     if (firstanem.startsWith("M")){
//         thia.#firstname=firstname;
//     } else{
//         this.#firstname="M"+firstname;
//     }
//     this.#lastname=lastname;
//     console.log(p.firstname)
// }
//let r = new Person("kay","Moon");
// class Person{
//     #firstname;
//     #lastname;
//     constructor (firstname, lastname){
//         this.#firstname=firstname;
//         this.#lastname=lastname;
//     }

// get firstname(){
//     return this.#firstname;
// }
// set firstname(firstname){
//     this.#firstname=firstname;
// }
// get lastname(){
//     return this.#lastname;
// }
// set lastname(firstname){
//     this.#lastname=lastname;
// }
// }
// let p = new Person("Maria","Saga");
// console.log(p.firstname);

//INHERITANCE
// class Vehicle{
//     constructor(color,currentSpeed,maxSpeed){
//         this.color=color;
//         this.currentSpeed=currentSpeed;
//         this.maxSpeed=maxSpeed;
//     }
//     move(){
//         console.log("moving at",this.currentSpeed);
//     }
//     accelerate(amount){
//         this.currentSpeed+=amount;
//     }
// }

// class Motorcycle extends Vehicle{
//     constructor(color,currentSpeed,maxSpeed,fuel){
//         super(color,currentSpeed,maxSpeed);
//         this.fuel=fuel;
//     }
//     doWheelie(){
//         console.log("Driving on one wheel!");
//     }
// }
//     let motor = new Motorcycle("Black",0,250,"gasoline");
//     console.log(motor.color);
//     console.log(motor.fuel);
//     motor.accelerate(50);
//     motor.move();
    //we con not acess any motorcycle specific properties or methods in our class

    //PROTOTYPES
    // A Prototype is the mechanism in javascript that makes it possible to have objects. when norhing 
    // class Person{
    //     constructor(firstName,lastName="Tyagi"){
    //         this.firstName=firstName;
    //         this.lastName=lastName;
    //     }
        
    //     greet (){
    //         console.log("Hi there!");
    //     }
    // }

    // Person.prototype.introduce=function(){
    //     console.log("Hi,I'm",this.firstname);
    // };
    // Person.prototype.favoriteColor="green";

    //inheritance  classes can have child classes that inherit the properties and methods from parent class.

    // class vehicle{
    //     constructor(color, currentSpeed, maxSpeed){
    //         this.color=color;
    //         this.currentSpeed=currentSpeed;
    //         this.maxSpeed=maxSpeed;
    //     }
    //     move(){
    //         console.log("moving at",this.currentSpeed)
    //     }
    //     accelerate(amount){
    //         this.currentSpeed += amount;
    //     }
    // }
    
    // class Motorcycle extends vehicle{
    //     constructor(color, currentSpeed, maxSpeed, fuel){
    //         super(color,currentSpeed,maxSpeed);
    //         this.fuel=fuel;
    //     }
    //     doWheelie(){
    //         console.log("driving on one wheel!");
    //     }
    // }

    // let motor = new Motorcycle("black", 0, 250, "gasoline");
    // console.log(motor.color);
    // motor.accelerate(50);
    // motor.move();





    //Protoypes    

    // class person{
    //     constructor(firstname, lastname){
    //         this.firstname=firstname;
    //         this.lastname=lastname;

    //     }
    //     greet(){
    //         console.log("hi there");
    //     }
    // }
    // person.prototype.introduce = function(){
    //     console.log("Hi","I'm",this.firstname);
    // };
    // person.prototype.favoritecolor="green"