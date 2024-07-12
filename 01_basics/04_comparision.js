// console.log(2 >1);
// console.log( 2>=1);
// console.log(2< 1);
// console.log( 2==1);
// console.log( 2!=1);

// console.log("2"> 1);//true typescript are not allow to compare two different data types
// console.log("02">1);//true

// console.log(null>0);//false
// console.log(null==0);//false
// console.log(null>=0);//true
/*
The reason is that an equality check == and comparison < > >= <=
work differently.
Comparison convert null to a number ,treating it as 0.
That's why(3) null >=0 is true and(1) null >0 is false.
*/
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined>=0);
console.log("2"==2)//true

//strictly check
console.log("2"===2)//false
