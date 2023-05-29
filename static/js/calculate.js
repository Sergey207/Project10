function calculate() {
    let l = Number(document.getElementById("num1").value);
    let lambda = Number(document.getElementById("num2").value);
    // let num3 = Number(document.getElementById("num3").value);

    if (l > 0 && lambda > 0) {
        let bcp = l / lambda;
        document.getElementById("res1").innerHTML = "Средняя геометрическая хорда (bср):  " + bcp;
        document.getElementById("res2").innerHTML = "Полная площадь модели (Sм): " + (bcp * l);
    }

}