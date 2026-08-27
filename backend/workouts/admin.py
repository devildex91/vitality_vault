from django.contrib import admin

from .models import (
    Category,
    Equipment,
    Exercise,
    ExerciseImage,
    Instruction,
    Muscle,
    WorkoutPlan,
    WorkoutExercise,
    WorkoutDay,
)


@admin.register(Muscle)
class MuscleAdmin(admin.ModelAdmin):
    search_fields = ("name",)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    search_fields = ("name",)


@admin.register(Equipment)
class EquipmentAdmin(admin.ModelAdmin):
    search_fields = ("name",)

class InstructionInline(admin.TabularInline):
    model = Instruction
    extra = 0
    ordering = ("step",)


class ExerciseImageInline(admin.TabularInline):
    model = ExerciseImage
    extra = 0
    ordering = ("order",)

@admin.register(Exercise)
class ExerciseAdmin(admin.ModelAdmin):
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
    list_display = ("exercise", "step")
    search_fields = ("exercise__name",)


@admin.register(ExerciseImage)
class ExerciseImageAdmin(admin.ModelAdmin):
    list_display = ("exercise", "order")
    search_fields = ("exercise__name",)

class WorkoutExerciseInline(admin.TabularInline):
    model = WorkoutExercise
    extra = 3

@admin.register(WorkoutDay)   
class WorkoutDayAdmin(admin.ModelAdmin):
    inlines = [WorkoutExerciseInline]


class WorkoutDayInline(admin.TabularInline):
    model = WorkoutDay
    extra = 1

@admin.register(WorkoutPlan)
class WorkoutPlanAdmin(admin.ModelAdmin):

    inlines = [WorkoutDayInline]
        
    