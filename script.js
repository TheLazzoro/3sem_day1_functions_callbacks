// Function Declaration
       //Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

// Function Expression
var sub = function(n1,n2){
  return n1 - n2
} 

// Callback example
var cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+" and "+n2+" = "+callback(n1,n2);
};

/*
*******************************
***********CALLBACKS***********
*******************************
*/

console.log("--------------------------------------");

// 1)

// 1- What will this print?
// console.log(add(1,2))
// Answer: 3

// 2- What will it print and what does add represent?
// console.log(add("hund"))
// Answer: hundundefined
// console.log("Write the answer here!");
  console.log("");
  console.log("EXERCISE 2:");
  console.log("hundundefined");

  // 3- What will it print  
// console.log(add(1,2,3));
console.log("");
console.log("EXERCISE 3:");
// Answer: syntax error
 console.log(add(1,2,3));
 // I was wrong :/


// 4- What will it print 
// console.log(add(1));
console.log("");
console.log("EXERCISE 4:");
// Answer: 1 or syntax error
 console.log(add(1));
 // closer than last time. 


// 5- What will it print  
// console.log(cb(3,3,add));
console.log("");
console.log("EXERCISE 5:");
// Answer: Result from the two numbers: 3 and 3 = 6
 console.log(cb(3,3,add));
// I was right :)


// 6- What will it print
// console.log(cb(4,3,sub));
console.log("");
console.log("EXERCISE 6:");
// Answer: Result from the two numbers: 4 and 3 = 1
 console.log(cb(4,3,sub));
// I was right again :)


// 7- What will it print and what was the problem?
// console.log(cb(3,3,add()));
// console.log("Write the answer here!");
console.log("");
console.log("EXERCISE 7:");
// Answer: It will throw an error, because it will attempt to pass in a function call, rather than the name.
// console.log(cb(3,3,add()));
// I was right again again :)


// 8- What will it print
// console.log(cb(3,"hh",add));
console.log("");
console.log("EXERCISE 8:");
// Answer: Result from the two numbers: 3 and hh = 3hh
console.log(cb(3,"hh",add));
// I was right again again :)


// 2)
// TODO: 

// 3)
// TODO:

/*
********************************************
***Callbacks(with map,filter and forEach)***
********************************************
*/

console.log("--------------------------------------");

// 1)
// TODO:

// 2)
// TODO:

// 3)
// TODO:

// 4)
// TODO:

// 5)
// TODO:

/*
*******************************
********Error Handling*********
*******************************
*/

console.log("--------------------------------------");

// 1)
// TODO:

/*
*******************************
****Asynchronous Callbacks*****
*******************************
*/

console.log("--------------------------------------");

// 1)
// TODO:


/*
********************************
*************this***************
********************************
*/

console.log("--------------------------------------");

// 1)
// TODO:

// 2)
// TODO:

// 3)
// TODO:

// 4)
// TODO:
