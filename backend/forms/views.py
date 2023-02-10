from rest_framework import generics, viewsets, mixins
from .models import FormsReserve, FormsCall
from .serializers import FormsReserveSerializer, FormsCallSerializer

class FormsReserveViewSet(viewsets.ModelViewSet):
    queryset = FormsReserve.objects.all()
    serializer_class = FormsReserveSerializer

class FormsCallViewSet(viewsets.ModelViewSet):
    queryset = FormsCall.objects.all()
    serializer_class = FormsCallSerializer

