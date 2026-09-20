"""Serializers for user account creation and profile management."""

from typing import ClassVar

from django.contrib.auth.models import User
from rest_framework import serializers

from .models import UserProfile


class UserSerializer(serializers.ModelSerializer):
    """Create a user while keeping the password write-only."""

    class Meta:
        model = User
        fields = ("id", "username", "password")
        extra_kwargs: ClassVar[dict[str, dict[str, bool]]] = {
            "password": {"write_only": True}
        }

    def create(self, validated_data):
        """Use Django's create_user helper to hash the password correctly."""
        user = User.objects.create_user(**validated_data)
        return user


class UserProfileSerializer(serializers.ModelSerializer):
    """Expose and validate a user's app preferences and selected workout."""

    class Meta:
        model = UserProfile
        fields = (
            "id",
            "preferred_theme",
            "current_workout",
        )

    def validate_current_workout(self, workout_plan):
        """Ensure the chosen workout belongs to the requesting user."""
        request = self.context["request"]

        if workout_plan is not None and workout_plan.user != request.user:
            raise serializers.ValidationError(
                "You can only select your own workout plan."
            )

        return workout_plan
