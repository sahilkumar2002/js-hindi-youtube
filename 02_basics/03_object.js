//singleton
//object.create

const mysym=Symbol("key1");

//object literal
const JsUser={
   name:"sahil",
   age:18,
   [mysym]:"perfectkey1",//symbol acess
   mysym:"perimerykey",
   loction:"jaipur",
   "fullname":"sahil kumar",
   isLoggedIn:false,
   email:"sahil@gmail.com",
   LastLoginDays:["monday","tuesday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);//special case
// console.log(typeof (JsUser.mysym));//string
// console.log(typeof [mysym]);//object 


// JsUser.email="ajat@google.com"
// console.log(JsUser);
// Object.freeze(JsUser)
// JsUser.email="djfkjfkdj";
// console.log(JsUser);


JsUser.greeting= function(){
    console.log("hello jsuser");
}
JsUser.greetingtwo= function(){
    console.log(`hello js user,${this.name}`);
}



console.log(JsUser.greeting);//function reference
console.log(JsUser.greeting());//return function
console.log(JsUser.greetingtwo());//refer name
