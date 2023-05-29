function calculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);

    if (num1 !== 0 && num2 !== 0 && num3 !== 0) {
        document.getElementById("res1").innerHTML = "Результат 1: " + (num1 + num2 + num3);
        document.getElementById("res2").innerHTML = "Результат 2: " + (num1 * num2 * num3);
    }

}