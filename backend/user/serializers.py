from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UserProfile


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = [
            "id",
            "prefered_theme",
            "current_workout",
        ]

    def validate_current_workout(self, workout_plan):
        request = self.context["request"]

        if workout_plan is not None and workout_plan.user != request.user:
            raise serializers.ValidationError(
                "You can only select your own workout plan."
            )

        return workout_plan