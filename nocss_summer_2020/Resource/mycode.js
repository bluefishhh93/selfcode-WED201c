function control() {
  const ten = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const content = document.getElementById("content").value;
  const donvi = document.getElementById("donvi").value;
  var message = "Đừng để trống:";

  if (ten == "" || email == "" || content == "") {
    if (ten == "") message += " " + "tên";
    if (email == "") message += " " + "email";
    if (content == "") message += " " + "nội dung";
    alert(message);
    return;
  }
      var input = `
                   tên của bạn: ${ten}<br>
                   email của bạn: ${email}<br>
                   nội dung hồ sơ: ${content}<br>
                   đơn vị đào tạo bạn chọn: ${donvi}<br>`;
                  //  var newWindow = window.open("blank.html", "_blank", "width=300,height=300");
                  //  newWindow.addEventListener("load", function() {
                  //    newWindow.document.getElementById("output").innerHTML = input;
                  //  });

                  let myWindow = window.open("", "_blank", "width=300,height=300");
                  myWindow.document.write("<h1>Vui lòng xem lại</h1>")
                  myWindow.document.write(input);
}





/*
If you want to redirect the user to a new page and display the information they entered when they click the submit button, you can modify the `control()` function to submit a form with the entered data. Here's an example:

```html
<form id="myForm" action="your-page.html" method="GET">
  <table>
    <tr>
      <td><p style="font-size: larger;">Gửi câu hỏi của bạn ở đây</p></td>
    </tr>
    <tr>
      <td><input type="text" placeholder="nhập tên của bạn" id="name" name="name">*</td>
    </tr>
    <tr>
      <td><input type="text" placeholder="nhập email của bạn" id="email" name="email">*</td>
    </tr>
    <tr>
      <td><textarea name="content" id="" cols="22" rows="7" style="resize: none;font-weight: 500;">nội dung</textarea>*</td>
    </tr>
    <tr>
      <td>
        <label for="donvi" style="font-size: large;">Đơn vị</label><br>
        <select name="donvi" id="donvi">
          <option value="ĐH FPT">ĐH FPT</option>
          <option value="ĐH Greenwich(VN)">ĐH Greenwich(VN)</option>
          <option value="FUNiX">FUNiX</option>
        </select>
      </td>
    </tr>
    <tr>
      <td><input type="submit" value="Gửi" onclick="control()"></td>
    </tr>
  </table>
</form>

<script>
  function control() {
    const ten = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const donvi = document.getElementById("donvi").value;
    var arr = [ten, email, donvi];
    var message = "Please fill in the following fields:";
    if (ten == "" || email == "" || donvi == "") {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "") {
          message += " " + arr[i];
        }
      }
      alert(message);
    } else {
      document.getElementById("myForm").submit();
    }
  }
</script>
```

In this example, we wrapped the table in a `<form>` element with an `id` of `myForm`, an `action` attribute that specifies the URL of the page to redirect to when the form is submitted, and a `method` attribute that specifies how to send the form data. We also added `name` attributes to the input fields so that their values will be included in the form data.

In the `control()` function, we added an `else` block that submits the form if all the input fields are filled in. When the form is submitted, the browser will redirect to the specified URL and include the form data in the query string of the URL.

On the new page, you can access the form data from the query string and display it on the page using JavaScript. Is this what you were looking for?



*/