"""URL routes for exercise and workout plan endpoints."""

from django.urls import path

from .views import (
    createWorkoutPlan,
    deleteusersworkoutPlan,
    getExerciseImages,
    getExercises,
    getusersworkoutPlans,
    updateusersworkoutPlan,
)

urlpatterns = [
    path("exercises/", getExercises),
    path("exerciseimages/", getExerciseImages),
    path("createworkout/", createWorkoutPlan),
    path("fetchuserworkout/", getusersworkoutPlans),
    path("updateworkout/", updateusersworkoutPlan),
    path("deleteworkout/<int:pk>/", deleteusersworkoutPlan),
]
