from django.urls import path, include
from .views import UserCreate, UserDetailView, validate_google_token, google_login_callback



urlpatterns = [

    path('user/register/', UserCreate.as_view(), name='user_create'),
    path('auth/user/', UserDetailView.as_view(), name='user_detail'),
    path('google/validate_token/', validate_google_token, name='validate_token'),
    path('user-auth/', include('rest_framework.urls')),
    path('accounts/', include('allauth.urls')),
    path('callback/', google_login_callback, name='callback')

    
]

