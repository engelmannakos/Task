"""fruit_garden URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from .views import OrderView, CreateOrderView, GetOrder, RoundView, CreateRoundView, miniRoundView, CreateminiRoundView, GetRound, UpdateOrder, UpdateRound, GetminiRound

urlpatterns = [
    path('order/', OrderView.as_view()),
    path('create_order/', CreateOrderView.as_view()),
    path('get_order/', GetOrder.as_view()),
    path('round/', RoundView.as_view()),
    path('create_round/', CreateRoundView.as_view()),
    path('get_round/', GetRound.as_view()),
    path('miniround/', miniRoundView.as_view()),
    path('create_miniround/', CreateminiRoundView.as_view()),
    path('update_order/', UpdateOrder.as_view()),
    path('update_round/', UpdateRound.as_view()),
    path('get_miniround/', GetminiRound.as_view()),
]
