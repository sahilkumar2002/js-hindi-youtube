//arrays
const myarr=[0,1,2,3,4]
// console.log(myarr);
// console.log(myarr[0])
const myHeros=["shaktiman","naagraj"]
const myArr2=new Array("spiderman","thor","hulk","BlackWidow");
// console.log(myArr2);

//Array methods
// myArr2.push(1);
// console.log(myArr2);
// myArr2.pop();
// myArr2.unshift(9);
//add the 9 in the first index
//[ 9, 'spiderman', 'thor', 'hulk', 'BlackWidow' ]
// console.log(myArr2)
// myArr2.shift()
// console.log(myArr2);
//remove the first element in index


// console.log(myArr2.includes(3));//false
// console.log(myArr2.includes("thor"));//true
//return true or false values



// console.log(myArr2.indexOf("thor"));//1
// //return the index value

// const newArr= myArr2.join()
/*
join bind the arrays
and convert into the string
*/
// console.log(myArr2);
//[ 'spiderman', 'thor', 'hulk', 'BlackWidow' ]
// console.log(newArr);
// //spiderman,thor,hulk,BlackWidow
// console.log(typeof newArr);

// const newn1=myArr2.slice(1,2)
// console.log(myArr2)
// console.log("A",newn1)

// const newn2=myArr2.splice(1,2)
// console.log("B",myArr2)
// console.log(newn2);

const myn1= myarr.slice(1,3)
console.log(myn1)
console.log("b",myarr)


const myn2=myarr.splice(1,3);
console.log("c",myarr);
console.log(myn2);
//splice manipulate the original array
//but slice doesn't manipulate the original array

