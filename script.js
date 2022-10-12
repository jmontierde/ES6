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


// Rest Operators
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

// const sbmt = document.getElementById('sbmt');
// sbmt.addEventListener('click', function() { 

// })
function countChar(){
    let lengths = document.querySelector('.length')
    let output = document.querySelector('.output');
    let countChar = document.getElementById('countChar').value;
  

    for(let i = 0; i < countChar.length; i++){
        output.textContent = countChar;
        lengths.textContent = countChar.length;
    }
}
countChar();



// let example = 'Dylan';
// console.log(example.padStart(10, 'Hi'));