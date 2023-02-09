from rest_framework import serializers
from .models import FormsReserve

class FormsReserveSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormsReserve
        fields = "__all__"