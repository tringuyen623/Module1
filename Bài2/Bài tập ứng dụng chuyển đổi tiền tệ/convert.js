function convert() {
    let amount = document.getElementById("amount").value;
    let select = document.getElementById("select");
    let select1 = document.getElementById("select1");
    let usdTovnd = 232000, vndTousd = 0.000043 //exchange rate.

    if (select.value === "USD" && select1.value === "USD") {
        document.getElementById("result").innerHTML = "Result: " + amount * 1;
    }else if(select.value === "USD"&&select1.value ==="VND"){
        document.getElementById("result").innerHTML="Result: "+ amount *usdTovnd;
    }if (select.value === "VND"&& select1.value ==="VND"){
        document.getElementById("result").innerHTML="Result: "+amount*1;
    }else if(select.value ==="VND"&&select1.value ==="USD"){
        document.getElementById("result").innerHTML="Result: "+amount*vndTousd;
    }



}