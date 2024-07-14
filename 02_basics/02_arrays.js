const marvel_heoros=["spiderman","Ironman","Thor"]
const DC_heoros=["superman","flash","batman"]

// marvel_heoros.push(DC_heoros);
// // console.log(marvel_heoros)
// //[ 'spiderman', 'Ironman', 'Thor', [ 'superman', 'flash', 'batman' ] ]
// //array ke andr arrays
// //consider array as single element
// //[ 'spiderman', 'Ironman', 'Thor', [ 'superman', 'flash', 'batman' ] ]
// //    0          1           2        3     
// console.log(marvel_heoros[3][1])//flash



// const allhero=marvel_heoros.concat(DC_heoros);
// console.log(allhero);

const allhero=[...marvel_heoros,...DC_heoros]
// console.log(allhero)
//spread the element 
// kaach ka glass leker jamin pr phek diya to gilas spread ho gya

const another_array=[1,2,3,[4,5,6],[4,5],[1,3,4,3,9]]
const real_another_array=another_array.flat(Infinity);
console.log(another_array);
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.





/*  convert to the arrays */
console.log(Array.isArray("sahil"))
//false
// is not a array that why rerurn false
console.log(Array.from("sahil"))
// convert the array into the string
// /[ 's', 'a', 'h', 'i', 'l' ]
console.log(Array.from({name:"sahil"}))//intersting
//output []

let score1=100
let score2=200
let score3=400
console.log(Array.of(score1,score2,score3));
//[ 100, 200, 400 ]