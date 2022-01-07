var employee = {
  name: "Sufiyan Akbani",
  emailID: "sufiyan.akbani@perficient.com",
  phoneNo: 81800018857,
  age: 21,
  destination: "Intern Consulting",
  address: {
    houseNo: 294,
    streetName: "Old Kamptee Road",
    areaName: "Kawarapeth, Shantinagar",
    cityName: "Nagpur",
    countryName: "India",
  },
};
console.log(employee);

// Dot Notation
console.log("Employee Name: " + employee.name);
console.log("Employee Email Id: " + employee.emailID);
console.log(employee.address);

//Bracket Notation
console.log("Employee Name: " + employee["name"])
console.log("Employee Email Id: " + employee["emailID"])
console.log(employee["address"])
