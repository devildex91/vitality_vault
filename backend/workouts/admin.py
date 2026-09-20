"""Django admin configuration for workout catalog and plan models."""

from django.contrib import admin

from .models import (
    Category,
    Equipment,
    Exercise,
    ExerciseImage,
    Instruction,
    Muscle,
    WorkoutDay,
    WorkoutExercise,
    WorkoutPlan,
)


@admin.register(Muscle)
class MuscleAdmin(admin.ModelAdmin):
    """Manage exercise muscle groups."""

    search_fields = ("name",)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    """Manage exercise categories."""

    search_fields = ("name",)


@admin.register(Equipment)
class EquipmentAdmin(admin.ModelAdmin):
    """Manage exercise equipment options."""

    search_fields = ("name",)


class InstructionInline(admin.TabularInline):
    """Edit exercise instructions inline on an exercise record."""

    model = Instruction
    extra = 0
    ordering = ("step",)


class ExerciseImageInline(admin.TabularInline):
    """Edit exercise images inline on an exercise record."""

    model = ExerciseImage
    extra = 0
    ordering = ("order",)


@admin.register(Exercise)
class ExerciseAdmin(admin.ModelAdmin):
    """Manage exercises and their related instructions and images."""

    list_display = (
        "name",
        "level",
        "category",
        "equipment",
    )

    search_fields = ("name",)

    list_filter = (
        "level",
        "category",
        "equipment",
    )

    filter_horizontal = (
        "primary_muscles",
        "secondary_muscles",
    )

    inlines = (
        InstructionInline,
        ExerciseImageInline,
    )

    ordering = ("name",)


@admin.register(Instruction)
class InstructionAdmin(admin.ModelAdmin):
    """Manage individual exercise instructions."""

    list_display = ("exercise", "step")
    search_fields = ("exercise__name",)


@admin.register(ExerciseImage)
class ExerciseImageAdmin(admin.ModelAdmin):
    """Manage uploaded exercise image references."""

    list_display = ("exercise", "order")
    search_fields = ("exercise__name",)


class WorkoutExerciseInline(admin.TabularInline):
    """Edit exercise targets inline on a workout day."""

    model = WorkoutExercise
    extra = 3


@admin.register(WorkoutDay)
class WorkoutDayAdmin(admin.ModelAdmin):
    """Manage workout days and their assigned exercises."""

    inlines = (WorkoutExerciseInline,)


class WorkoutDayInline(admin.TabularInline):
    """Edit scheduled days inline on a workout plan."""

    model = WorkoutDay
    extra = 1


@admin.register(WorkoutPlan)
class WorkoutPlanAdmin(admin.ModelAdmin):
    """Manage user workout plans and their scheduled days."""

    inlines = (WorkoutDayInline,)
