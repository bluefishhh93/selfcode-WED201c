function CalTotal(){
    let tour = document.getElementById("tour").value;
    let price;
    let number = document.getElementById("number").value;
    if(tour=="MuiNe"){
        price = 100;
    }else if(tour =="CaMau"){
        price = 150;
    }else if(tour =="VungTau"){
        price = 90;
    }else if(tour =="DaLat"){
        price = 120;
    }else if(tour =="HoTram"){
        price = 110;
    }
    document.getElementById("total").innerHTML = "Total amount: " + (price*number) + " $";
    return;
}    