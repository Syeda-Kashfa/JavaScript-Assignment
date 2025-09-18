// QUESTION NO#1
// let a =+prompt()

// document.write(`<h4>Result</h4><br/>The value is a:${a}<br/>___________________<br/><br/>`)
// ++a
// document.write(`The value of ++a is:${a}<br/>
//     Now the value a is:${a}<br/><br/>`)
//     a++
//     document.write(`The value of a++ is:${11}<br/>
//     Now the value is:${a}<br/><br/>`)
//     --a
//     document.write(`The value of --a is:${a}<br/>
//     Now the value is:${a}<br/><br/>`)
//     a--
//     document.write(`The value of a--is:${11}<br/>
//     Now the value is:${a}<hr/>`)

// QUESTION NO#2
//  let a= 2;

// let b= 1;

// // let result = --a - --b + ++b + b--;
// //               1  - 0 + 1 +1 = 3
// // console.log(result)
// // Pre-Decrement of a
// // --a
// --a;
// document.write(`variable of a orignal value is (2) but cause of pre decrement now the value of a is (1) So check the answer is <strong>Ans:${a}</strong><br/><br/>`)
// // --a - --b
// // Pre-Decrement of b
// --b;
// document.write(`variable of b orignal value is (1) but cause of pre decrement now the value of b is (0) So check the answer is <strong>Ans:${b}</strong><br/><br/>`)
// // --a - --b + ++b
// // Pre-Increment
// ++b;
// document.write(`Previous value of variable b is (0) but cause of pre increment now the value of b is (1) So check the answer is <strong>Ans:${b}</strong><br/><br/>`)
// // --a - --b + ++b + b--;
// // Post-Decrement
// b--;
// document.write(`Previous value of variable b is (1) but cause of post decrement now the value of b is (0) but this time value is (1) if we use b is so value is (0) So check the answer is <strong>Ans:${b}</strong><br/><br/>
//     a:1;<br/>
//     b:0;<br/>
//     result:3`)


// QUESTION NO#3
// let userName=prompt("Enter your name")
// console.log(userName)
// alert(`Welcome for this page`)


// QUESTION NO#4
// is not given

// QUESTION NO#5
// let table= +prompt("Enter a number")
// let num = 5;
// let muliplyBy = 1

// if (table==0){
//     document.write(`<h1>Table of 5</h1>`)
//     document.write(`5x1= ${num * muliplyBy}<br>`)
//     muliplyBy++
//     document.write(`5x2= ${num * muliplyBy}<br/>`)
//     muliplyBy++
//     document.write(`5x3= ${num * muliplyBy}<br/>`)
//     muliplyBy++
//     document.write(`5x4= ${num * muliplyBy}<br/>`)
//     muliplyBy++
//     document.write(`5x5= ${num * muliplyBy}<br/>`)
//     muliplyBy++
//     document.write(`5x6= ${num * muliplyBy}<br/>`)
//     muliplyBy++
//     document.write(`5x7= ${num * muliplyBy}<br/>`)
//     muliplyBy++
//     document.write(`5x8= ${num * muliplyBy}<br/>`)
//     muliplyBy++
//     document.write(`5x9= ${num * muliplyBy}<br/>`)
//     muliplyBy++
//     document.write(`5x10= ${num * muliplyBy}<br/>`)
// }
// else{
//     document.write(`<h1>Table of 10</h1>`)
//     document.write(`${table}x1= ${table * muliplyBy}<br/>`)
//     muliplyBy++
//     document.write(`${table}x2= ${table * muliplyBy}<br/>`)
//      muliplyBy++
//     document.write(`${table}x3= ${table * muliplyBy}<br/>`)
//      muliplyBy++
//     document.write(`${table}x4= ${table * muliplyBy}<br/>`)
//      muliplyBy++
//     document.write(`${table}x5= ${table * muliplyBy}<br/>`)
//      muliplyBy++
//     document.write(`${table}x6= ${table * muliplyBy}<br/>`)
//      muliplyBy++
//     document.write(`${table}x7= ${table * muliplyBy}<br/>`)
//      muliplyBy++
//     document.write(`${table}x8= ${table * muliplyBy}<br/>`)
//      muliplyBy++
//     document.write(`${table}x9= ${table * muliplyBy}<br/>`)
//      muliplyBy++
//     document.write(`${table}x10= ${table * muliplyBy}<br/>`)
// }

// QUESTION NO#6:a

let subject1=prompt("Enter your first subject ")

let subject2=prompt("Enter your first subject ")

let subject3=prompt("Enter your first subject ")


// QUESTION NO#6:b
let totalMarksEach = 100;
let totalMarks = 300;


// QUESTION NO#6:c
let obtainedMarksSub1 = +prompt("Enter your first subject obtain marks")


// QUESTION NO#6:d
let obtainedMarksSub2 = +prompt("Enter your second subject obtain marks")

let obtainedMarksSub3 = +prompt("Enter your third subject obtain marks")

let totalObtainedMarks = obtainedMarksSub1 + obtainedMarksSub2 + obtainedMarksSub3

// QUESTION NO#6:e
document.write(`<h1>Marksheet in Table</h1>
    <table border=1><tr>
    <th>Subject</th>
     <th>Total Marks</th>
      <th>Obtained Marks</th>
       <th>Percentage%</th>
    </tr>
    <tr>
    <td>${subject1}</td>
     <td>${totalMarksEach}</td>
      <td>${obtainedMarksSub1}</td>
      <td>${(obtainedMarksSub1/totalMarksEach)*100}%</td>
    </tr>
      <tr>
    <td>${subject2}</td>
     <td>${totalMarksEach}</td>
      <td>${obtainedMarksSub2}</td>
      <td>${(obtainedMarksSub2/totalMarksEach)*100}%</td>
     
    </tr>
      <tr>
    <td>${subject2}</td>
     <td>${totalMarksEach}</td>
      <td>${obtainedMarksSub3}</td>
      <td>${(obtainedMarksSub3/totalMarksEach)*100}%</td>

    </tr>
    <tr>
    <th></th>
    <th>${totalMarks}</th>
    <th>${totalObtainedMarks}</th>
    <th>${(totalObtainedMarks/totalMarks)*100}%</th>
    </tr>
    </table>`)
  
