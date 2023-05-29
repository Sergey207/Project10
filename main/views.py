from django.core.handlers.wsgi import WSGIRequest
from django.shortcuts import render


def mainpage(response: WSGIRequest):
    names = [
        "Средняя геометрическая хорда, мм (bср): ",
        "Полная площадь модели, см2 (Sм): ",
        "Среднее значение коэффициента подъёмной силы (Суср): ",
        "Число Рейнольдса в начале крыла (Rе0): ",
        "Число Рейнольдса в конце крыла (Rек): ",
        "Начальная хорда крыла (b0): ",
        "Конечная хорда крыла (bk): ",
        "Коэффициент индуктивного сопротивления крыла (Cxi): ",
        "Коэффициент поправки влияния остальных частей модели (Kср): ",
        "Длина концевой шайбы, мм (h): "

    ]

    return render(response, 'index.html', context={'vars': {str(i + 1): name for i, name in enumerate(names)}})
