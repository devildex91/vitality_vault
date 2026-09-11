
from pathlib import Path
import os
from decouple import config
from datetime import timedelta
import dj_database_url
from corsheaders.defaults import default_headers
import cloudinary
import cloudinary.uploader
import cloudinary.api	
cloudinary.config( 
  	cloud_name=config('CLOUD_NAME'),
  	api_key=config('CLOUDINARY_KEY'),
  	api_secret=config('API_SECRET'))

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = config(
    'DJANGO_SECRET_KEY',
    default='django-insecure-fallback-key-for-heroku-building'
)

MY_PASSWORD = config('MY_PASSWORD', default=None)
FRONTEND_URL = os.environ.get('FRONTEND_URL', 'http://localhost:5173')

DEBUG = False

ALLOWED_HOSTS = [
    'vitality-vault-backend-c2878a5636af.herokuapp.com',
    '127.0.0.1',
    'localhost'
]


# Application definition

INSTALLED_APPS = [
    'corsheaders',
    'rest_framework',
    'rest_framework.authtoken',
    'rest_framework_simplejwt',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'user',
    'workouts'
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'

CORS_ALLOWED_ORIGINS = [
    "https://vitality-vault-omega.vercel.app",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

CORS_ALLOW_CREDENTIALS = True

CSRF_TRUSTED_ORIGINS = [
    "https://vitality-vault-omega.vercel.app",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

SESSION_COOKIE_SAMESITE = 'None'
SESSION_COOKIE_SECURE = True

CSRF_COOKIE_SAMESITE = 'None'
CSRF_COOKIE_SECURE = True


# Allow the frontend app to send standard browser headers for authenticated API calls.
CORS_ALLOW_HEADERS = list(default_headers)

# Use Django's default user auth backend for the app's email/password flow.
AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
)

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": os.path.join(BASE_DIR, "db.sqlite3"),
    }
}

if os.environ.get("DATABASE_URL"):
    DATABASES["default"] = dj_database_url.config(
        conn_max_age=600,
        ssl_require=True  
    )

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",   
    ),
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.IsAuthenticated",
    ]   
}
SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=30),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=3),
}


LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)


STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

STORAGES = {
    "default": {
        "BACKEND": "django.core.files.storage.FileSystemStorage",
    },
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}
