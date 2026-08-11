from django.urls import path
from .views import getExercises


urlpatterns = [
    path('exercises/', getExercises)
]