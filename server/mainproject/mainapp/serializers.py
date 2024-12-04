from rest_framework import serializers
from .models import Todo
from django.contrib.auth.models import User


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=["username","email","password"]
    def create(self,validated_data):
        return User.objects.create_user(**validated_data)

class TodoModelSerializer(serializers.ModelSerializer):
    user=serializers.CharField(read_only=True)
    class Meta:
        model=Todo
        fields=["title","content","status","user","id","due_date"]
    def create(self,validated_data):
        user=self.context.get("user")
        return Todo.objects.create(user=user,**validated_data)
