from rest_framework import generics, viewsets, mixins
from .models import FormsReserve
from .serializers import FormsReserveSerializer

class FormsReserveViewSet(viewsets.ModelViewSet):
    queryset = FormsReserve.objects.all()
    serializer_class = FormsReserveSerializer



