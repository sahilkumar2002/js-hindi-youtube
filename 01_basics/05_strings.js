const name="sahil"
const repoCount=50
//console.log(name + repoCount +"Value"); older 
console.log(`Hello my name is ${name} and my repo  count is ${repoCount}`);

const gameName= new String("hello my name is gaurav");
console.log(gameName)
const watashino ="sahiru--hc";
//[String: 'hello my name is gaurav']
// console.log(gameName[0]);//h
// console.log(gameName.__proto__);//{}
// console.log(gameName.length);
console.log(gameName.toUpperCase());//HELLO MY NAME IS GAURAV
console.log(gameName.charAt(6));//m
console.log(gameName.indexOf('g'));
console.log(watashino.indexOf('h'));

 const newString=gameName.substring(0,5);//not give negative values 
 console.log(newString);
 const anotherString=gameName.slice(0,10);//here we give negative values
 console.log(anotherString);

const newString_1= "    sahil     "
console.log(newString_1);
console.log(newString_1.trim());

const url="https://sahil.com"
console.log(url.replace('s','-'))//http-://sahil.com
console.log(url.includes('sahil'));//true

console.log(url.split('-'));
const TrimStart= new String('     jarvis');
const TrimEnd= new String('     jarvis      ');
console.log(TrimStart.trimStart());//jarvis it's trim the start part 
console.log(TrimEnd.trimEnd());//it trim the end part 
console.log(TrimEnd.trimStart().trimEnd());//it's trim both side
const valueOfd=new String("sahil dsd");
console.log(valueOfd.valueOf());
console.log(gameName.replaceAll('gaurav', 'anita'));
console.log(gameName.substr(1,2));
console.log(gameName.substr(4));
