from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import PermissionsMixin
# from django.utils.translation import ugettext_lazy as _
from django.conf import settings
from datetime import date
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.


class User(AbstractUser):
    is_doctor = models.BooleanField(default=False)
    phone_no = PhoneNumberField()

    def __str__(self):
        return self.username


class Other(models.Model):
    username = models.CharField(max_length=256,default='sam')
    user = models.OneToOneField(User,on_delete=models.CASCADE, unique=True)
    email = models.EmailField(unique=True,default='example@gmail.com')
    phone_no = PhoneNumberField(unique=True,default='+917838124712')

    def __str__(self):
        return self.username


class Doctor(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE, unique=True)
    username = models.CharField(max_length=256,default='sam')
    patients = models.ManyToManyField(Other)
    license_no = models.CharField(max_length=12,default='2RT5HAc56T')
    email = models.EmailField(unique=True,default='example@gmail.com')
    phone_no = PhoneNumberField(unique=True,default='+917838124712')

    def __str__(self):
        return self.username
