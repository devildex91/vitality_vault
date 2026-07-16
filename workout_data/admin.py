from django.contrib import admin
from .models import WorkoutPlan, WorkoutDay, ExerciseCategory, Exercise, WeightSet, WorkoutItem
# Register your models here.
admin.site.register(WorkoutPlan)
admin.site.register(WorkoutDay)
admin.site.register(ExerciseCategory)
admin.site.register(Exercise)
admin.site.register(WeightSet)
admin.site.register(WorkoutItem)