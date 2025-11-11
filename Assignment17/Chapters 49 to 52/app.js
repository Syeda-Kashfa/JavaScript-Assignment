// QUESTION NO#1

// let nam=document.getElementById("name");
// let fName=document.getElementById("fname");
// let email=document.getElementById("email");
// let numb=document.getElementById("number");
// let educ=document.getElementById("edu");
// let nic=document.getElementById("nic");

// let butn=document.getElementById("btn");

// butn.addEventListener("click", function(){
//     document.write(`<h2>Name: ${nam.value}<hr> Father's Name: ${fName.value}<hr>Email: ${email.value}<hr>Number: ${numb.value}<hr>Education: ${educ.value}<hr>CNIC: ${nic.value}<hr></h2>`)
// })

// QUESTION NO#2

// let btn=document.getElementById("btn");
// let para=document.getElementById("para");

// btn.addEventListener("click" ,function(){
//     if(btn.innerText=="Read more"){
//         para.innerHTML=`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ipsam cupiditate aperiam rerum nesciunt corrupti error, eaque debitis illum tempore officiis iure impedit, quibusdam dolor ex nemo tempora dicta aliquam, deserunt dolore eveniet. Iste eos quos architecto tempore voluptatum, fuga ducimus voluptas sunt quia reiciendis illo amet nisi necessitatibus dolore!</p>`
//         btn.innerText="Less more"

//     }
//     else{
//         para.innerHTML=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nisi. Et provident accusantium eaque excepturi...`
//          btn.innerText="Read more"
//     }
// })


// QUESTION NO#3
// let studentName= document.getElementById("sName");
// let fatherName= document.getElementById("ftName");
// let btn=document.getElementById("submit");
// let table = document.getElementById("table")

// btn.addEventListener("click", function(){
//     console.log(studentName.value);



// table.innerHTML=`<tr>
// <th>Student Name</th>
//     <td>${studentName.value}</td>
//     <td>${fatherName.value}</td>
//     <td>Edit</td>
//     <td>Delete</td>
// </tr>`>
// console.log(table.innerHTML);




// })

let btnEdit = document.querySelector(".edit");
let btnDelete = document.querySelector(".delete");
let frm = document.getElementsByClassName("form");

// btnEdit.addEventListener("click", function(){
//     console.log("run");

//     frm.innerHtml=`<label>Student Name
//             <input type="text" id="sName">
//         </label>
//         <label>Father's Name
//             <input type="text" id="ftName">
//         </label><br>
//         <button id="submit">Submit</button>`

// })
// btnDelete.addEventListener("click", function(){
//     let edit=btnDelete.parentNode.parentNode;

//     edit.remove()

// })

// function del(this){
//     let edit=btnDelete.parentNode.parentNode;

//     edit.remove()
// }





let table = document.getElementById('recordTable')

function addRecord() {
    let studentName = document.getElementById('stdName')
    let studentClass = document.getElementById('stdClass')
    let row = document.createElement('tr')
    let nametd = document.createElement('td')
    let classtd = document.createElement('td')
    let edittd = document.createElement('td')
    let deletetd = document.createElement('td')
    let nameText = document.createTextNode(studentName.value)
    let classText = document.createTextNode(studentClass.value)
    let editBtn = document.createElement('button')
    let editText = document.createTextNode("Edit")
    editBtn.setAttribute('onclick', 'editRecord(this)')
    editBtn.appendChild(editText)
    let delBtn = document.createElement('button')
    let delText = document.createTextNode("Delete")
    delBtn.setAttribute('onclick', 'deleteRecord(this)')
    delBtn.appendChild(delText)

    nametd.appendChild(nameText)
    classtd.appendChild(classText)
    edittd.appendChild(editBtn)
    deletetd.appendChild(delBtn)
    row.appendChild(nametd)
    row.appendChild(classtd)
    row.appendChild(edittd)
    row.appendChild(deletetd)
    table.appendChild(row)

    studentName.value = ""
    studentClass.value = ""
}

function editRecord(e) {
    let val = e.parentNode.parentNode.firstChild.innerText
    let newVal = prompt("Edit your record", val)
    let classval = e.parentNode.parentNode.firstChild.nextSibling.innerText
    let newClass = prompt("Edit your Class", classval)
    e.parentNode.parentNode.firstChild.innerText = newVal
    e.parentNode.parentNode.firstChild.nextSibling.innerText = newClass
}

function deleteRecord(e) {
    e.parentNode.parentNode.remove()
}
