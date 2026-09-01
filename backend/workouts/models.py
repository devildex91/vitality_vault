from django.db import models
from django.conf import settings


class Muscle(models.Model):
    name = models.CharField(max_length=50, unique=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class Equipment(models.Model):
    name = models.CharField(max_length=50, unique=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class Exercise(models.Model):

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

    id = models.CharField(
        primary_key=True,
        max_length=150
    )

    name = models.CharField(max_length=200)

    level = models.CharField(
        max_length=20,
        choices=Level.choices
    )

    force = models.CharField(
        max_length=20,
        choices=Force.choices,
        blank=True,
        null=True
    )

    mechanic = models.CharField(
        max_length=20,
        choices=Mechanic.choices,
        blank=True,
        null=True
    )

    category = models.ForeignKey(
        Category,
        on_delete=models.PROTECT,
        related_name="exercises"
    )

    equipment = models.ForeignKey(
        Equipment,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="exercises"
    )

    primary_muscles = models.ManyToManyField(
        Muscle,
        related_name="primary_exercises"
    )

    secondary_muscles = models.ManyToManyField(
        Muscle,
        related_name="secondary_exercises",
        blank=True
    )

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class Instruction(models.Model):

    exercise = models.ForeignKey(
        Exercise,
        on_delete=models.CASCADE,
        related_name="instructions"
    )

    step = models.PositiveSmallIntegerField()

    text = models.TextField()

    class Meta:
        ordering = ["step"]
        constraints = [
            models.UniqueConstraint(
                fields=["exercise", "step"],
                name="unique_instruction_step"
            )
        ]

    def __str__(self):
        return f"{self.exercise.name} - Step {self.step}"


class ExerciseImage(models.Model):

    exercise = models.ForeignKey(
        Exercise,
        on_delete=models.CASCADE,
        related_name="images"
    )

    public_id = models.CharField(max_length=255)

    order = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return f"{self.exercise.name} ({self.order})"


class WorkoutPlan(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="workout_plans",
        null=True
    )
    title = models.CharField(max_length=255)


class WorkoutDay(models.Model):
    DAYS = [
        ("monday", "Monday"),
        ("tuesday", "Tuesday"),
        ("wednesday", "Wednesday"),
        ("thursday", "Thursday"),
        ("friday", "Friday"),
        ("saturday", "Saturday"),
        ("sunday", "Sunday"),
    ]

    workout = models.ForeignKey(
        WorkoutPlan,
        on_delete=models.CASCADE,
        related_name="days"
    )
    day = models.CharField(max_length=20, choices=DAYS)
    # makes sure that can be no duplicate days in database 
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["workout", "day"],
                name="unique_workout_day"
            )
        ]


class WorkoutExercise(models.Model):
    workout_day = models.ForeignKey(
        WorkoutDay,
        on_delete=models.CASCADE,
        related_name="exercises"
    )
    exercise = models.ForeignKey(
        Exercise,
        on_delete=models.CASCADE,
        related_name="workout_entries"
    )
    sets = models.IntegerField()

    reps = models.IntegerField()

    class Meta:
        ordering = ["exercise"]
        constraints = [
            models.UniqueConstraint(
                fields=["workout_day", "exercise"],
                name="unique_day_exercise"
            )
        ]

    def __str__(self):
        return f"{self.exercise.name} ({self.sets}x{self.reps})"


