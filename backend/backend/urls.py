from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve

from articles.views import *
from menus.views import *
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'articles', ArticleViewSet )
router.register(r'menus', MenusViewSet )


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(router.urls)), # http://127.0.0.1:8000/api/v1/articles/
    path('ckeditor/', include('ckeditor_uploader.urls')),
]


if settings.DEBUG:
    # urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    import debug_toolbar

    urlpatterns = [
                      path('__debug__/', include(debug_toolbar.urls)),
                  ] + urlpatterns
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)