function changeImg(obj) {
  document.getElementById("bigImg").style.backgroundImage =
    "url(" + obj.src + ")";
}

function check() {
  const email = document.getElementById("email");
  const content = document.getElementById("content");
  const radios = document.getElementsByName("choice");
  let selectedValue;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selectedValue = radios[i].id;
      break;
    }
  }
  if (email.value == "" || content.value == "") {
    if (email.value == "") {
      email.style.backgroundColor = "red";
    }
    if (content.value == "") {
      content.style.backgroundColor = "red";
    }
  } else {
    email.style.backgroundColor = "white";
    content.style.backgroundColor = "white";
    alert(`${email.value}-${selectedValue}-${content.value}`);
  }
}

// function check() {
//     const email = document.getElementById("email");
//     const content = document.getElementById("content");
//     const radios = document.getElementsByName("choice");
//     var selectedValue = [...radios].find(radio => radio.checked).id;

//     if (!email.value || !content.value) {
//       email.style.backgroundColor = email.value ? "white" : "red";
//       content.style.backgroundColor = content.value ? "white" : "red";
//     } else {
//       email.style.backgroundColor = "white";
//       content.style.backgroundColor = "white";
//       alert(`${email.value}-${selectedValue}-${content.value}`);
//     }
//   }
