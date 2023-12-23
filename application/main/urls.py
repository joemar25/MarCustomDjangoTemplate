from django.urls import path
from . import views

urlpatterns = [
    # Mar: It is recommended to have backup paths for the same view

    path("", views.index, name="index"),
    path("home/", views.index, name="index"),
    path("index/", views.index, name="index"),
    path("settings/", views.settings, name="settings"),
    path("guest/", views.main, name="main"),
    path("guest/index/", views.main, name="main"),
    # path('create/', views.create, name='create'),
    # path('update/<int:pk>/', views.update, name='update'),
    # path('delete/<int:pk>/', views.delete, name='delete'),
]
