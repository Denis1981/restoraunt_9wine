from rest_framework import generics, viewsets, mixins
from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination

from .models import Menus
from .serializers import MenusSerializer

class MenusPagination(PageNumberPagination):
    page_size = 0
    page_size_query_param = 'page_size'
    max_page_size = 100

class MenusViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Menus.objects.all()
    serializer_class = MenusSerializer
    pagination_class = MenusPagination
