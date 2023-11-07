import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY = "django-insecure-^q#4_h0(o^k@rawy*2=e0uv78xy%ys5!)g73lpq(_-@@429!)b"
DEBUG = True
ALLOWED_HOSTS = ["*"]

# Open the settings.py file and look for the INSTALLED_APPS list
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    # Mar: Apps here - If you add an application in the 'application folder', add here
    "application.main",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

# mar - custom
ROOT_URLCONF = "application._core.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [
            # Add your template directories here
            os.path.join(BASE_DIR, "templates"),
        ],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "application._core.wsgi.application"

# mar - custom
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "_core/database/db.sqlite3",
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True

# Mar: Custom Static File Area for CSS & JS
STATIC_URL = "application/static/"

# for local static files locator for each application created
STATICFILES_DIRS = [
    BASE_DIR / "static",
]

# for tailwind css local [for use of the python manage.py collectstatic]
# in production, we need a cdn files (contents delivery network)
STATIC_ROOT = BASE_DIR.parent / "production-cdn" / "static"

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# Mar: DataFlair for Local Memory Cache (do not change)
CACHES = {
    "default": {
        "BACKEND": "django.core.cache.backends.locmem.LocMemCache",
        "LOCATION": "DataFlair",
    }
}
