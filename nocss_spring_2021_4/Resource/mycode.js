function checkForm() {
    var arr = document.getElementsByTagName("input");
    var user = arr[0].value;
    var phone = arr[1].value;
    var email = arr[2].value;
  
    if (user == "" || email == "" || phone == "") {
      if (user == "") {
        alert("Full name is invalid");
      }if (phone == "") {
        alert("Phone is invalid");
      }if (email == "") {
        alert("Email is invalid");
      } 
    }else {
      alert("Welcome " + user);
    }
  }
  