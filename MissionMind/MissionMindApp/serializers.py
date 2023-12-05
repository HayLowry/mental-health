from rest_framework import serializers
from .models import Survey

class SurveySerializer(serializers.ModelSerializer):

    class Meta:
        model = Survey 
        fields = ('pk', 'name', 'question1', 'question2', 'question3', 'question4', 'question5')