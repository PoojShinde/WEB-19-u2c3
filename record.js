// fill in javascript code here
document.querySelector("form").addEventListener("submit",()=>{
    Event()
    reset()

});

function Event() {
    event.preventDefault();
  var name = document.getElementById('name').value;
  var employeeID = document.getElementById('employeeID').value;
  var department = document.getElementById('department').value;
  var exp = document.getElementById('exp').value;
  var email = document.getElementById('email').value;
  var mbl = document.getElementById('mbl').value;


let role ='';
if (exp > 5) {
  role = 'Senior';
} else if (exp >= 2 && exp <= 5) {
  role = 'Junior';
} else {
  role = 'Fresher';
}
  
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  td1.innerText = name;

  var td2 = document.createElement("td");
  td2.innerText = employeeID;

  var td3 = document.createElement("td");
  td3.innerText = department;

  var td4 = document.createElement("td");
  td4.innerText = exp;

  var td5 = document.createElement("td");
  td5.innerText = email;

  var td6 = document.createElement("td");
  td6.innerText = mbl;

  var td7 = document.createElement("td");
  td7.innerText = role;
  

  var td8 = document.createElement("td");
  td8.innerText = "Delete";
  td8.addEventListener("click", deleteRow);

 tr.append(td1, td2, td3, td4, td5, td6,td7, td8);
 document.querySelector("tbody").append(tr);

}

function deleteRow(){
    event.target.parentNode.remove();
}
function reset(){
    var name = document.getElementById('name').value = "";
    var employeeID = document.getElementById('employeeID').value="";
    var department = document.getElementById('department').value="";
    var exp = document.getElementById('exp').value="";
    var email = document.getElementById('email').value="";
    var mbl = document.getElementById('mbl').value="";
}