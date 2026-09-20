"""Serializers for exercise data and nested workout plan management."""

from django.db import transaction
from rest_framework import serializers

from .models import Exercise, ExerciseImage, WorkoutDay, WorkoutExercise, WorkoutPlan

class ExerciseSerializer(serializers.ModelSerializer):
    """Expose the complete exercise record for API consumers."""

    class Meta:
        model = Exercise
        fields = "__all__"


class ExerciseListSerializer(serializers.ModelSerializer):
    """Expose the minimal exercise fields needed for exercise selection."""

    class Meta:
        model = Exercise
        fields = ("id", "name")


class ExerciseImageSerializer(serializers.ModelSerializer):
    """Serialize an exercise image reference and its display order."""

    class Meta:
        model = ExerciseImage
        fields = ("id", "exercise", "public_id", "order")
        read_only_fields = ("id",)


class WorkoutExerciseSerializer(serializers.ModelSerializer):
    """Represent a single exercise entry nested inside a workout day."""

    id = serializers.IntegerField(required=False)

    exercise = serializers.PrimaryKeyRelatedField(queryset=Exercise.objects.all())

    class Meta:
        model = WorkoutExercise
        fields = ("id", "exercise", "sets", "reps")


class WorkoutDaySerializer(serializers.ModelSerializer):
    """Represent a workout day and its nested exercise entries."""

    id = serializers.IntegerField(required=False)
    exercises = WorkoutExerciseSerializer(
        many=True,
    )

    class Meta:
        model = WorkoutDay
        fields = ("id", "day", "exercises")


class WorkoutPlanSerializer(serializers.ModelSerializer):
    """Create and update a workout plan with nested days and exercises."""

    days = WorkoutDaySerializer(
        many=True,
    )

    class Meta:
        model = WorkoutPlan
        fields = ("id", "title", "days", "user")
        # ensures user is read only and adding in user means purely for backend not expecting from react
        read_only_fields = ("user",)

    def create(self, validated_data):
        """Create a plan and all nested day/exercise records atomically."""
        user = validated_data.pop("user", None)
        days_data = validated_data.pop("days", [])

        with transaction.atomic():
            workout_plan = WorkoutPlan.objects.create(user=user, **validated_data)

            for day_data in days_data:
                exercises_data = day_data.pop("exercises", [])

                workout_day = WorkoutDay.objects.create(
                    workout=workout_plan, **day_data
                )

                for exercise_data in exercises_data:
                    WorkoutExercise.objects.create(
                        workout_day=workout_day, **exercise_data
                    )

        return workout_plan

    def update(self, instance, validated_data):
        """Update plan metadata and reconcile nested day/exercise relationships."""
        days_provided = "days" in validated_data
        days_data = validated_data.pop("days", [])

        with transaction.atomic():
            instance.title = validated_data.get("title", instance.title)
            instance.save()

            if days_provided:
                existing_days = {day.id: day for day in instance.days.all()}

                kept_day_ids = []

                # Reconcile submitted days and remove days omitted from the payload.
                for day_data in days_data:
                    exercises_data = day_data.pop("exercises", [])
                    day_id = day_data.pop("id", None)

                    if day_id in existing_days:
                        workout_day = existing_days[day_id]

                        workout_day.day = day_data.get("day", workout_day.day)
                        workout_day.save()

                    else:
                        workout_day = WorkoutDay.objects.create(
                            workout=instance, **day_data
                        )

                    kept_day_ids.append(workout_day.id)

                    existing_exercises = {
                        ex.id: ex for ex in workout_day.exercises.all()
                    }

                    kept_exercise_ids = []

                    # Reconcile entries for each retained day and remove omitted ones.
                    for ex_data in exercises_data:
                        ex_id = ex_data.pop("id", None)

                        if ex_id in existing_exercises:
                            workout_exercise = existing_exercises[ex_id]

                            workout_exercise.exercise = ex_data.get(
                                "exercise", workout_exercise.exercise
                            )
                            workout_exercise.sets = ex_data.get(
                                "sets", workout_exercise.sets
                            )
                            workout_exercise.reps = ex_data.get(
                                "reps", workout_exercise.reps
                            )

                            workout_exercise.save()

                        else:
                            workout_exercise = WorkoutExercise.objects.create(
                                workout_day=workout_day, **ex_data
                            )

                        kept_exercise_ids.append(workout_exercise.id)

                    for ex in workout_day.exercises.all():
                        if ex.id not in kept_exercise_ids:
                            ex.delete()

                for day in instance.days.all():
                    if day.id not in kept_day_ids:
                        day.delete()

        return instance
