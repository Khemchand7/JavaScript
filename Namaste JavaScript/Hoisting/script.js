// What is Hoisting?
// Hoisting is phenomenon is JS by which you can access variables and functions even before you have initialized.

//Scenario 1
var x = 7;
function getName(){
  console.log("Namaste Javascrit")
}
getName();//function invocation will print Namaste Javascript
console.log(x);// 7

//Scenario 2

getName();//Namaste Javascript ==>kyuki memore allocation me pura function memory me tha
console.log(x);//Undefined ==> memory to allocate hui hai magar value initialized nhi hui
console.log(getName)//ƒ getName(){console.log("Namaste Javascrit")}
var x = 7;
function getName(){
  console.log("Namaste Javascrit")
}



//Scenario 3
getName();// error => getName is not a function because arrow functions behave like a normal variable
console.log(x);

var x = 7;
var getName = () => {
  console.log("Namaste Javascrit")
}

  //Scenario 4

console.log(x);//Undefined
console.log(getName);//undefined
getName();//error => getName is not a function because this function definition behave like a normal variable

var x = 7;
var getName = function() {
  console.log("Namaste Javascrit")
}

    //Scenario 4

console.log(x);// Not defined because referernce x is not defined 
console.log(getName);//undefined
getName();//error => getName is not a function because this function definition behave like a normal variable


var getName = function() {
  console.log("Namaste Javascrit")
}