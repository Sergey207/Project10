function getSigm1(lambda) {
    if (0 <= lambda <= 2)
        return 0.008;
    else if (2 < lambda <= 4)
        return 0.02;
    else if (4 < lambda <= 6)
        return 0.036;
    else if (6 < lambda <= 8)
        return 0.052;
    else if (8 < lambda <= 10)
        return 0.065;
    else if (10 < lambda <= 12)
        return 0.08;
    else if (12 < lambda <= 14)
        return 0.094;
    else
        return 0;
}

function getSigm2(X) {
    if (0 <= X <= 10)
        return 1;
    else if (10 < X <= 20)
        return 1.11;
    else
        return 0;
}

function calculate() {
    let vars = [
        "Средняя геометрическая хорда, мм (bср): ",
        "Полная площадь модели, см2 (Sм): ",
        "Среднее значение коэффициента подъёмной силы (Суср): ",
        "Число Рейнольдса в начале крыла (Rе0): ",
        "Число Рейнольдса в конце крыла (Rек): ",
        "Начальная хорда крыла (b0): ",
        "Конечная хорда крыла (bk): ",
        "Коэффициент индуктивного сопротивления крыла (Cxi): ",
        "Коэффициент поправки влияния остальных частей модели (Kср): ",
        "Длина концевой шайбы, мм (h): ",
        "Изменение коэффициентпа индуктивного сопротивления крыла (ΔСxi): "

    ];

    // input
    let l = Number(document.getElementById("num1").value);
    let lambda = Number(document.getElementById("num2").value);
    let V = Number(document.getElementById("num3").value);
    let m = Number(document.getElementById("num5").value);
    let p = Number(document.getElementById("num6").value);
    let n = Number(document.getElementById("num7").value);
    let X = Number(document.getElementById("num8").value);
    let dLambda = Number(document.getElementById("num9").value)
    let Cy = Number(document.getElementById("num10").value)

    // count
    if (l > 0 && lambda > 0 && V > 0 && m > 0 && p > 0) {
        let sigm1 = getSigm1(lambda);
        if (sigm1 === 0)
            return;

        let sigm2 = getSigm2(X);
        if (sigm2 === 0)
            return;


        l /= 1000;

        let g = 10;
        let pi = 3.14;

        let bcp = l / lambda;
        let Sm = bcp * l;
        let b0 = (2 * bcp) / (n + 1);
        let bk = b0 / n;
        let Re0 = 70 * V * b0;
        let Rek = 70 * V * bk;
        let Cycp = (m * g) / (0.613 * Sm * V * V);

        let Kcp = 0.011 * pi * lambda;
        let lambda_ef = dLambda + ((lambda) / (1 + sigm1 * sigm2 + Kcp));
        let Cxi = (Cy * Cy) / (pi * lambda_ef);
        let h = (dLambda * l) / (lambda * 3.8);

        let sigm = 0;
        let deltaCxi = ((Cy * Cy) / (pi * lambda)) * (1 + (sigm / 2) + ((sigm * sigm) / 4)) / (1 + (sigm / 2) + ((sigm * sigm) / 10));

        // let R = 0.613 * Cr
        let results = [
            bcp * 1000, Sm * 10000, Cycp, Re0, Rek, b0, bk, Cxi, Kcp, h, deltaCxi
        ];

        for (let i = 0; i < vars.length; i++) {
            document.getElementById("res" + (i + 1)).innerHTML = vars[i] + Math.round(results[i] * 1000) / 1000;
        }
    }

}