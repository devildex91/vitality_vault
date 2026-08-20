from django.db import transaction
from rest_framework import serializers
from .models import Exercise, WorkoutDay, WorkoutExercise, WorkoutPlan

# Serializers in this order for inheritance so can use Workout plan as top level serializer

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = '__all__'


class WorkoutExerciseSerializer(serializers.ModelSerializer):
    exercise = serializers.PrimaryKeyRelatedField(
        queryset=Exercise.objects.all()
    )

    class Meta:
        model = WorkoutExercise
        fields = ["id", "exercise", "sets", "reps"]


class WorkoutDaySerializer(serializers.ModelSerializer):
    exercises = WorkoutExerciseSerializer(many=True,)


    class Meta:
        model = WorkoutDay
        fields = ["id", "day", "exercises"]


class WorkoutPlanSerializer(serializers.ModelSerializer):
    days = WorkoutDaySerializer(many=True, )

    class Meta:
        model = WorkoutPlan
        fields = ["id", "title", "days"]

    def create(self, validated_data):
        days_data = validated_data.pop("days", [])
        
        with transaction.atomic():
            workout_plan = WorkoutPlan.objects.create(**validated_data)
            
            for day_data in days_data:
                exercises_data = day_data.pop("exercises", [])
    
                workout_day = WorkoutDay.objects.create(workout=workout_plan, **day_data)
                
                for exercise_data in exercises_data:
                    WorkoutExercise.objects.create(workout_day=workout_day, **exercise_data)
                    
        return workout_plan
    