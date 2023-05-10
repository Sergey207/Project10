from django.core.handlers.wsgi import WSGIRequest
from django.shortcuts import render

def mainpage(response: WSGIRequest):
    return render(response, 'index.html')