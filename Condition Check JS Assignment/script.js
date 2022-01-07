function checkCondition(){
    var amount = document.getElementById("amount").value
    console.log(amount)
    if(amount)
    {
        if(amount >= 35 ){
            alert("Ashish can purchase Both Grocery & Ice-cream and left amount is : " + (amount - 35) + "/-");
        }
        else if(amount >=20 && amount < 35)
        {
            alert("Ashish can purchase only Grocery")
        }
        else{
            alert("Ashish can not Buy any Think")
        }
    }
    else{
        alert("Please Enter Some ammount")
    }
}
