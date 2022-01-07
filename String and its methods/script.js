document.getElementById("Reg-form").addEventListener("submit", stringMethods);
function stringMethods() {
  debugger;
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var emailID = document.getElementById("email").value;
  var age = parseInt(document.getElementById("age").value);
  var personType;
  var fullName =
    firstName.charAt(0).toUpperCase() +
    firstName.slice(1) +
    " " +
    lastName.charAt(0).toUpperCase() +
    lastName.slice(1);
  if (age <= 10) {
    personType = "Kid";
  } else {
    personType = "Genuins"
  }
  document.querySelector("table").innerHTML =
    "<tr><th>Full Name</th><th>Email ID</th><th>Age</th><th>Person Type</th></tr><tr><td>" +
          fullName+"</td><td>"+emailID+"</td><td>"+age+"</td><td>" + personType +"</td></tr>";
}
