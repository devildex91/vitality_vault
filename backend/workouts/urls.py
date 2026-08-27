from django.urls import path
from .views import getExercises, createWorkoutPlan, getusersworkoutPlans, updateusersworkoutPlan, deleteusersworkoutPlan


urlpatterns = [
    path('exercises/', getExercises),
    path('createworkout/', createWorkoutPlan),
    path('fetchuserworkout/', getusersworkoutPlans),
    path('updateworkout/', updateusersworkoutPlan),
    path('deleteworkout/<int:pk>/', deleteusersworkoutPlan),
]
