function show() {
  var x = document.getElementById("showmore");
  if (x.innerHTML == "SHOW MORE") {
    document.getElementById("team").style.display = "inline-block";
    x.innerHTML = "SHOW LESS";
    return false;
  } else {
    document.getElementById("team").style.display = "none";
    x.innerHTML = "SHOW MORE";
    return false;
  }
}

function check() {
  var email = document.getElementById("email").value;
  var check1 = document.getElementById("USA").checked;
  var check2 = document.getElementById("UK").checked;
  var captcha = document.getElementsByTagName("input")[3].value;

  if (email == "" || (check1 == false && check2 == false) || captcha != "cVr12TY") {
    if (email == "") {
      alert("Please fill your email");
    }
    if (check1 == false &&  check2 == false) {
      alert("Please check your options");
    }
    if (captcha != "cVr12TY") {
      alert("Please check your captcha");
    }
  } else {
    alert("Thank you very much");
    //reset the form!!
    document.getElementById("email").value = "";
    document.getElementsByTagName("input")[3].value = "";
    document.getElementById("USA").checked = false;
    document.getElementById("UK").checked = false;
  }
}
