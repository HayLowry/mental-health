from django.db import models
from datetime import date

class Survey(models.Model):
    name = models.CharField("name", max_length=240)
    date = models.DateField(default=date(2023, 12, 1))
    stress = models.IntegerField()
    anxiety = models.IntegerField()
    sleep = models.IntegerField()
    homesickness = models.IntegerField()
    satisfaction = models.IntegerField()
    spirit = models.IntegerField()

    def __str__(self):
        return self.name