// console.log("Khushter Adeeb")

//var score = 34;
//var score = 56; // var gives prmission to redeclare  
//console.log( score)

//let points = 23; 
//console .log(points)    
   
// Constant value = 10;

//const value = 10;
//console.log(value)
//**************************************
 // Data Types of Value
 // 7 data Types 

 // Numbers 1,2,22,33,76,3.4

 // String "I am String , "34" , 'Also String'

 // Boolean true/False

 // Null Intentionally absense of value
// let score = null;
// score = 34;
// console.log(score)

// Undefined Variable declared but not initialised 

// let points;
// points = 13
// console.log(points)

// Object Complex Data Types

// Symbol looks like Object


/********************
STRING
*********************/

// console.log("Hi Adeeb")
//let firstName = "Khushter"
//let lastName = "Adeeb"
// console.log(firstName,lastName)
// STRING CANCATINATION *************
  
// METHOD 1 Using + Operator 
//  let fullName = firstName +" "+ lastName

// Method 2 Using Template litrals
//let fullName = `I want to become ${firstName} ${lastName}`
//console.log(fullName)

// Getting String Character *******
// console.log(firstName[2])

// STRING METHODS
// console.log(firstName.toUpperCase())
// console.log(lastName.indexOf("e"))

// Common String Methods********
//let hobbies = '    coding   reading running    ';
//let result = hobbies.trim()
// console.log(hobbies)
//console.log(result)

// indexOf
//console.log(result.indexOf("coding"))

// lastIndexOf
//console.log(result.lastIndexOf("sleeping"))


// INCLUDE METHOD 

//console.log(result.includes("reading"))
 
// let fullName = "WowProgrammer"

//console.log(fullName.slice(0,8)) // Excluding last one 0-8

//let result = fullName.slice(0,4) // last one 0-3

// *** IMP NOTE Does not Mutate original Array

// console.log("original String = ",fullName)
// console.log("Extracted String =",result)

 // ***** STRING SPLIT METHOD *****

//  let favriteColor = " Brown, Blue, Black, Gray";
//  let arrColors = favriteColor.split('  ');
//  console.log(arrColors) 


// ***** JAVASCRIPT STRING ARE IMUTABLE **********

//let str = "Hello";

// str[0] = "p";
// str[1] = "q";
// There will be no change in "str" variable
//console.log(str)

//str = str + "Programmer";

//console.log(str) // if you add previous String into new string then New String will be assigned 
//  into new memory location 



// ********** NUMBERS  ***************************

//let score = 50;

// console.log(score, typeof score)

// let result = score / 2; // give quotient
// let reult = score%2;  // give remainder

// **  MATHEMATICAL EXPRESSION  ***

 //let result = score *2 + (4*3) - 8 / 2 % 4;
 // Using PRIORITY anD PRECEDENCE
 // 1 () bracket (paranthesis)
 // 2 ** Power Operator
 // 3 * / % ( from left to reight)
 // 4 + - ( from left to right)

// console.log(result);

// CONCATENATION OF NUMBERS

// let resultline = 'My total score is ' + result;
// console.log(resultline);


// **** LOOSE EQUALITY (==) & STRICT EQUALITY OPERATOR (===)

// LOOSE EQUALITY OPERATOR ==
// let age = 22;
// console.log(age == "22") // focus only on value not on type
// console.log(age != "22")

// console.log(age === "22"); // focus on both value & its type 
// console.log(age !== "22")


// ******** TYPE CONVERSION. ***********

// let stringType = "54";
// console.log(stringType, typeof stringType);

// // NUMBER METHOD 

// let numberType = Number(stringType);
// console.log(numberType, typeof numberType);

// IMP NOTES
// IN number method passing string must be of numric values

// let numberType = 54;
//  console.log(numberType); 
// // STRING METHOD
// let stringType = String(numberType);
// console.log(stringType, typeof stringType);

// ***** BOOLEAN METHOD ********
//let age = " "; [Empty String will be false]
// let age =23;
// let booleanValueOfAge = Boolean(age);
// console.log("Boolean Value of Age is" , booleanValueOfAge);

// ******** ARRAY  ********************

//let dishes = ["Biriyani","chat","parathay"];
// Access
//console.log(dishes[2]);

// Modify the Array
// dishes[0] = "karhai";
//console.log(dishes);

// Array Methods
 
// JOIN METHOD
//console.log(dishes.join(' '))

// indexOf()
//console.log(dishes.indexOf("chat"));

// CONCAT METHOD
//let newDishes = ["Sweet-Dish"," Pani poori"];

//console.log(dishes.concat(newDishes)); 
//let updatedDishes = dishes.concat(newDishes);



// Length Method
//console.log(dishes.length)
//console.log(updatedDishes.length)

// Push Method
//console.log(updatedDishes.push("Bhallay")) // return new length
//console.log(updatedDishes);

// POP Method
//console.log(dishes.pop)
//console.log(dishes)

// Method Returning Boolean Values
//let email = "user@gmail.com";
//let booleanValue = email.includes("@"); // Returns true if "@" is found in the string
//console.log(booleanValue);


// Comparision operators always return boolean values
// let number1 = 33;
// console.log(number1 == "33") //true
// console.log(number1 === "33") // true
// console.log(number1 != "333") // true
// console.log(number1 <= "333") // true
// console.log(number1 >= "23") // true







