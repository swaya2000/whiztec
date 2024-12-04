from django.db import models

# Create your models here.

from django.db import models
from django.contrib.auth.models import User

class Todo(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('In Progress', 'In Progress'),
        ('Completed', 'Completed'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content = models.CharField(max_length=200)
    status = models.CharField(max_length=100,choices=STATUS_CHOICES,default='Pending')
    due_date = models.DateTimeField(null=True, blank=True)  

