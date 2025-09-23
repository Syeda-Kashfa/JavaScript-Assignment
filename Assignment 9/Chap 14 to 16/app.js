// QUESTON NO # 1

// let studentName = []


// // QUESTON NO # 2

// studentName = new Array();

// QUESTON NO # 3

// let city = ["karachi" , "islamabad" , "multan" , "lahore" , "murre" , "Quetta"];

// document.write(`${city[0]}<br> ${city[1]}<br> ${city[2]}<br> ${city[3]}<br> ${city[4]}<br>`)

// QUESTON NO # 4

// let number = [12,14,16.18,20,22,24,26,28.30];

// document.write(number)

// QUESTON NO # 5

// let boolean = [true, false,false ,true ]

// document.write(boolean)


// QUESTON NO # 6

// let mixedArr = ["karachi" , 804 , true , undefined , NaN , false, null]

// document.write(mixedArr)

// QUESTON NO # 7

// let qualification = ["SSC" , "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PHD","BSc"];

// document.write(` <h1>Qualifications:</h1>
//      <h2>1)${qualification[0]}<br/></h2> 
//      <h2>2)${qualification[1]}<br/></h2>
//      <h2>3)${qualification[2]}<br/></h2>
//      <h2>4)${qualification[3]}<br/></h2>
//      <h2>5)${qualification[4]}<br/></h2>
//      <h2>6)${qualification[5]}<br/></h2>
//      <h2>7)${qualification[6]}<br/></h2>
//      <h2>8)${qualification[7]}<br/></h2>
//      <h2>9)${qualification[8]}<br/></h2>`)


// QUESTON NO # 8
// let studentsName = ["Shadab", "Maxwell", "Virat"];
// let studensScore = [410, 430,450];
// let total = 500
// let percentage1 = (studensScore[0]/total) *100;
// let percentage2 = (studensScore[1]/total) *100;
// let percentage3 = (studensScore[2]/total) *100;

// document.write
// (`<h3>Score of ${studentsName[0]} is ${studensScore[0]}. Percentage ${percentage1}%<br/></h3>
// <h3>Score of ${studentsName[1]} is ${studensScore[1]}. Percentage ${percentage2}%<br/></h3>
// <h3>Score of ${studentsName[2]} is ${studensScore[2]}. Percentage ${percentage3}%<br/></h3>`)

// QUESTON NO # 9

 let colorsName= ["White", "Red", "Black","Blue", "Pink", "lavender", "Aqua"];

// document.write(`<h6>${colorsName[0]} </h6><br/>
//     <h6>${colorsName[1]} </h6><br/>
//     <h6>${colorsName[2]} </h6><br/>
//     <h6>${colorsName[3]} </h6><br/>
//     <h6>${colorsName[4]} </h6><br/>`);

// QUESTON NO # 9:a

// let userColor1 = prompt("Enter the color what you want to add the beginning of the array");
// colorsName.unshift(userColor1);
// document.write(colorsName);

// // QUESTON NO # 9:b

// let userColor2 = prompt("Enter the color what you want to add the end of the array");
// colorsName.push(userColor2);
// document.write(colorsName);

// QUESTON NO # 9:c

// let userColor3 = prompt("Enter the another color what you want to add the beginning of the array");

// let userColor4 = prompt("Enter the one more another color what you want to add the beginning of the array");

// colorsName.unshift(userColor3,userColor4);
// colorsName.unshift();

// document.write(colorsName);


// QUESTON NO # 9:d

// colorsName.unshift();
// document.write(colorsName);

// QUESTON NO # 9:e

// colorsName.pop();
// document.write(colorsName);

// QUESTON NO # 9:f

// document.write(colorsName);

// let userAddNum = +prompt("Enter a number at which you want to add color");
// let userAddClr = prompt("Whats you want to add color");
// colorsName.splice(userAddNum ,0, userAddClr);

// document.write(`<h2>Updated Array Here:</h2><br> ${colorsName}`);

// QUESTON NO # 9:g
// document.write(`${colorsName}<br><br>`);

// let userDltNum = +prompt("Enter the number you wants to delete the color");
// let userDltClr = +prompt("Enter how many color you wants to delete");

// colorsName.splice(userDltNum,userDltClr);
// document.write(`<h2>Updated Array Here:</h2><br> ${colorsName}`);

// QUESTON NO # 10

// let studentScores = [420,320,410,300,290,330,220,410,240];

// document.write(`<h4> ${studentScores}</h4><br/>`);
// studentScores.sort();
// document.write(`<h3> ${studentScores}</h3>`);

// QUESTON NO # 11

// let cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Multan","Murree"]

// selectedCity=cityNames.slice(2,4)

// document.write(`<h2>Cities List:<br></h2><h4>${cityNames}</h4><br>`);
// document.write(`<h2> Selected Cities List:<br/></h2><h4>${selectedCity}</h4>`);

// QUESTON NO # 12

// let arr = ["This" , "is", "my", "Cat"];
// document.write(`<h1>Original Array:<br></h1> ${arr}`);

// let string = arr.join(` `);

// document.write(`<h1>Joins The Array String:<br></h1> ${string}`);

// QUESTON NO # 13

// let batsmen = ["Jos Buttler" , "Virat Kohli", "Maxwell" , "Harry Brook" , "Daryl Mitchel"];
// document.write(`<h1>My Favourite Batsmen</h1> <h3>${batsmen}</h3><br>`)

// // FIFO(FIRST IN FIRST OUT METHOD)

// let out;
// out = batsmen.shift();
// document.write(`<h1>FIFOut:</h1> ${out}`);
// out = batsmen.shift();
// document.write(`<h1>FIFOut:</h1> ${out}`);
// out = batsmen.shift();
// document.write(`<h1>FIFOut:</h1> ${out}`);
// out = batsmen.shift();
// document.write(`<h1>FIFOut:</h1> ${out}`);
// out = batsmen.shift();
//  document.write(`<h1>FIFOut:</h1> ${out}`);


// QUESTON NO # 14

// let bowlers = ["Shadab Khan","Haris Rauf","Waseem Junior", "M.Amir"];
// document.write(`<h1>Bowlers:</h1><h3>${bowlers}</h3><br>`)
// let out;
// out = bowlers.pop();
// document.write(`<h2>LIFOut:</h2>${out}`);
// out = bowlers.pop();
// document.write(`<h2>LIFOut:</h2>${out}`);
// out = bowlers.pop();
// document.write(`<h2>LIFOut:</h2>${out}`);
// out = bowlers.pop();
// document.write(`<h2>LIFOut:</h2>${out}`);

// 
// let modelNo = ["Apple", "Samsung", "Motorola","Nokia", "Sony","Haier"];

// let index = 0;

// document.write(`<h1>ShowCase DropDown:</h1><select>
// <option>Dropdown</option>
// <option>${modelNo[index++]}</option>
// <option>${modelNo[index++]}</option>
// <option>${modelNo[index++]}</option>
// <option>${modelNo[index++]}</option>
// <option>${modelNo[index++]}</option></select>`)