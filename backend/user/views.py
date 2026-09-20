from typing import ClassVar

from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import UserProfile
from .serializers import UserProfileSerializer, UserSerializer

User = get_user_model()


class UserCreate(generics.CreateAPIView):
    """Allow anonymous users to create an account with the app's user serializer."""

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes: ClassVar[tuple[type[AllowAny], ...]] = (AllowAny,)


class UserDetailView(generics.RetrieveUpdateAPIView):
    """Return or update the currently authenticated user record."""

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes: ClassVar[tuple[type[IsAuthenticated], ...]] = (
        IsAuthenticated,
    )

    def get_object(self):
        """Restrict object access to the authenticated user only."""
        return self.request.user


# Ensures each user has a profile row and returns it for authenticated requests.
class UserProfileView(generics.RetrieveUpdateAPIView):
    """Ensure a profile row exists and return it for the authenticated user."""

    serializer_class = UserProfileSerializer
    permission_classes: ClassVar[tuple[type[IsAuthenticated], ...]] = (
        IsAuthenticated,
    )

    def get_object(self):
        profile, _ = UserProfile.objects.get_or_create(user=self.request.user)

        return profile
