from django.conf import settings
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # uncomment admin if desired
    # path("admin/", admin.site.urls),
    path("", include("application.main.urls")),
]

if settings.DEBUG:
    # do not do this in production [debug=False]
    from django.conf.urls.static import static

    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
