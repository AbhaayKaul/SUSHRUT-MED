from django.shortcuts import render
from rest_framework.decorators import api_view
from . import models,serializers
from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView,RetrieveAPIView,UpdateAPIView,RetrieveUpdateAPIView,ListCreateAPIView,DestroyAPIView
)
# Create your views here.
# @api_view(['POST',])
# def doc_registration(request):
#     serializer = serializers.DoctorRegistrationSerializer
#     if serializer.is_valid():
#         user = serializer.save()
#         doc = serializer.create()


class DoctorListView(ListCreateAPIView):
    queryset = models.Doctor.objects.all()
    serializer_class = serializers.DoctorRegistrationSerializer


class UserListView(ListCreateAPIView):
    queryset = models.Other.objects.all()
    serializer_class = serializers.UserRegistrationSerializer
