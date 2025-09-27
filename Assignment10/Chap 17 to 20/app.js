// QUESTION NO# 1

// let = [];


// // QUESTION NO# 2

// let matrix = [ [0,1,2,3],[1,0,1,2],[2,1,0,1] ];

// for(let i=0; i <3; i++){
//     for(j=0; j< 4; j++){
//         document.write(`<b>${matrix[i][j]} </b>`)     
//     }
//     document.write(`<br><br/>`)
// }

// // QUESTION NO# 3

// document.write(`<h1>Numeric Counting</h1>`)
// for (let i=1; i<=10; i++){
//     document.write(`<h2>${i}</h2>`)
// }

// QUESTION NO# 4

// let userTable= +prompt("Enter a number to show it's multiplication table");

// let userNum= +prompt("Enter length multiplication table")

// document.write(`<h1>Multiplication Table of ${userTable}<br>Length ${userNum}<br></h1>`);
// for (let i=1 ; i <= userNum; i++){
//     document.write(`<h2>${userTable}x${i}=${userTable*i}</h2>`)
// }

// QUESTION NO# 5
// let fruits = ["Apple", "Banana", "Mango", "Orange","strawberry"];

// for (let i=0; i<fruits.length; i++){
//     document.write(`<h2>${fruits[i]}</h2>`)
    
   
// }
// document.write(`<hr/>`)
// for (let i=0; i<fruits.length; i++){
//     document.write(`<h2>Element at index ${i} is ${fruits[i]}</h2>`)
// }

// // QUESTION NO# 6:a
// document.write(`<h1>Counting:</h1>`)
// for(let i=1; i<=15; i++){
//     document.write(`${i}, `)
// }
// // QUESTION NO# 6:b
// document.write(`<h1>Reverse Counting:</h1>`)
// for(let i=10; i>=1; i--){
//     document.write(`${i}, `)
// }
// // QUESTION NO# 6:c
// document.write(`<h1>Even Number:</h1>`)
// for(let i=0; i<=20; i++){
//     if(i%2===0){
//     document.write(`${i}, `)}

// }

// // QUESTION NO# 6:c
// document.write(`<h1>Odd Number:</h1>`)
// for(let i=0; i<=20; i++){
//     if(i%2===1){
//     document.write(`${i}, `)}

// }

// // QUESTION NO# 6:d
// document.write(`<h1>Even Number:</h1>`)
// for(let i=0; i<=20; i++){
//     if(i%2===0){
//     document.write(`${i}, `)}

// }
// // QUESTION NO# 6:e
// document.write(`<h1>Series:</h1>`)
// for(let i=2; i<=20; i++){
//     if(i%2===0){
//     document.write(`${i}k, `)}
// }

// QUESTION NO# 7

// let item = ["Cake", "Apple pie","Chips","Cookie","Patties"];
// let userItem = prompt("Welcome to Birbel bakery!..What do you want Sir/Ma'am?");
// let flage = false ;
// for(let i=0 ; i < item.length; i++ ){
//     if(userItem===item[i]){
//     document.write(`<h1>${userItem} is available at index ${i} in our bakery</h1>`)
//      alert(`${userItem} is available at index ${i} in our bakery`)
//      flage=true;
//     }
// }

// if(flage===false){
//     document.write(`<h1>We are Sorry! ${userItem} is not available in our bakery</h1>`)
//     alert(`We are Sorry! ${userItem} is not available in our bakery`)
// }

// // QUESTION NO# 8
// let numb = [12,23,14,15,34,87,34,90,54,54,22,17];
// let max = numb[0];
// for(let i=0; i< numb.length; i++){
//     if(max <  numb[i]){
//     max=numb[i] }
// }
// document.write(`<h2>Array Items: (${numb}) `)
// document.write(`<h2>The Largest number is: (${max}) `)

// // QUESTION NO# 9

// let numb1 = [12,23,14,15,34,87,9,6,54,54,22,17];
// let min = numb1[0]
// for (let i=0; i < numb1.length; i++){
//     if(min > numb1[i]){
//         min=numb1[i] }
// }

// document.write(`<h2>Array Items: (${numb1}) `)
// document.write(`<h2>The Smallest number is: (${min}) `)

// // QUESTION NO# 10

// document.write(`<h1>Multiples of 5 Ranging</h1>`)
// for (let i=1; i<=100; i++){
//     if(i%5===0){
//         document.write(`( <b>${i}</b> ) , `)
//     }
// }