from django.db import models

# Create your models here.

class Post(models.Model):
    created_date = models.DateTimeField(auto_now_add=True, blank=True)
    owner = models.ForeignKey('accounts.User', related_name='posts', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField(default='')

    class Meta:
        ordering = ['-created_date']

    def __str__(self):
        return self.title