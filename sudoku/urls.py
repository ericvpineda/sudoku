from . import views 
from django.urls import path 
from django.conf.urls import url

urlpatterns = [
    # path('main', views.main, name='main'),
    url('main', views.main, name='main'),
]

