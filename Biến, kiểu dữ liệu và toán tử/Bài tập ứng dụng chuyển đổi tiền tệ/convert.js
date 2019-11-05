function convert() {
    let amount = document.getElementById("amount").value;
    let select = document.getElementById("select");
    let select1 = document.getElementById("select1");
    let usdTovnd = 232000, vndTousd = 0.000043 //exchange rate.

    if (select.value === "USD" && select1.value === "USD") {
        document.getElementById("result").innerHTML = "Result: " + amount * 1 + ' USD';
    } else if (select.value === "USD" && select1.value === "VND") {
        document.getElementById("result").innerHTML = "Result: " + amount * usdTovnd +' VND';
    } if (select.value === "VND" && select1.value === "VND") {
        document.getElementById("result").innerHTML = "Result: " + amount * 1 + ' VND';
    } else if (select.value === "VND" && select1.value === "USD") {
        document.getElementById("result").innerHTML = "Result: " + amount * vndTousd + ' USD';
    }



}