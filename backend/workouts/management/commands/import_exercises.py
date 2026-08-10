from pathlib import Path
import json

import cloudinary.uploader

from django.db import transaction
from django.core.management.base import BaseCommand, CommandError

from workouts.models import (
    Category,
    Equipment,
    Exercise,
    ExerciseImage,
    Instruction,
    Muscle,
)



class Command(BaseCommand):
    help = "Import exercises from the Free Exercise DB"

    def add_arguments(self, parser):
        parser.add_argument(
            "--source",
            type=str,
            required=True,
            help="Path to the Free Exercise DB repository",
        )

    def handle(self, *args, **options):
        source = Path(options["source"])

        if not source.exists():
            raise CommandError(
                f"Directory does not exist: {source}"
            )

        json_file = source / "dist" / "exercises.json"

        if not json_file.exists():
            raise CommandError(
                f"Could not find {json_file}"
            )

        self.stdout.write(
            self.style.SUCCESS(
                f"Reading {json_file}"
            )
        )

        with open(json_file, "r", encoding="utf-8") as f:
            exercises = json.load(f)

        self.stdout.write(
            self.style.SUCCESS(
                f"Found {len(exercises)} exercises."
            )
        )

        for exercise_data in exercises:
            with transaction.atomic():

        # Category
                category, _ = Category.objects.get_or_create(
                    name=exercise_data["category"]
                )

        # Equipment
                equipment = None

                if exercise_data["equipment"]:
                    equipment, _ = Equipment.objects.get_or_create(
                        name=exercise_data["equipment"]
                    )

        # Exercise
                exercise, created = Exercise.objects.get_or_create(
                    id=exercise_data["id"],
                    defaults={
                        "name": exercise_data["name"],
                        "level": exercise_data["level"],
                        "force": exercise_data["force"],
                        "mechanic": exercise_data["mechanic"],
                        "category": category,
                        "equipment": equipment,
                    },
                )

        # Primary muscles
                for muscle_name in exercise_data["primaryMuscles"]:
                    muscle, _ = Muscle.objects.get_or_create(
                        name=muscle_name
                    )

                    exercise.primary_muscles.add(muscle)

        # Secondary muscles
                for muscle_name in exercise_data["secondaryMuscles"]:
                    muscle, _ = Muscle.objects.get_or_create(
                        name=muscle_name
                    )

                    exercise.secondary_muscles.add(muscle)

        # Instructions
                for step_number, instruction_text in enumerate(
                    exercise_data["instructions"],
                    start=1,
                ):
                    Instruction.objects.get_or_create(
                        exercise=exercise,
                        step=step_number,
                        defaults={
                            "text": instruction_text,
                        },
                    )

                # Images
                for order, image_path in enumerate(
                    exercise_data["images"]
                ):
                    local_image = source / "exercises" / image_path

                    if not local_image.exists():
                        self.stdout.write(
                            self.style.WARNING(
                                f"Image not found: {local_image}"
                            )
                        )
                        continue

                    image, created_image = ExerciseImage.objects.get_or_create(
                        exercise=exercise,
                        order=order,
                    )

                    if created_image:
                        public_id = (
                            f"vitality/exercises/"
                            f"{exercise_data['id']}/{order}"
                        )

                        upload_result = cloudinary.uploader.upload(
                            str(local_image),
                            public_id=public_id,
                            overwrite=False,
                        )

                        image.public_id = upload_result["public_id"]
                        image.save(update_fields=["public_id"])

                        self.stdout.write(
                            self.style.SUCCESS(
                                f"Uploaded image {order}: {image_path}"
                            )
                        )
                    else:
                        self.stdout.write(
                            self.style.WARNING(
                                f"Image {order} already exists: "
                                f"{image.public_id}"
                            )
                        )

                if created:
                    self.stdout.write(
                        self.style.SUCCESS(
                            f"Created: {exercise.name}"
                        )
                    )
                else:
                    self.stdout.write(
                        self.style.WARNING(
                            f"{exercise.name} already exists"
                        )
                    )