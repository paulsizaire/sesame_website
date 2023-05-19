from django.db import models

class Email(models.Model):
    email = models.EmailField(unique=True)  # Only unique emails will be saved

