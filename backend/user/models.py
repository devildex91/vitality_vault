"""User-related models for profile and personalization data."""

from django.conf import settings
from django.db import models


class UserProfile(models.Model):
    """Store the authenticated user's app-specific preferences and active plan."""

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="profile"
    )

    THEME_CHOICES = (
        ("nord", "Nord"),
        ("halloween", "Halloween"),
    )

    preferred_theme = models.CharField(
        max_length=20, choices=THEME_CHOICES, default="nord"
    )

    current_workout = models.ForeignKey(
        "workouts.WorkoutPlan",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="selected_by_profiles",
    )

    def __str__(self):
        return f"{self.user}'s profile"
