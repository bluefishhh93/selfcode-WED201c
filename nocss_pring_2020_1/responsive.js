function show() {
  const x = document.getElementById("para3");
  if (x.innerHTML == "SHOW ALL") {
    document.getElementById("para2").style.display = "block";
    document.getElementById("para3").innerHTML = "SHOW LESS";
  } else {
    document.getElementById("para2").style.display = "none";
    document.getElementById("para3").innerHTML = "SHOW ALL";
  }
}

function Enroll() {
  var name = document.getElementById("t1").value;
  var email = document.getElementById("t2").value;
  var pass = document.getElementById("t3").value;
  var repass = document.getElementById("t4").value;
  var op1 = document.getElementById("t5").checked;
  var op2 = document.getElementById("t6").checked;
  var op3 = document.getElementById("t7").checked;
  if (name == "" || email == "" || pass == "" || repass == "") {
    alert("Please fill all the fields");
  } else if (pass != repass) {
    alert("Passwords do not match");
  } else {
    if (op1 == false && op2 == false && op3 == false) {
      //once pass and repass are the same, we check the options: if no option is chosen, we ask the user to choose at least one of the options
      var choice = confirm("Would you like to choose options?");
      if (choice == false) {
        //if user chooses "Cancel"
        alert("Start learning WED201C");
        //if user chooses OK, we do nothing
      }
    }
  }
}
