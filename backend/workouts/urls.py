from django.urls import path
from .views import getExercises, createWorkoutPlan, getusersworkoutPlans


urlpatterns = [
    path('exercises/', getExercises),
    path('createworkout/', createWorkoutPlan),
    path('fetchuserworkout/', getusersworkoutPlans),
]