from django.urls import path
from . import views
from django.contrib import admin
from .models import Company, Vacancy

urlpatterns = [
    path('', views.index),
    path('companies/', views.company_list),
    path('companies/<int:id>/', views.company_list_id),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:id>/', views.vacancy_list_id),
    path('companies/<int:id>/vacancies/', views.company_vacancy),
    path('vacancies/top_ten/', views.top_ten_vacancies),
]