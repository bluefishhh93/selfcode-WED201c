

function info() {
    document.getElementById('demo').style.display="block";
    // Get form data
    const name = document.querySelector("#form-1 input[type='text']:nth-of-type(1)").value;
    const email = document.querySelector("#form-1 input[type='text']:nth-of-type(2)").value;
    const year = document.querySelector("#year").value;
    const math = document.querySelector("#math").value;
    const physical = document.querySelector("#physical").value;
    const language = document.querySelector("#language").value;
    const skill1 = document.querySelector("#logic").checked ? "tư duy logic tốt<br>" : "";
    const skill2 = document.querySelector("#art").checked ? "có khiếu thẩm mỹ<br>" : "";
    const skill3 = document.querySelector("#sensitive").checked ? "nhạy bén, nắm bắt tốt với các cơ hội<br>" : "";
  
    // Build output string
    const output = `Xem lại thông tin của bạn:<br>
                    Tên: ${name}<br>
                    Email: ${email}<br>
                    Năm tốt nghiệp PTTH: ${year}<br>
                    Điểm toán: ${math}<br>
                    Điểm lý: ${physical}<br>
                    Điểm ngoại ngữ: ${language}<br>
                    Kỹ năng:<br> ${skill1}  ${skill2} ${skill3}`;
  
    // Display output
    document.querySelector("#demo").innerHTML = output;
    // Prevent form from submitting
    event.preventDefault();
  }
  