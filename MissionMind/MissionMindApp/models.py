from django.db import models
from datetime import date

class Survey(models.Model):
    name = models.CharField("Name", max_length=240)
    date = models.DateField(default=date(2023, 12, 1))
    question1 = models.IntegerField()
    question2 = models.IntegerField()
    question3 = models.IntegerField()
    question4 = models.IntegerField()
    question5 = models.IntegerField()

    def __str__(self):
        return self.name