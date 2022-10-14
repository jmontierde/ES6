// Destructing Objects
// It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables. But the array itself is not modified.
// const personalInformation = { 
//     firstName: 'Jayson',
//     lastName: 'Montierde',
//     city: 'Navotas',
//     age: 19,
// };

// const {firstName: fn, lastName: ln} = personalInformation; // It can reassign the value using : value
// console.log(`${fn} ${ln}`);


// // Destructing Array 
// let [firstName, middleName, lastName] = ['Jayson', 'M.', 'Caburatan'];
// firstName = 'Jason'; // You can override the value
// console.log(`${firstName} ${lastName}`);

//Object Literals

// function addressMaker(city, state) {
//     const newAddress = {city,state};
//     console.log(newAddress);
// }
// addressMaker('Austin', 'Texas');

// Object Literals with Object Deconstruction
// function addressMaker(address){
//     const{city, state, country} = address;  // Destructing Objects
//     const newAddress = {    //Object Literals
//        city,
//        state,
//        country: 'Philippines'
//     }
//     console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`);
// }
// addressMaker({city: 'Navotas', state: 'Philippines'});


// For of Loop

// let incomes = [10000, 20000, 30000];
// let total = 0;
// for(const income of incomes){ // Iterable
//     total += income;
// }
// console.log(total)

// Spread Operator
// let example1 = [1,2,3,4];
// let example2 =[...example1]; // You can take the value of other variable
// example2.pop();
// console.log(example2);

// Restructuring
// let names = 'Everest';
// let height = 8848;
// let output  = function(){
//     console.log(`Mt. ${this.names} is ${this.height} meter tall`);
// }

// let adventureClimbing = {names, height,output};
// adventureClimbing.output();


// let adventureClimbing = {
//     names: 'Everest',
//     height: 8848,
//     output(){
//         console.log(`Mt. ${this.names} is ${this.height} meter tall`);
//     }
// };
// adventureClimbing.output();

// Spread and Rest Operators
// let day = { 
//     breakfast: 'toast with milk',
//     lunch: 'Adobo'
// } 
// let night = { 
//     dinner: 'Noodles'
// }

// const food = {...day, ...night}; // Produce a new object
// console.log(food);
// Rest
// let rivers = ['Sunkoshi', 'Tamakoshi', 'Saptakoshi'];
// let [first, ...rest] = rivers;
// console.log(rest);
// let arr = [1,2,3,4,5];
// const arrTest = [...arr] = arr;
// let total = 0; 

// for (const arrs of arrTest){ 
//     total += arrs;
//     console.log(total);
// }

// function add(...nums){
//     let total = 0;
//     for(const num of nums){
//         total += num;
//     }
//     console.log(total);
// }
// add(2,12,32,12,23);

//Arrow Function

// function add(...num){
//     let total = num.reduce((x,y) => x + y);
//     console.log(total)
// }
// add(1,2,3,4,5)

// Reduce 

// const num = [1,2,3,4,5];

// num.reduce((total, nums) => {
//     return totalNum = total + nums
// }, 0);
// console.log(totalNum);

// For Each
// function add(numArray = [1,2,3,4,5]){
//     let total = 0;
//     numArray.forEach(element => {
//         total += element;
//     });
//     console.log(total);
// }
// add();

//Include
// const numArray = [1,2,3,4,5]; //It returns boolean true or false;
// console.log(numArray.includes(1));

// Let and Const 
// if(false){
//     let example = 5;
// }
// console.log(example);
// const example = []; // You can add value using push in const 
// example.push(5); // We can modify array and object but it cannot override it.
// console.log(example);


//Import and Export
// export const data = [1,2,3,4,5]; // add type = 'module' when you're importing

// padStart() and padEnd()

// let example = 'Dylan';
// console.log(example.padStart(10, 'Hi')); //It will add from the beginning of the string

// let example = 'Dylan';
// console.log(example.padEnd(10, 'Hi')); //It will add from the end of the string

// let countChar = document.getElementById('countChar');
// countChar.addEventListener('keyup', function(e){
//     e.preventDefault();
//     let count = document.getElementById('count');
//     count.textContent = `Character Count: ${countChar.value.length}`;
// })
// Challenge padStart() and padEnd()
// let example = 'https://www.youtube.com/watch?v=nZ1DMMsyVyI&t=2180s';
// console.log(example.padStart(100));
// console.log(example.padEnd(1));

// Classes
// export class Animal { 
//     constructor(type, legs){
//         this.type = type;
//         this.legs = legs;
//     }
//     makeNoise(sound = "Loud"){
//         console.log(sound);
//     }
//     get metaData(){
//         return `Type: ${this.type} Legs: ${this.legs}`
//     }

//     static return10(){ // static is you don't need to instantiate to call it
//         return 10;
//     }
// }

// export class Cat extends Animal { 
//     // constructor(type, legs, tail){
//     //     super(type,legs);
//     //     this.tail = tail;
//     // }
//     makeNoise(sound = 'meow'){
//         console.log(sound);
//     }
// }


// Trailing Commas // Not required to use
// function add(para1,){
//     const example = {
//         name: 'jayson',
//     };
//     console.log(example);
// }
// add();

// Async & Await
// const apiURL = 'https://jsonplaceholder.typicode.com/todos/1';

// function getURL(){
//     return new Promise(res => {
//         setTimeout(() => {
//             res(apiURL);
//         }, 3000);
//     });
// }
// getURL().then((data) => {
//     console.log(data);
// });

// async function getURL(){
//     const res = await fetch(apiURL);
//     const data = await res.json();
//     console.log(data);
// }

// let fetchPromise ='https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

// function getApi(){
//     fetch(fetchPromise)
//     .then((res) => res.json())
//     .then((data) => {
//         data.forEach(test => {
//             console.log(test.name);
//         });
//     })
// }
// getApi()

// Sets
// const example = new Set([1,1,1,1,2,2,2,2,4]);
// example.add(5);
// example.add(5).add(17);
// console.log(example.delete(5));

// console.log(example);


// this keyword
// let mount = {
//     mountains: ['Everest', 'Apo', 'Mayon'],
//     // add method
//     printWithDash: function(){
//         //console.log('inside printWithDasht' + globalThis);

//         setTimeout(() => {
//             console.log(this.mountains.join(" + "))
//             //console.log('inside setTimeout' + this);
//         }, 3000)
//     }
// }
// mount.printWithDash();
// // console.log(globalThis); // It refers to Window object 

// Classes constructor super
// function Holiday(destination, days){ 
//     this.destination = destination;
//     this.days = days;
// }
// Holiday.prototype.info = function() { 
//     console.log(this.destination + '|' + this.days + 'days');
// }
// let freeDay = new Holiday("Nepal", 18);
// console.log(freeDay.info());