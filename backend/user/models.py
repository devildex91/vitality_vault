from django.db import models
from django.conf import settings

# Create your models here.


class UserProfile(models.Model):
    #Custom model to link to default user to store custom custom choices regarding theme/workout
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='profile'
    )

    THEME_CHOICES = [
        ('nord', 'Nord'),
        ('synthwave', 'Synthwave'),
    ]

    preferred_theme = models.CharField(
        max_length=20,
        choices=THEME_CHOICES,
        default='nord'
    )

    current_workout = models.ForeignKey(
        "workouts.WorkoutPlan",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='selected_by_profiles'
    )

    def __str__(self):
        return f"{self.user}'s profile"

