from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('registerdoc/',views.DoctorListView.as_view()),
    path('registeruser/',views.UserListView.as_view()),


]
