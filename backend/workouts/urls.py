from django.urls import path
from .views import getExercises, createWorkoutPlan


urlpatterns = [
    path('exercises/', getExercises),
    path('createworkout/', createWorkoutPlan),
]