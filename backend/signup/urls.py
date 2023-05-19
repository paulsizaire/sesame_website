# signup/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('api/register-email/', views.register_email, name='register_email'),
]
