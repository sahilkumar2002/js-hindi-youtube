// const tinderuser= new Object()//{}
//singleton object 
const tinderuser={}//{}
//nonsingleton object
tinderuser.id="abc123"
tinderuser.name="sahilkumar"
tinderuser.isLoggedIn=false
// console.log(tinderuser);

const regularuser={
    email:"sahdfh@hgian.com",
    fullname:{
        userfullanme:{
            firstname:"sahil",
            lastname:"kumar"
        }
    
    }
}
// console.log(regularuser.fullname.userfullanme.lastname);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
      2:"c",
      3:"d"
}

// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);//  target ,source
                    //object   object
//The Object.assign() static method copies all enumerable own properties from one 
//or more source objects to a target object. It returns the modified target object.
// const obj3={...obj1,...obj2};
// console.log(obj3);
// // { '1': 'a', '2': 'c', '3': 'd' }


// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser))

// console.log(tinderuser.hasOwnProperty('isLoggedIn'));
//proeperty exist or not

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"sahil"
}
// course.courseInstructor
const {courseInstructor: instructor}=course
console.log(instructor);
// console.log(courseInstructor);





//desturcturing
// const navbar=({company})=>{
// }
// navbar(company="sahil")



// json se api call krna
// {
//     "name":"sahil",
//     "coursename":"js hindi youtube",
//     "price":"free"
// }

// [
//     {},
//       {},
//     {}
// ]