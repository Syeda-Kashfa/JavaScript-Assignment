// QUESTION NO#1
// let date=()=>{
//       let today= new Date()
//   document.write(`<h1>${today}</h1>`)

// }
// date();

// QUESTION NO#2

// let greet=()=>{
//     let firstName=prompt("Enter your first Name");
//     let lastName=prompt("Enter your last Name");
//     alert(`Welcome Sir/Ma'am ${firstName} ${lastName}`)
// }
// greet();

// QUESTION NO#3

// let addition=()=>{
//     let num1=Number(prompt("Enter your first number"));
//     let num2=Number(prompt("Enter your second number"));
//     let result=num1+num2;
//     document.write(`<h2>The sum of your numbers is</h2><h1> ${result}</h1>`)
// }
// addition();

// QUESTION NO#4

// let calculator=(num1,operator,num2)=>{
//     if(operator==="+"){
//        return num1+num2

//       }
//     if(operator==="*"){
//         return num1 * num2

//     } 
//     if(operator==="/"){
//         return num1 / num2

//     } 
//     if(operator==="-"){
//         return num1 - num2

//     } 
//     if(operator==="%"){
//         return num1 % num2

//     } 
// }

// let userNum1=Number(prompt("Enter your first number"));
// let oprt=prompt("Enter your arithmetic operator");
// let userNum2=Number(prompt("Enter your second number"));
// let final=calculator(userNum1,oprt,userNum2)
// console.log(final);
// document.write(`<h3>Your Answer Is</h3><h1>${final}</h1>`)


/* console.log(calculator(12,"+",12));
 console.log(calculator(12,"-",10));
 console.log(calculator(12,"*",12));
 console.log(calculator(12,"/",4));
 console.log(calculator(12,"%",12));*/

// QUESTION NO#5
// let squares=(sqr)=>{
//     return sqr**2
// }
// let userInput=Number(prompt("Enter your number"));
// let result=squares(userInput);

// //console.log(result);
// document.write(`<h2>Your given number is: ${userInput}</h2><h1>Your Answer is: ${result}</h1>`);

// // QUESTION NO#6
// let factorial=(num)=> {
//     let fact = 1;
//     if (num ===1||num===0) {
//          document.write(`<h2>Your given number is: ${num}</h2><h1>Your answer is: ${fact}</h1>`)}

//     else {
//         for (let i = num; i > 1; i--) {
//             // console.log(num*i);
//             fact = fact * i

//         }
//         document.write(`<h2>Your given number is: ${userFact}</h2><h1>Your answer is: ${fact}</h1>`)
//     }

// }
// let userFact = Number(prompt("Enter your number"));
// factorial(userFact);


// QUESTION NO#7

// let counting=()=>{
//     let user1=Number(prompt("Enter your starting number?"));
//     let user2=Number(prompt("Enter your end number?"));
//     document.write("<h1>Your Counting is Here:</h1>")
//     for(let i=user1;i<=user2;i++){
//         //console.log([i]);
//         document.write(`<strong>${i}<strong><br>`)
        
//     }
// }
// counting();

// QUESTION NO#8

// let calculateHyp=(base ,per)=>{
//    let basE;
//    let peR;
//    let hyp;
//     function calculateSquare(numb){
//         numb= numb*numb;
//         return numb
//     }
//     basE=calculateSquare(base);
//     peR=calculateSquare(per);
//     hyp=basE+peR;
//     return hyp
    

// }
// let base=Number(prompt("Enter base of right angle triangle"));
// let per=Number(prompt("Enter perpendicular of right angle triangle"));
// let result=calculateHyp(base,per);
// let finalAnswer=Math.sqrt(result);


// document.write(`<h1>This is the answer is Hypotenuse of a right angle triangle: ${finalAnswer.toFixed(2)}</h1>`)

//QUESTION NO#9

// function calArea(width,height){
//     let area=width*height
//     return area
// }
// let userWidth=Number(prompt("Enter width of triangle"));
// let userHeight=Number(prompt("Enter height of triangle"));

// let result=calArea(userWidth,userHeight);
// document.write(`<h1>Your Answer is here:</h1><h2>${result}</h2>`)


// QUESTION NO#10

// let str=prompt("Enter your words");
// let reverse="";
// let palindrome=()=>{
//     for(let i=str.length-1;i>=0 ;i--){
//         console.log(str[i]);
//         reverse+=str[i]
//     }
//         if(str===reverse){
//             alert("it's palindrome")
//         }
//         else{
//             alert("it's not a palindrome")
//         }     
    
// }
// palindrome();


// QUESTION NO#11


// let capitalize=()=>{
//     let strng=prompt("Enter your sentence here");
//     let arr=strng.split(" ")
//     let convert=[];
//     for(let i=0; i<arr.length; i++){
//         convert.push(arr[i][0].toUpperCase()+arr[i].slice(1).toLowerCase());

//     }
//     //console.log(convert);
//     let finalString=convert.join(" ")
//     document.write(`<h3>Your input string is: ${strng}</h3><h1>Your converted string is: ${finalString}`)

// }

// capitalize();

// // QUESTION NO#12

// let longestWord=(word)=>{
//     let arr=word.split(" ");
//     let find=arr[0].length;
//     console.log(find);
    
//     for(let i=0; i<arr.length;i++){
//         if(find< arr[i].length){
//             find=arr[i]
//         }
//     }
//     return find
// }
// let word=prompt("Enter any sentence");
// let result=longestWord(word);
// document.write(`Your String is here: ${word}<br><strong>Expected output is: ${result}</strong>`)


// QUESTION NO#13

// let count =(string,letter)=>{
//     let findLetter=0;
//     for(let i=0 ; i <string.length;i++){
//         if(string[i]===letter){
//             findLetter+=1
//         }
//     }
//     return findLetter

// }
// let string=prompt("Enter your string");
// let lettter=prompt("Enter your letter of occurrence")
// let result=count(string,lettter);
// //console.log(result);
// document.write(`Your string is: ${string}<br>String's letter occurrence is: <strong>${result}</strong>`)

// QUESTION NO#14

// let calcCircumference=(givenNum)=>{
//     let circmfrnce=2*3.14*givenNum;
//     return circmfrnce

// }
// let calcArea=(givenNum)=>{
//         let area=3.14*(givenNum*givenNum)
//         return area
// }
// let givenNum=Number(prompt("Enter number for finding circumference and area"))
// let resultCircumference=calcCircumference(givenNum);
// let resultArea=calcArea(givenNum);
// document.writeln(`<h2>The Circumference of circle is 2πr is:</h2><h1>${resultCircumference}</h1>
// <h2>The Area of circle is πr2 is:</h2><h1>${resultArea}</h1>`);




//--------------------------------------END-----------------------------------------