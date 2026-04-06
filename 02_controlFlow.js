//console.log("Khushter Adeeb"); 

// **** CONTROL FLOW *****

// **For Loops**. - infinite loops in case we miss the conditional statement
// Run the specific task 5 times

//  for(let i = 1; i <= 5; i++){
//      console.log("I am a programmer", i)
//  }

// Uage of for loops
 
// let dishes = ["Biryani", "Pulao", "Korma", "Nihari", "Haleem"];
    
// for(let i = 0; i < dishes.length; i++){
//     console.log(dishes[i]);
// }

// itration and Value of i
// 0,1,2,3 and so on



// *** WHILE LOOPS *** ( - Get Error - Conditional statement is mandatory in while loops   )

// let j = 1;
// while(j<=5)
// {
//     console.log(j);
//     j++
// }

// let dishes = ['biriyani','pulaO','korma', 'kabab','daleem'];
// let k = 0;
// while(k<dishes.length){
//     console.log(dishes[k]);
//     k++;
// }


// *** DO WHILE LOOPS *** 
//  let j = 1;
// do{
//     console.log("Atleast run one time", j);
// j++;
// }while(j<=1) Condition false already

//. * "if", "if else", "else if" & nested if Statements *

  // let hotelPrice = 8000;
  // if(hotelPrice > 7000){
  //   console.log("we will eat");
  //   if (hotelPrice > 3000){
  //     console.log("budget is ok");
  //     if(hotelPrice>9000){
  //       console.log("forget party");
  //     }
  //   }
  // }
  // else if(hotelPrice >3000){
  //   console.log("we will not eat");
  // }
  // else {
  //   console.log(" we don't have budget");
  // }
  
  
  
  
  
  
    //  Break and continue Statements 
    // Also called as JUMP STATEMENT 
    
    //  continue *
    // for(let i = 1; i<=10; i++){
    //   if(i==5){
    //     continue;// move forward the next StopIteration
    //   }console.log("Value of i = ", i);
    // }
  
  
  // BREAK
  // used to terminate the loop controll tranfer from outside
  
  // for(let i= 1; i <=10; i++){
  //   if (i ==5){
  //     console.log(" our desired value is ",i);
  //     break;
  //   }
  //   console.log("value of i =", i);
  // }
  //     console.log("now we are out of loop");


  
  // *LOGICAL OPERATOR *
  // ADD &&,  OR || , NOT !
  
  //let password = "@Adeeb1";
  
  // if(password.length > 5 && password.includes('@')){
  //   console.log("Password is strong")
    
  // }else{
  //   console.log(" change your Password");
  // }
  
  // if(password.length > 9 || password.includes('z')){
  //   console.log("Password is strong")
    
  // }else{
  //   console.log(" change your Password");
  // }
  
  // * NOT OPERATOR. (.! ) ***
   
  // let status = false;
  // if(!status){
  //   console.log(" Your status is = ", status)
  // }

//  // Example
// let result = true && true || false && !false  
// result = true && true || false && true
// result = true || false && true
// result true && true
// console.log(result);

// VARIABLE AND BLOCK SCOPE

// Scope is the area where a variable is defined or accessible.

// let score = 99;   //Global Scope

// if(true){

//   let score = 77; //Block Scope

//   console.log(score); // Nearest value of score is 77
// }

// ternary Operators (? , :)
 
//let age =40;
//let weight = 9  0;
// if(age > 31){
//   console.log("Qualify");
// }else{
//   console.log("fail");
// }

// Single line Solution
 
// let result = age > 31 ? weight > 80 ? "qualify" :" weightIssue " : "fail";
//console.log(result); 


//**** SWITCH STATEMENT *****/
// It is used in compatitive " conditional" statements.

// let currentDate = new Date();

// // let weekDay = currentDate.getDay(); // 0 to 6

// let age = 15;

// switch(age){
// case 15 :
// case 16 :
// case 17 :
// result = "These ages are allowed to in the exam ";
//    break;

//    default:
//     result = "Not Allowed"
//  

// }

// If there is no Break statement than next next case will be executed
//console.log(day)













