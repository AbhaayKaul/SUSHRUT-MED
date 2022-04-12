from rest_framework import serializers
from .models import Doctor,Other,User


class DoctorRegistrationSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(style={'input type': 'password'},write_only=True)
    password2 = serializers.CharField(style={'input type': 'password'},write_only=True)
    license_no = serializers.CharField(max_length=12)
    class Meta:
        model = User
        fields = ['email', 'username',  'phone_no', 'license_no', 'password1', 'password2']
        extra_kwargs = {
            'password': {'write_only': 'True'}
        }

    def save(self):
        user = User(
            email=self.validated_data['email'],
            username=self.validated_data['username'],
            phone_no=self.validated_data['phone_no'],
            is_doctor = True
        )
        password = self.validated_data['password1']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({'password':'mismatched password'})
        user.set_password(password)

        user.save()
        doc = Doctor.objects.create(user=user)
        doc.username = self.validated_data['username']
        doc.license_no = self.validated_data['license_no']
        doc.phone_no = self.validated_data['phone_no']
        doc.email = self.validated_data['email']
        doc.save()
        return user

    def create(self):
        return Doctor.objects.create()

#  for registration of users that are not Doctor


class UserRegistrationSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(style={'input type': 'password'},write_only=True)
    password2 = serializers.CharField(style={'input type': 'password'},write_only=True)

    class Meta:
        model = User
        fields = ['email', 'username',  'phone_no', 'password1', 'password2']
        extra_kwargs = {
            'password': {'write_only': 'True'}
        }

    def save(self):
        user = User(
            email=self.validated_data['email'],
            username=self.validated_data['username'],
            phone_no=self.validated_data['phone_no'],
            is_doctor=False
        )
        password = self.validated_data['password1']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({'password':'mismatched password'})
        user.set_password(password)

        user.save()
        other = Other.objects.create(user=user)
        other.username = self.validated_data['username']

        other.phone_no = self.validated_data['phone_no']
        other.email = self.validated_data['email']
        other.save()
        return user

    def create(self):
        return Doctor.objects.create()



