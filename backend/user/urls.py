from django.urls import path, include
from .views import UserCreate, UserDetailView, validate_google_token, google_login_callback
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [

    path('user/register/', UserCreate.as_view(), name='user_create'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/user/', UserDetailView.as_view(), name='user_detail'),
    path('google/validate_token/', validate_google_token, name='validate_token'),
    path('user-auth/', include('rest_framework.urls')),
    path('accounts/', include('allauth.urls')),
    path('callback/', google_login_callback, name='callback')

    
]

