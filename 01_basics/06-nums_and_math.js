const number=400;
const balance = new Number(100);
// console.log(number);
// console.log(balance);
// console.log(balance.toString().length);//convert into string and string leght is 3
// console.log(balance.toFixed(2));//100.00
// console.log(balance.toFixed(1));//100.0
const otheNumber= 123.8996
// console.log(otheNumber.toPrecision(3))//124
const otheNumber_1= 12.8996
// console.log(otheNumber_1.toPrecision(3))//12.9
const otheNumber_2= 1123.8996
// console.log(otheNumber_2.toPrecision(3))//1.12e+3
const otheNumber_3= 123.8996
// console.log(otheNumber_3.toPrecision(4))//123.9
const hundards=1000000
// console.log(hundards.toLocaleString());
//1,000,000 give the american standard value in dollar$
// console.log(hundards.toLocaleString('en-IN'));
//10,00,000 give the hundard value in indian standard


//++++++++++++++++++++++++Maths++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.5));//5
// console.log(Math.ceil(4.5));//chose the upper value means larger values as possible 4.5 to 5
// console.log(Math.floor(5.9));
// //chose lawest value   5.9 to 5
// console.log(Math.min(3,4,53,43,2));//2
// //give the minimum value
// console.log(Math.max(3,4,2,4,5,6,6));//6
//give the maximum value

console.log(Math.random());// only gives the value between 0 and 1
console.log(Math.random()*10+1)//value one se upper so values gives between 1-9
console.log(Math.floor(Math.random()*10)+1);//gives the value floor values

const min=10
const max=20
console.log(Math.floor(Math.random()*(max- min +1))+min)//it sis the formula
//give the value grater then ten beacause min is added
