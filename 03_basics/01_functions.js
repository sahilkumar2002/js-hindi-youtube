function Saymyname(){
console.log("s");
console.log("a");
console.log("h");
console.log("i");
console.log("l");

}
// Saymyname();
// Saymyname();
// Saymyname();

// function AddTwoNumber(a,b){//parameters
//     let c=a+b;
//     console.log(c);
// }
// AddTwoNumber(100,78);//argument

function addTwoNumber(num1,num2){
    //  let result= num1+num2
     return num1+num2;
     console.log("sahil");//not executed
}
const result=addTwoNumber(1434,30);
// console.log("result is",+result);

// function loginusermessage(username="sam"){//sam is loggedin
//     return `${username} log in user`
// }
// console.log(loginusermessage("sahil"));
// // sahil log in user
// //when not any value pass
// console.log(loginusermessage());//important
// //undefined log in user



// function loggedin (username){
//     if(username===undefined){
//         console.log("please enter the name");
//     }
//     else{
//         console.log(`${username} user islogged in`);
//     }
// }
// console.log(loggedin("sahil"));


/*function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(32,44,34,34));
//only print 32
*/



/*

//so we use rest operator
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(32,45,45,56))
//[ 32, 45, 45, 56 ]
*/


/*
function calculateCartPrice(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice(32,45,45,56))
//[ 45, 56 ]
*/
const user={
    username:"sahil",
    price:999//change the price to prices so problem occurs
}
function handleObjects(anyObject){
//   console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`);
}
//handleObjects(user);
//username is sahil and the price is undefined
handleObjects({
    username:"sahil kumar",
    price:3434
})
//username is sahil kumar and the price is 3434

const arry=[100,344,434,9898]
function ReturnSecondElement(getValue){
    return getValue[1];
}
//console.log(ReturnSecondElement(arry))
console.log(ReturnSecondElement([100,344,434,9898]))

