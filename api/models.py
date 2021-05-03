from django.db import models

# Create your models here.

class Order(models.Model):

    date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=10 ,default="new")
    apples = models.IntegerField(null=False, default=0)
    pears = models.IntegerField(null=False, default=0)
    peaches = models.IntegerField(null=False, default=0)
    got_apples = models.IntegerField(null=False, default=0)
    got_pears = models.IntegerField(null=False, default=0)
    got_peaches = models.IntegerField(null=False, default=0)
    all_fruit = models.IntegerField(null=False, default=0)
    collected = models.IntegerField(null=False, default=0)

    

class Round(models.Model):
    apples = models.IntegerField(null=False, default=0)
    pears = models.IntegerField(null=False, default=0)
    peaches = models.IntegerField(null=False, default=0)

class miniRound(models.Model):
    r_id = models.IntegerField(null=False, default=-1)
    o_id = models.IntegerField(null=False, default=-1)
    fruit = models.CharField(max_length=5)
    quantity = models.IntegerField(null=False, default=-1)