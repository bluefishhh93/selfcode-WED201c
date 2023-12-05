// function myFunction(){
//     const x = document.getElementById("table");
//     if(x.style.display === "none"){
//         x.style.display = "block";
//     }else{
//         x.style.display = "none";
//     }   

    
// }
function myFunction(){
    const x = document.getElementById("table");
    x.style.display = "block";
    const elements = document.getElementsByClassName("btn-food");
    elements[0].style.display = "none";
}