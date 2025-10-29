// QUESTION NO#1

// let power=(a,b)=>{
//     let num=a**b
//     return num
// }

// let a=Number(prompt("Enter your number"));
// let b=Number(prompt("Enter your poower"));
// let answer=power(a,b);
// document.write(`<h1>The value is: ${a}<sup>${b}</sup><br> Answer is: ${answer}</h1>`);

// QUESTION NO#2

// let leapYear = () => {
//     let userInput=Number(prompt("Enter you current"));
//     switch (userInput) {
//         case 2000:
//             alert(`It's a leap year`)
//             break;
//         case 2004:
//             alert(`It's a leap year`)
//             break;
//         case 2008:
//             alert(`It's a leap year`)
//             break;
//         case 2012:
//             alert(`It's a leap year`)
//             break;
//         case 2016:
//             alert(`It's a leap year`)
//             break;
//         case 2020:
//             alert(`It's a leap year`)
//             break;
//         case 2024:
//             alert(`It's a leap year`)
//             break;
//         case 2028:
//             alert(`It's a leap year`)
//             break;
//         case 2032:
//             alert(`It's a leap year`)
//             break;
//         default:
//             alert("It's not a leap year")
//     }

// }

// leapYear();

// QUESTION NO#3

// let area=(aS,bS,cS)=>{
//     let S=valueS(aS,bS,cS);
//     let area=S*(S-a)*(S-b)*(S-c);
//     return area

// }
// let valueS=(a,b,c)=>{
//     let S=(a+b+c)/2;
//     return S;
// }
// let a=Number(prompt("Enter length `a`"));
// let b=Number(prompt("Enter length `b`"));
// let c=Number(prompt("Enter length `c`"));
// let result=area(a,b,c);
// let finalAns=Math.sqrt(result)

// document.write(`<h2>The area of triangle is:</h2><h1>The answer is: ${finalAns.toFixed(2)}</h1>`)


// QUESTION NO#4

// let main = () => {
//     let sub1 = Number(prompt("Enter your First subject marks"));
//     let sub2 = Number(prompt("Enter your Second subject marks"));
//     let sub3 = Number(prompt("Enter your Third subject marks"));
//     let total = Number(prompt("Enter your total marks"))
//     let average = averg(sub1, sub2, sub3);
//     let percentage = percnt(sub1, sub2, sub3, total)
//     document.write(`<h1>The average number is: ${average.toFixed()}</h1>
//     <h1>The percentage is: ${percentage.toFixed(2)}%</h1>`);
// };

// let averg = (a, b, c) => {
//     let avrg = (a + b + c) / 3
//     return avrg

// }
// let percnt = (a, b, c, totl) => {
//     let prcnt = ((a + b + c) / totl) * 100;
//     return prcnt
// }

// main();

// QUESTION NO#5

// let indexOf=(word,char)=>{
//     let num;
//     for(let i=0; i < word.length;i++){
//         if(word[i]===char){
//             num=i

//         }

//     }
//     return num
// }
// let str=prompt("Enter your string");
// let index=prompt("Enter's which your character you find index number ")
// let res=(indexOf(str,index));
// document.write(`<h1>Your string is:${str}:<hr>Your finding character is:${index}:<hr>Your Index number [${index}] is:${res}:</h1>`);

// QUESTION NO#6

// let dltVowels = (userSntnc) => {
//     let result = "";
//     for (let i = 0; i < userSntnc.length; i++) {

//         if (userSntnc[i] === "a" || userSntnc[i] === "e" || userSntnc[i] === "i" || userSntnc[i] === "o" || userSntnc[i] === "u" || userSntnc[i] === "A" || userSntnc[i] === "E" || userSntnc[i] === "I" || userSntnc[i] === "O" || userSntnc[i] === "U") {
//         }

//         else if (userSntnc.length > 25) {
//             alert(" Sentence is not more than 25 character long")
//             break
//         }
//         else {
//             result += userSntnc[i]
//         }

//     }
//     return result
// }
// let sentence = prompt("Enter any sentence");
// let final = dltVowels(sentence);
// document.write(`<h2>Your input is: ${sentence}</h2><h1>Without vowels is: ${final}</h1>`);

// QUESTION NO#7
// let strng = "Pleases read this application and give me gratuity";
// let recevied = [];
// let count=0;


// let find=()=>{
//     let aplabet= strng.toLowerCase().split("");
// for (let i = 0; i < aplabet.length; i++) {
//     let first = aplabet[i];
//     let second= aplabet[i+1]
//     console.log(first);
//     console.log(second);
//     if(findVowels(first) && findVowels(second)){
//         count++
//         let twoVowel=first+second;
//         recevied.push(twoVowel) ;
//     }
//     }
//     return count
// }
// function findVowels(aplabet) {
//     switch (aplabet) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true;
//         default:
//             return false
//     }

// }
// let result = find(strng);
// document.write(`<h1>String: ${strng}</h1><hr>`);
// document.write(`<h1>Count: ${result}</h1><hr>`);
// document.write(`<h1>Occurrence: ${recevied}</h1>`);


// QUESTION NO#8

// let distance=Number(prompt("Enter dictance to one city to another cityin KM"));
// let meter=(dis)=>{
//     let metr=dis*1000;
//     document.write(`<h1>Distance between one city to another city is:${distance}Kilo-Meter<hr>Distance between one city to another city is: ${metr}Meter</h1>`)
// };
// let feets=(dis)=>{
//     let feet=dis*3281;
//     document.write(`<h1>Distance between one city to another city is: ${feet}Feets</h1>`)
// }
// let inches=(dis)=>{
//     let inch=dis*39370;
//     document.write(`<h1>Distance between one city to another city is: ${inch}Inches</h1>`)
// }
// let centimeters=(dis)=>{
//     let centimtr=dis*100000;
//     document.write(`<h1>Distance between one city to another city is: ${centimtr}Centimeter</h1>`)
// };
// meter(distance);
// feets(distance);
// inches(distance);
// centimeters(distance);


// QUESTION NO#9;
// let workingHours=Number(prompt("Enter your working hours"));
// let overTimeHour=12;
// let overTime;
// let overTimePay;


// if(workingHours >40){
//     overTime=workingHours-40;
//     overTimePay=overTime*overTimeHour;
//     document.write(`<h1>Your overtime cost is: ${overTimePay}</h1>`)
// }
// else{
//     document.write("<h1>You don't have over time hours</h1>")
// };

// QUESTION NO#10;
// let withdrawAmount=parseInt(prompt("Enter amount o withdrawn"));
// document.write(`<h2>Your Ammount is: ${withdrawAmount}</h2>`)
// let thousand=Math.floor(withdrawAmount/1000);
// withdrawAmount=withdrawAmount % 1000;

// let hundred=Math.floor(withdrawAmount/100);
// withdrawAmount=withdrawAmount % 100;

// let fifty=Math.floor(withdrawAmount /50);
// withdrawAmount=withdrawAmount % 50;

// let twenty=Math.floor(withdrawAmount/20);
// withdrawAmount=withdrawAmount % 20;
// let ten=Math.floor(withdrawAmount / 10)
// console.log(hundred,fifty,twenty,ten);

// document.write(`<h1>You will have ${thousand} Thousand notes ${hundred} Hundred notes ${fifty} Fifty notes ${twenty} Twenty notes ${ten} Ten note</h1>`)



