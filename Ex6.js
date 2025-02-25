function validateForm() {
    var age = document.getElementById("age").value;
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var addhar_no = document.getElementById("addhar_no").value;
    var address = document.getElementById("address").value;

    if (isNaN(age) || age === "") {
        alert("Age is INVALID");
        return false;
    } else if (age < 19) {
        alert("You are under age, can't fill the form!");
        return false;
    } else if (name === "" || !isNaN(name) || name.length <= "") {
        alert("Name is INVALID");
        return false;
    } else if (isNaN(Date.parse(dob)) || dob === "") {
        alert("Invalid date of birth");
        return false;
    } else if (isNaN(addhar_no) || addhar_no === "" || addhar_no.length !== 12) {
        alert("Invalid Addhar Card Number");
        return false;
    } else if (!isNaN(address) || address === "") {
        alert("Invalid Address");
        return false;
    } else {
        alert("Form submitted successfully");
        return true;
    }
}