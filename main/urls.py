from django.urls import path
from main.views import mainpage

urlpatterns = [
    path('', mainpage)
]