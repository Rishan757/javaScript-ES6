
// const Number = [22,56,78,45,36,50];

// let minValue = Math.min(...Number);
// let maxValue = Math.max(...Number);

// document.querySelector("#demo").innerHTML = "Min = " + `${minValue}` + "<br>" + "Max = " + `${maxValue}`;


// const array1 = [1,2,3];
// const array2 = [4,5,6];
// const array3 = [...array1, ...array2];

// document.querySelector("#demo").innerHTML = array3;

// const y1 = ["jan", "Feb", "March"];
// const y2 = ["April", "May", "Jun"];
// const y3 = ["July", "August", "September"];
// const y4 = ["Octobor", "November", "December"];

// const year = [...y1, ...y2, ...y3, ...y4];

// document.querySelector('#demo').innerHTML = year;


// let info1 = {
//     name : "Rishan Ahmed",
//     age:  21,
// }

// let info2 = {
//     nationality : 'Bangladesh',
//     occupation  : 'student',
// }

// let information = {...info1, ...info2};

// console.log(information);

// function personal(name,age){
//   return{
//     name,
//     age,
//   }

// }

//   console.log(personal('Rishan',21));


// let message = {
//    body(){
     
//     return `Hi i am return function`;

//    }
// }

// console.log(message.body());

// const cars = ["BMW", "VOLVO", "TOYATA"];

// let text = "";

// for(let x of cars){
//    text = text + x + "<br>";
// }

// document.querySelector("#demo").innerHTML = text;

// let language = "JAVASCRIPT";

// let text = "";

// for(let x of language){
//    text += x + "<br>";
// }

// document.getElementById("demo").innerHTML = text;

// let students = {
//    name : 'Rishan Ahmed',
//    Roll : 635061,
//    cgpa : 3.50,
//    district : 'Jashore'
// }

// for(let x in students){
//    console.log(`${students[x]}`);
// }

// let bestPlayer = {
//     Barcelona : 'Leonel Messi',
//     Realmadrid : 'Cristiano',
//     Mancity   : 'Aguero',
//     Psg       : 'Mbappy',
//     Santos    : 'Neymar'
// }


// for(let best in bestPlayer){
//    text = "best player in";
//     console.log(`${text},${best},${bestPlayer[best]}`);
// }


// let numbers = [41,25,56,80,15];

// let text = "";

// numbers.forEach(myFunction);

// function myFunction(value , index, array){
//    text+= array + "<br>";
// }

// document.querySelector("#demo").innerHTML = text;

// let numbers = [10,30,40,50];

// numbers.forEach(function(x,index,array){
//    array[index] = x*5;
// });

// console.log(numbers);

// let numbers = [1,2,3,4];

// let resulet  = numbers.map(num => num*2);

// console.log(`${resulet}`);

// let users = [
//    {id:1,name:'Rishan'},
//    {id:2,name:'Karim'}
// ];

// let names = users.map(users => users.name);

// console.log(`${names}`);


// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let even = numbers.filter(num => num%2===0);

// console.log(`${even}`);

// let users = [
//   {name: "Rishan", age: 20},
//   {name: "Karim", age: 15}
// ];

// let adults = users.filter(user => user.age >= 18);

// console.log(adults);

// let products = [
//    {name:"Mobile", price:15000},
//    {name:"Laptop", price:50000},
//    {name:"Tablet", price:20000}
// ];

// let cheapProducts = products.filter(p => p.price<30000);

// let productNames = cheapProducts.map(p => p.name);

// console.log(productNames);

// let students = [
//   { name: "Rishan", marks: 85 },
//   { name: "Karim", marks: 45 },
//   { name: "Rahim", marks: 72 },
//   { name: "Sakib", marks: 30 }
// ];

// let highMarks = students.filter(m => m.marks>50);

// let talentName = highMarks.map(m =>m.name);

// console.log(talentName);

// let products = [
//   { name: "Mobile", price: 10000, inStock: true },
//   { name: "Laptop", price: 50000, inStock: false },
//   { name: "Tablet", price: 15000, inStock: true },
//   { name: "Camera", price: 25000, inStock: true }
// ];

// let result = products
// .filter(p => p.price<20000 && p.inStock)
// .map(p => p.name.toUpperCase());


// console.log(`${result}`);

// function add(a,b){
//   return a+b;
// }
// console.log(add(10,20));



// const add1 = (x,y) => x * y;
// console.log(add1(10,20));

// const numbers = s => s;
// console.log(numbers(10));


// let students = [
  
//    {
//       id:101,
//       name: 'sagor',
//       gpa: 2.65
//    },

//       {
//       id:102,
//       name: 'Maliha',
//       gpa: 4.50
//    },

//       {
//       id:103,
//       name: 'Rishan',
//       gpa: 3.65
//    },

//       {
//       id:104,
//       name: 'Milkan',
//       gpa: 2.70
//    },
// ]

// let studentName = students
// .filter(s => s.gpa>3).map(s => s.name);
// console.log(studentName);


// const person = {
//    fristName : 'Rishan',
//    lastName : 'Ahmed',
//    age :      21,
//    eyeColor : "brown"
// };

// const {fristName,age,lastName,eyeColor} = person;

// document.getElementById("demo").innerHTML = (`${fristName} ${lastName} is ${age} years old. And his eye color is ${eyeColor}`);


// const fruits = ["Banana", "Apple", "Orange", "Mango"];


// const [fruit1,fruit2] = fruits;

// document.getElementById("demo").innerHTML = fruit1 + " " + fruit2;
