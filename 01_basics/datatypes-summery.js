 //Primitive
 // 7types : String , Number , Boolean, undefined, Null, Sysmbol,BigInt
//reference (Non Primitive)
//Array ,Objects ,Functions
let StudentName="sahil"
let Number=123
let gaurav =true
let hello;
let outsideTemprature = null

const id=Symbol('123')
const anotherId = Symbol('123');
console.log(id  == anotherId);

// const BigNumber=323243434346876878767689787n
//**********************non Primitive *******************/
const heros=["spiderman","ironman", "thor","hulk","loki","captain america"];
let obj={
    name:"sahil",
    age: 22,
}
console.log(obj)
 

// const Myfunction= function(){
//     console.log("hello world");
// }
// Myfunction();
// console.log(typeof id);//symbol
// console.log(typeof outsideTemprature );//object
// console.log(typeof gaurav);//boolean
// console.log(typeof outsideTemprature);//object (null)
// console.log(typeof Myfunction);//function
// console.log(typeof obj);//object


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive),Heap memory(Non-Primitive)
// Primitive data types are stored in the stack memory 
//and the reference data types are stored in the heap memory
let myYoutubeName="gssstydio.com"
let anotherName=myYoutubeName
anotherName="GKBvines"
console.log(myYoutubeName);//gssstydio.com
console.log(anotherName); //GKBvines

let userOne={
    email:"dadf@google.com",
    upi:"user@byl"
}
let userTwo=userOne;
userTwo.email="sahil@google.com"
 console.log(userOne.email)//sahil@google.com
 console.log(userTwo.email)//sahil@google.com