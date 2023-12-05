function zoomout(obj){
	document.getElementById("currentimg").src= obj.src;
}

function warning(){
	var name= document.getElementById("yourname").value;
	var email=document.getElementById("email").value;
	var content=document.getElementById("content").value;
	if (name==''||email==''||content==''){
		alert("please fill out all fields");
	}
	else{
		var confirmInfo =confirm("Are you sure your information?");
		if (confirmInfo==true){
			alert("Message sent");
			document.getElementById("myform").reset();

		}
	}
}