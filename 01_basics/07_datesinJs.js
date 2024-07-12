//Dates
let myDate= new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);//object

// let myCreatedDate =new Date(2023,0,3)
//months start with  0 in javaScript 
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// let myCreatedDate =new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleDateString());


// let myCreatedDate =new Date("2024-07-12")//yy-mm-dd
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate =new Date("02-14-2024");
// console.log(myCreatedDate.toLocaleString());
let myTimeStamp =Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))

let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getMonth());
// `${newDate.getDay()} and the time`
newDate.toLocaleString('default',{
    weekday:"long",
   

})