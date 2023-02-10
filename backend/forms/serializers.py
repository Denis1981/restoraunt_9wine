from rest_framework import serializers
from .models import FormsReserve, FormsCall

class FormsReserveSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormsReserve
        fields = "__all__"


class FormsCallSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormsCall
        fields = "__all__"