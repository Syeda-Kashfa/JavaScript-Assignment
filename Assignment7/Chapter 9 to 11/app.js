// QUESTION NO#1

// let userCity = prompt("Enter your city")

// if (userCity==="Karachi" || userCity==="karachi"){
//     alert("Welcome the city of lights")
// }

// QUESTION NO#2

// let gender = prompt("Enter your gender")

// if(gender==="Male"){
//     alert("Good Morning sir")
// }
// else if (gender==="Female"){
//     alert("Good Morning Ma'am")
// }

// QUESTION NO#3

// let color = prompt("Enetr color of road signals")

// if (color==="Red"){
//     alert("Must Stop your vehicle")
// }
// else if(color==="Yellow"){
//     alert("Ready to Move")
// }
// else if(color==="Green"){
//     alert("Move Now")
// }

// QUESTION NO#4

// let fuel = prompt("Check your fuel")

// if (fuel < 0.25){
//     alert("Please refil the fuel in your car")
// }

// QUESTION NO#5:a
// let a = 4

// if (++a===5){
//     alert("Given condition for variale (a) is true because of that pre increment perform")
// }

// // QUESTION NO#5:b
// let b = 82
// //given value "b" is 82

// if(b++ ===83){
//      alert("Given condition for variale (b) is false reason is post increment")
// }

// QUESTION NO#5:c
// let c = 12
// //given value "c" is 12

// if(c++===13){
//     alert("Condition (c1) is false")
// }
// else if(c===13){
//     alert("Condition (c2) is true") 
// }
// else if(++c<13){
//     alert("Condition (c3) is true") 
// }
// else if(c===14){
//     alert("Condition (c4) is true") 
// }

// QUESTION NO#5:d
// let materialCost = +prompt("Enter material cost")
// // material cost  is 20000
// let labourCost = +prompt("Enter labour cost")
// // labour cost  is 2000
// let totalCost = materialCost + labourCost

// if (totalCost===22000){
//     alert("You are condition is true")
// }
// // QUESTION NO#5:e
// if(true){
//     alert("True")
// }

// // QUESTION NO#5:f
// if(false){
//     alert("False")
// }
// if("car"< "cat"){
//    console.log("Car is smaller than cat")
//    console.log(`"c vs c: same" "a vs a: same" "r=114 , t=116 ASCII code" so the r is smaller than t`)
// }

// QUESTION NO#6
// let subject1 = prompt("Enter you Subject");
// let subject2 = prompt("Enter you Subject");
// let subject3 = prompt("Enter you Subject");
// let obtainMarks1 = + prompt("Obtain marks of your Subject");
// let obtainMarks2 = + prompt("Obtain marks of your Subject");
// let obtainMarks3 = + prompt("Obtain marks of your Subject");
// let totalEachMarks = 100;
// let totalMarks = 300;
// let obtainedTotal = obtainMarks1 + obtainMarks2 + obtainMarks3;
// let percentage =(obtainedTotal/totalMarks)*100;
// let percentageSub1 =(obtainMarks1/totalEachMarks)*100;
// let percentageSub2 =(obtainMarks2/totalEachMarks)*100;
// let percentageSub3 = (obtainMarks3/totalEachMarks)*100;
// let grade;
// let remarks;

// document.write(`<table border=1>
//     <tr>
//     <th>Subject</th>
//     <th>Obtained Marks</th>
//     <th>Total Marks</th>
//     <th>Percentage%</th>
//    </tr>

//     <tr>
//     <td>${subject1}</td>
//     <td>${obtainMarks1}</td>
//     <td>${totalEachMarks}</td>
//     <td>${percentageSub1}%</td>
//     </tr>
//     <tr>
//     <td>${subject2}</td>
//     <td>${obtainMarks2}</td>
//     <td>${totalEachMarks}</td>
//    <td>${percentageSub2}%</td>
//     </tr>
//      <tr>
//      <td>${subject3}</td>
//      <td>${obtainMarks3}</td>
//      <td>${totalEachMarks}</td>
//     <td>${percentageSub3}%</td>
//     </tr>
//      <tr>
//      <td></td>
//      <td></td>
//      <td></td>
//     <td>Less than 60</td>
//     </tr>
    
//     <tr>
//      <td></td>
//      <th>${obtainedTotal}</th>
//      <th>${totalMarks}</th>
//     <th>${(obtainedTotal/totalMarks)*100}%</th>
//     </tr>
//     </table>`)
   


//     if (percentage>=80){
//    grade="A-One";
//    remarks="Excellent";
  
// }
// else if (percentage>=70){
//   grade="A";
//   remarks="Good";
// }
// else if (percentage>=60){
//   grade="B" ;
//  remarks="You Need to improve";
// }
// else if (percentage<60){
//   grade="Fail" ;
//  remarks="Sorry";
// }
//     document.write(`<h1>Mark Sheet</h1>
//         Total Marks:${totalMarks}<br/><br/>
//         Marks Obtained:${obtainedTotal}<br/><br/>
//         Percentage:${(obtainedTotal/totalMarks)*100}%<br/><br/>
//         Grade:${grade}<br/><br/>
//         Remarks:${remarks}`)

// QUESTION NO#7
// let secretNumber = 4;
// let guessNumber = +prompt(`Enter a Secret number:\nBetween (1-10)`);

// // QUESTION NO#7:a
// if(guessNumber===secretNumber){
//   alert("Hurrah!Correct Answer")
// }
// // QUESTION NO#7:b
// else if (++secretNumber===guessNumber){
//   alert("Yeah!Close enough to the Correct Answer")
// }
// else{
//   alert("Sorry!Wrong Answer")
// }

// // QUESTION NO#8
// let numb = +prompt("Enter the number is divisible by 3 or not:")
// if (numb %3===0){
//   alert(`( ${numb} ) : Is divisible by 3`)
// }
// else{
//   alert(`( ${numb} ) : Is not divisible by 3`)
// }

// QUESTION NO#9

// let number = +prompt("Enter the number")

// if (number % 2===0){
//   alert(`${number} : Given input is EVEN number `)
// }
// else{
//   alert(`${number} : Given inpit is ODD number `)
// }

// QUESTION NO#10
// let temperature = +prompt("Enter the temperature");

// if(temperature>40){
//   alert("It's to HOT outside")
// }
// else if(temperature>30){
//   alert("The weather today is NORMAL")
// }
// else if(temperature>20){
//   alert("Today's weather is COOL")
// }
// else if(temperature>10){
//   alert("OMG! Today's weather is so COOL")
// }
// else{
//   alert("Please stay inside your homes because there is freezing cold outside ")
// }

// QUESTION NO#11:a
// let num1 = +prompt("Enter the first Number");
 
// // QUESTION NO#11:b
// let num2 = +prompt("Enter the second Number");

// // QUESTION NO#11:b
// let operator = prompt("Choose your operation \n +, -, *, /, %");

// // QUESTION NO#11:c
// if(operator==='+'){
//   alert(num1 + num2)
// }
// else if(operator==='-'){
//   alert(num1 - num2)
// }
// else if(operator==='*'){
//   alert(num1 * num2)
// }
// else if(operator==='/'){
//   alert(num1 / num2)
// }
// else if(operator==="%"){
//   alert(num1 % num2)
// }
// else{
//   alert("Sorry! Invalid input")
// }

