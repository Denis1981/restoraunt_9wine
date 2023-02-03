from rest_framework import generics, viewsets, mixins
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import *
from .serializers import *


class ArticleViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Articles.objects.all()
    serializer_class = ArticlesSerializer