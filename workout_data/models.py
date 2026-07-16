from django.db import models
from django.contrib.auth.models import User
# Create your models here.
from django.db import models

# Create your models here.

class WorkoutPlan(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    workout_name = models.CharField(max_length=256)
    no_days = models.IntegerField()
    workout_description = models.TextField()


    def __str__(self):
        return f"{self.workout_name}"
    
    

class WorkoutDay(models.Model):
    workout_plan = models.ForeignKey('WorkoutPlan', on_delete=models.CASCADE)
    workout_day = models.CharField(max_length=10)
    
    def __str__(self):
        return f"{self.workout_name}:{self.workout_day}"
    

# model created to match yuhonas/free-exercise-db which content for table is coming from
class ExerciseCategory(models.Model):

    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    
    def __str__(self):
        return self.name


class Exercise(models.Model):
    name = models.CharField(max_length=200, unique=True)
    category = models.ForeignKey(ExerciseCategory, on_delete=models.SET_NULL, null=True)
    description = models.TextField(blank=True)
    equipment = models.CharField(max_length=100, blank=True)
    primary_muscles = models.JSONField(default=list, blank=True)
    secondary_muscles = models.JSONField(default=list, blank=True)
    instructions = models.JSONField(default=list, blank=True)
    difficulty_level = models.CharField(
        max_length=20, 
        choices=[('beginner', 'Beginner'), ('intermediate', 'Intermediate'), ('advanced', 'Advanced')],
        blank=True
    )
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['name']

    
class WeightSet(models.Model):
    exercise = models.ForeignKey('Exercise', on_delete=models.CASCADE)
    set_number = models.IntegerField()
    weight = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return f"{self.set_number}:{self.weight}"
    

class WorkoutItem(models.Model):
    workout_day = models.ForeignKey(WorkoutDay, on_delete=models.CASCADE, related_name="items")
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE, related_name="workout_items")
    order = models.PositiveIntegerField(default=0, help_text="The order of the exercise in the workout")
    notes = models.TextField(blank=True, help_text="Target reps, rest time, or special instructions")

    class Meta:
        ordering = ['order']
        unique_together = ('workout_day', 'exercise') 

    def __str__(self):
        return f"{self.workout_day} - {self.exercise.name}" 

