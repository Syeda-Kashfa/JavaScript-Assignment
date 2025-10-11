// QUESTION NO #1

// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// let fullName = `${firstName } ${lastName}`;
// alert (`Welocome!Good Morning Sir/Ma'am ${fullName}`)

// QUESTION NO #2

// let userInput = prompt("What's your favourite mobile and model");
// let userLength = userInput.length;

// document.write(`<h1>My favourite phone is: ${userInput}</h1><br/><h2>Length of string: ${userLength}</h2>`);
 
// QUESTION NO #3
// let city = "Pakistani";
// let index = city.indexOf("n");
 
// document.write(`<h1>String: ${city}<br/></h1>`)
// document.write(`<h1>Index of "n" :${index}<br/></h1>`);

// // QUESTION NO #4
// let word = "Hello World";
// let index1 = word.lastIndexOf("l");

// document.write(`<h1>String: ${word}<br/></h1>`)
// document.write(`<h1>Index of "n" :${index1}<br/></h1>`);
  
// // QUESTION NO #5
// let word = "Pakistani";
// let index = word.charAt(3);

// document.write(`<h1>String: Pakistani</h1><br/><h2> Character at index 3: ( ${index} )</h2>`);

// QUESTION NO #6

//  let firstName1 = prompt("Enter your first name");
//  let lastName1 = prompt("Enter your last name");
//  alert(`Good After Noon Sir/Ma'am ${firstName1.concat(` `,lastName1)}`);

// QUESTION NO #7

// let city = "Hyderabad";
// let rep = city.replace("Hyder", "Islam");

// document.write(`<h1>City: ${city}</h1><h1>After replacement: ${rep}</h1>`)'

// QUESTION NO #8

// let message = `"Ali and Sami are best friends. They play cricket and football together"`;
// let replace = message.replaceAll("and", "&");

// document.write(`<h1>Message Before replacement:</h1> <b>${message}</b><br><h1>Message After replacement:</h1><b> ${replace}</b>`);

// QUESTION NO #9

// let str = "472";
// let numb = 472
// document.write(`<h1>Value: ${str}<br>Type: ${typeof(str)}</h1>
// <h1>Value: ${numb}<br>Type: ${typeof(numb)}</h1>`);

// QUESTION NO 10

// let user = prompt(`Enter your name`);
// let change = user.toUpperCase();
// document.write(`<h1>User Input: ${user}<br><hr>Change in Upper Case: ${change}</h1>`);

// QUESTION NO #11:FIRST WAY/METHOD

// let word = prompt(`Enter Your Name`);
// let index1= word.slice(0,1).toUpperCase();
// let otherAlphabets= word.slice(1);
// let cmplt =`${index1}${otherAlphabets}`;
//   document.write(`<h1>User Input: ${word}<hr>Title Case: ${cmplt}</h1>`);

// QUESTION NO #11:SECOND WAY/METHOD

// let word1=prompt("Enter any word");
// let final= word1.slice(0,1).toUpperCase() + word1.slice(1).toLowerCase();
// document.write(`<h1>User Input: ${word1}<hr>Title Case: ${final}</h1>`);

// QUESTION NO #11:THIRD WAY/METHOD

// let word = prompt(`Enter any words`);
// let store ;
// for (let i = 0; i < word.length; i++){
//    if(i===0){
//     store=word[i].toUpperCase();}

//     else{
//         store+=word[i];}
// }
//  document.write(`<h1>User Input: ${word}<hr>Title Case: ${store}</h1>`);


// QUESTION NO#12
// let num = "35.36";
// // let result= num.split(".")
// let result= num.replace(".","")
// document.write(`<h1>Number: ${num}<br>Result: ${result}</h1>`);

// QUESTION NO#13
// let user=prompt("Enter your Username");
// let flage=false;
// for(let i=0; i < user.length; i++){
//     let code = user.charCodeAt(i)
//     if(code===33|| code===44|| code===46|| code===64){
//         flage=true;
//         alert("Please enter a valid username")
//     }
// }

// QUESTION NO#14

// let user=prompt("Welcome to Cihan Sikandar Bakery! What do you want to order Sir/Ma'am?");
// let userCase =user.toLowerCase();
// let arr = ["cake","apple pie","cookie","chips","patties"];
// let flage=false;

// for(let i=0; i < arr.length; i++){
//     if(userCase===arr[i]){
//         flage=true;
//          document.write(`<h1>${userCase} is [availabe] at index ${i} in our bakery.</h1>`)
//         }}

//    if(flage===false){
//          document.write(`<h2>We are sorry. ${userCase} is [not availabe] in our bakery</h2> `)       
//     }

// // QUESTION NO#15
// let userPassword=prompt("Enter your password");
// let flageWord=false;
// let flageNum=false;
// let flageStart=false;
// let flageLenght=false;
// let flageSpeChar=false;

// if(userPassword.charCodeAt(0)>=48 && userPassword.charCodeAt(0)<=57){
//     document.write(`<h1>Your Password:${userPassword}<hr>Password cannot begin with a number!<br>Please inter a valid password</h1>`)
//     flageStart=true
    
// }
// else if(userPassword.length<6){
//     document.write(`<h1>Your Password:${userPassword}<hr> Password must at least 6 character long!<br>Please inter a valid password</h1>`)
//     flageLenght=true
    
// }
// for(i=0; i < userPassword.length; i++){
//     let code = userPassword[i].charCodeAt(0);
//     console.log(code);
//     if(code>=65 && code<=90){
//         flageWord=true;
//     }
// else if(code>=97 && code<=122){
//     flageWord=true;
// }
// else if(code>=48 && code<=57){
//     flageNum=true;
// }
// else if (code>=32 && code<=47){
//     flageSpeChar=true;
// }
    
// }
// if(flageNum===true && flageWord===true && flageLenght===false && flageStart===false && flageSpeChar===false){
//     document.write(`<h1>${userPassword}<br>Correct your password</h1>`)
//     console.log("Correct Password");
    
// }
// else{ 
//     if(flageNum===false){
//     document.write(`<h1>Your Password:${userPassword}<hr>Password must contain Alphabte and numbers!<br>Please inter a valid password</h1>`)
// }
//  else if(flageSpeChar===true) {
//      document.write(`<h1>${userPassword}<br>Cannot used speacial character in password like:@,$,.,^,#,!,<br>Please inter a valid password`)
//     console.log("incorrect");
    
//  }}

// QUESTION NO#16

// let str ="University of Karachi";
// //str=str.split("");
// //document.write(str);
// for(i=0; i< str.length; i++){
//     document.write(`<b>${str[i]}<br></b>`)
// }

// QUESTION NO#17

// let userWord=prompt("Enter any word");

// //console.log(userWord[userWord.length-1]);
// document.write(`<h1>User Input: ${userWord}<hr/> Last character of Input: ${userWord[userWord.length-1]}</h1>`);

// QUESTION NO#18
// let str="The quick brown fox jumps over the lazy dog";
// let newStr=str.toLowerCase();
// let count=newStr.match(/the/g)
// document.write(`<h1>Text: ${str}<hr/>There are ${count.length} occourrence(s) of word "the" `)

