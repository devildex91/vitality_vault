from django.urls import path, include
from .views import UserCreate, UserDetailView, UserProfileView


urlpatterns = [
    # Public registration endpoint for creating a new user account.
    path('user/register/', UserCreate.as_view(), name='user_create'),

    # Authenticated user detail endpoint for reading/updating the current user.
    path('auth/user/', UserDetailView.as_view(), name='user_detail'),

    # Django REST framework's built-in login/logout views for browser-based auth.
    path('user-auth/', include('rest_framework.urls')),

    # Current user's profile data.
    path('profile/', UserProfileView.as_view(), name='user-profile'),
]

