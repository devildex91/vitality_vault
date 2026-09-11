from django.test import TestCase
from django.contrib.auth import get_user_model
from django.db.utils import IntegrityError
from django.db.models import ProtectedError
from workouts.models import (
    Muscle, Equipment, Category, Exercise, 
    Instruction, WorkoutPlan, WorkoutDay, WorkoutExercise
)

User = get_user_model()

class WorkoutModelsTestCase(TestCase):

    @classmethod
    def setUpTestData(cls):
        
        cls.user = User.objects.create_user(username="gym_rat", password="password")
        cls.category = Category.objects.create(name="Strength")
        cls.equipment = Equipment.objects.create(name="Barbell")
        cls.muscle = Muscle.objects.create(name="Chest")

       
        cls.exercise = Exercise.objects.create(
            id="barbell-bench-press",
            name="Barbell Bench Press",
            level=Exercise.Level.BEGINNER,
            force=Exercise.Force.PUSH,
            mechanic=Exercise.Mechanic.COMPOUND,
            category=cls.category,
            equipment=cls.equipment
        )
        cls.exercise.primary_muscles.add(cls.muscle)

     
        cls.plan = WorkoutPlan.objects.create(user=cls.user, title="Hypertrophy Split")
        cls.workout_day = WorkoutDay.objects.create(workout=cls.plan, day="monday")


    
    def test_model_string_representations(self):
        """Verify __str__ methods return user-friendly outputs."""
        self.assertEqual(str(self.muscle), "Chest")
        self.assertEqual(str(self.exercise), "Barbell Bench Press")
        
       
        entry = WorkoutExercise.objects.create(
            workout_day=self.workout_day, exercise=self.exercise, sets=4, reps=10
        )
        self.assertEqual(str(entry), "Barbell Bench Press (4x10)")


    def test_category_deletion_is_protected(self):
        """Verify on_delete=models.PROTECT blocks category deletion if exercises exist."""
        with self.assertRaises(ProtectedError):
            self.category.delete()

  

    def test_unique_workout_day_constraint(self):
        """Verify a workout plan cannot have two of the same days (e.g., duplicate Mondays)."""
        with self.assertRaises(IntegrityError):
            WorkoutDay.objects.create(workout=self.plan, day="monday")

    def test_unique_instruction_step_constraint(self):
        """Verify an exercise cannot have duplicate step numbers for instructions."""
        Instruction.objects.create(exercise=self.exercise, step=1, text="Lie on bench.")
        
        with self.assertRaises(IntegrityError):
            Instruction.objects.create(exercise=self.exercise, step=1, text="Duplicate step 1.")

    def test_unique_day_exercise_constraint(self):
        """Verify a user cannot add the exact same exercise twice to a single workout day."""
        WorkoutExercise.objects.create(
            workout_day=self.workout_day, exercise=self.exercise, sets=3, reps=12
        )
        
       
        with self.assertRaises(IntegrityError):
            WorkoutExercise.objects.create(
                workout_day=self.workout_day, exercise=self.exercise, sets=1, reps=1
            )


    def test_plan_deletion_cascades_to_days_and_entries(self):
        """Verify that deleting a plan wipes out days and related exercise selections."""
        WorkoutExercise.objects.create(
            workout_day=self.workout_day, exercise=self.exercise, sets=3, reps=12
        )
        
      
        self.plan.delete()
        
       
        self.assertFalse(WorkoutDay.objects.filter(id=self.workout_day.id).exists())
        self.assertFalse(WorkoutExercise.objects.filter(exercise=self.exercise).exists())
