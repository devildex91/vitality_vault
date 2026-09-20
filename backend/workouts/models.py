"""Workout domain models for exercises, plans, and user routines."""

from typing import ClassVar

from django.conf import settings
from django.db import models


class Muscle(models.Model):
    """Represents a primary or secondary muscle group used by exercises."""

    name = models.CharField(max_length=50, unique=True)

    class Meta:
        ordering: ClassVar[list[str]] = ["name"]

    def __str__(self):
        return self.name


class Equipment(models.Model):
    """Equipment required to perform an exercise."""

    name = models.CharField(max_length=50, unique=True)

    class Meta:
        ordering: ClassVar[list[str]] = ["name"]

    def __str__(self):
        return self.name


class Category(models.Model):
    """High-level exercise category, such as strength or cardio."""

    name = models.CharField(max_length=50, unique=True)

    class Meta:
        ordering: ClassVar[list[str]] = ["name"]

    def __str__(self):
        return self.name


class Exercise(models.Model):
    """A reusable exercise record with metadata and muscle associations."""

    class Level(models.TextChoices):
        BEGINNER = "beginner", "Beginner"
        INTERMEDIATE = "intermediate", "Intermediate"
        EXPERT = "expert", "Expert"

    class Force(models.TextChoices):
        PUSH = "push", "Push"
        PULL = "pull", "Pull"
        STATIC = "static", "Static"

    class Mechanic(models.TextChoices):
        COMPOUND = "compound", "Compound"
        ISOLATION = "isolation", "Isolation"

    id = models.CharField(primary_key=True, max_length=150)

    name = models.CharField(max_length=200)

    level = models.CharField(max_length=20, choices=Level.choices)

    force = models.CharField(
        max_length=20, choices=Force.choices, blank=True, null=True
    )

    mechanic = models.CharField(
        max_length=20, choices=Mechanic.choices, blank=True, null=True
    )

    category = models.ForeignKey(
        Category, on_delete=models.PROTECT, related_name="exercises"
    )

    equipment = models.ForeignKey(
        Equipment,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="exercises",
    )

    primary_muscles = models.ManyToManyField(Muscle, related_name="primary_exercises")

    secondary_muscles = models.ManyToManyField(
        Muscle, related_name="secondary_exercises", blank=True
    )

    class Meta:
        ordering: ClassVar[list[str]] = ["name"]

    def __str__(self):
        return self.name


class Instruction(models.Model):
    """Detailed step-by-step guidance for completing an exercise."""

    exercise = models.ForeignKey(
        Exercise, on_delete=models.CASCADE, related_name="instructions"
    )

    step = models.PositiveSmallIntegerField()

    text = models.TextField()

    class Meta:
        ordering: ClassVar[list[str]] = ["step"]
        constraints: ClassVar[list] = [
            models.UniqueConstraint(
                fields=["exercise", "step"], name="unique_instruction_step"
            )
        ]

    def __str__(self):
        return f"{self.exercise.name} - Step {self.step}"


class ExerciseImage(models.Model):
    """Cloudinary-backed exercise imagery attached to a specific exercise."""

    exercise = models.ForeignKey(
        Exercise, on_delete=models.CASCADE, related_name="images"
    )

    public_id = models.CharField(max_length=255)

    order = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering: ClassVar[list[str]] = ["order"]

    def __str__(self):
        return f"{self.exercise.name} ({self.order})"


class WorkoutPlan(models.Model):
    """A user-owned weekly program containing scheduled workout days."""

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="workout_plans",
        null=True,
    )
    title = models.CharField(max_length=255)


class WorkoutDay(models.Model):
    """A single planned workout session within a user workout plan."""

    DAYS: ClassVar[list[tuple[str, str]]] = [
        ("monday", "Monday"),
        ("tuesday", "Tuesday"),
        ("wednesday", "Wednesday"),
        ("thursday", "Thursday"),
        ("friday", "Friday"),
        ("saturday", "Saturday"),
        ("sunday", "Sunday"),
    ]

    workout = models.ForeignKey(
        WorkoutPlan, on_delete=models.CASCADE, related_name="days"
    )
    day = models.CharField(max_length=20, choices=DAYS)
    # A plan can contain each weekday at most once.

    class Meta:
        constraints: ClassVar[list] = [
            models.UniqueConstraint(
                fields=["workout", "day"], name="unique_workout_day"
            )
        ]


class WorkoutExercise(models.Model):
    """A concrete exercise assignment with set and rep targets for a workout day."""

    workout_day = models.ForeignKey(
        WorkoutDay, on_delete=models.CASCADE, related_name="exercises"
    )
    exercise = models.ForeignKey(
        Exercise, on_delete=models.CASCADE, related_name="workout_entries"
    )
    sets = models.IntegerField()

    reps = models.IntegerField()

    class Meta:
        ordering: ClassVar[list[str]] = ["exercise"]
        constraints: ClassVar[list] = [
            models.UniqueConstraint(
                fields=["workout_day", "exercise"], name="unique_day_exercise"
            )
        ]

    def __str__(self):
        return f"{self.exercise.name} ({self.sets}x{self.reps})"
