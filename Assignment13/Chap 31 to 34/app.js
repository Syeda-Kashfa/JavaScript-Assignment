// // QUESTION NO#1

 let today= new Date();

// document.write(`<h1>Today Dte and Time: ${today}</h1><hr/>`);

// // QUESTION NO#2
// let month=today.getMonth()
// console.log(month);

// const months = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// document.write(`<h1>Current Month: ${months[month]}</h1><hr/>`);

// // QUESTION NO#3
// let day=today.getDay();
// console.log(day);

// let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// document.write(`<h1>Today is ${days[day].slice(0,3)}<hr/>`)

// // QUESTION NO#4
// let dayFun=today.getDay();

// let day1 = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// for(i=0; i < day1.length; i++){
//   console.log(dayFun);
  
// if(dayFun===i|| dayFun===i){
// document.write(`<h1>${day1[dayFun]}:It's a Fun day </h1><hr/>`)
// break
// }
// else{
//    document.write(`<h1>${day1[dayFun]}It's a working day</h1><hr/>`) 
//    break
// }}

// // QUESTION NO#5
// let date=today.getDate();
// console.log(date);
// if(date<=15){
//   document.write(`<h1>First fifteen days of the month</h1>`)
// }
// else{
//   document.write(`<h1>Last days of the month</h1><hr>`)
// }

// QUESTION NO#6
// let totalsec=today.getTime();
// //console.log(totalsec);
// let totalMinutes=Math.round(totalsec/1000/60);
// console.log(totalMinutes);

// document.write(`<h1>Current Date: [${today}].<br>Elapsed millisecond since January 1, 1970: [${totalsec}]Millisecond.<br>Elapsed minutes since January 1, 1970: [${totalMinutes}]Minutes</h1><hr/> `);


// QUESTION NO#7

// let hour=today.getHours();
// //console.log(hour);

// if(hour<=12){
//     document.write(`<h1>It's AM</h1>`)
// }
// else{
//     document.write(`<h1>It's PM</h1> `)
// }

// QUESTION NO#8
// let laterDate=new Date("31 december 2025")
// document.write(`<h1>Later Date: ${laterDate}`)

// QUESTION NO#9
// let ramadan=new Date("1 march 2025");
// let ramadanSec=ramadan.getTime()
// //console.log(ramadanSec);

// let todaySec=today.getTime();
// //console.log(todaySec);

// let diff=todaySec - ramadanSec;
// let day=Math.round(diff/(1000*60*60*24));
// //console.log(day);
// document.write(`<h1>${day}: days have passed since 1st, Ramadan, 2025</h1>`)

// QUESTION NO#10
// let year=new Date("1 jan 2025");
// let year1=new Date("5 dec 2025");
// let diff= year1-year
// console.log(diff);
// let sec=diff/1000;
// console.log(sec);

// document.write(`<h1>On reference date ${year1} [ ${sec} ]second had passed since beginning of ${year}</h1>`);

// QUESTION NO#11

// let currentDate=new Date();
// let hourAgo=new Date();
// //console.log(hourAgo);

// hourAgo.setHours(currentDate.getHours()-1);
// document.write(`<h1>Current Date: ${currentDate}<br>1 Hour ago:it was  ${hourAgo}</h1>`);


// QUESTION NO#12
// let now=today;
// let laterYear=new Date();
// laterYear.setFullYear(today.getFullYear()-100)

// // console.log(now);
// // console.log(laterYear);
// document.write(`<h1> Current Date: ${now}<br/>100 Years back, It was: ${laterYear}</h1>`)


// QUESTION NO#13
// let userAge=Number(prompt("Whats ypur age?"));

// let birthYear=today.getFullYear() -userAge;
// //console.log(birthYear);
// document.write(`<h1>Your age is ${userAge}<br>Your birth year is ${birthYear}</h1>`)

// QUESTION NO#14:a
// let customerName="Syeda Kashfa";

// // QUESTION NO#14:b
// let currentMonth=today.getMonth();
// let months = [
//    "January", "February", "March", "April", "May", "June",
//    "July", "August", "September", "October", "November", "December"
//  ];
// //console.log(months[currentMonth]);

// // QUESTION NO#14:c
// let noOfUnits=410;

// // QUESTION NO#14:d
// let chargesPerUnit=16;

// // QUESTION NO#14:e
// let netAmount=noOfUnits * chargesPerUnit;

// // QUESTION NO#14:f
// let latePaymentCharges=350;

// // QUESTION NO#14:g
// let grossAmount=netAmount +latePaymentCharges;

// document.write(`<h1>K-Electric Bill</h1>Customer Name: <strong>${customerName}</strong><br/>Month: <strong>${months[currentMonth]}</strong><br/>Number of Units: <strong>${noOfUnits}</strong><br/>Charges per Unit: <strong>${chargesPerUnit}</strong><br/>Net Amount Payable(Within Due Date): <strong>${netAmount}</strong><br/>Late Payment Charges: <strong>${latePaymentCharges}</strong><br/>Gross Amount Payable(After Due Date): <strong>${grossAmount}</strong><br/>`)


