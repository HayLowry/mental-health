from rest_framework import serializers
from .models import Survey

class SurveySerializer(serializers.ModelSerializer):

    class Meta:
        model = Survey 
        fields = ('pk', 'name', 'date', 'stress', 'anxiety', 'sleep', 'homesickness', 'satisfaction', 'spirit')