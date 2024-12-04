from django.shortcuts import render
from .models import Todo 
from rest_framework.viewsets import ModelViewSet
from .serializers import TodoModelSerializer,UserRegisterSerializer
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import authentication,permissions
# Create your views here.
class UserRegisterView(ViewSet):
    def create(self,request,*args,**kwargs):
        serializer=UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        else:
            return Response(data=serializer.errors)       
class TodoModelViewSet(ModelViewSet):
    authentication_classes=[authentication.TokenAuthentication]
    permission_classes=[permissions.IsAuthenticated]
    serializer_class=TodoModelSerializer
    queryset=Todo.objects.all()

    def create(self, request, *args, **kwargs):
        serializer=TodoModelSerializer(data=request.data,context={"user":request.user})
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        else:
            return Response(data=serializer.errors)

