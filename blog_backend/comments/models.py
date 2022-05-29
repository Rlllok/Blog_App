from django.db import models
# from posts.models import Post

# Create your models here.

class Comment(models.Model):
    created_date = models.DateTimeField(auto_now_add=True, blank=True)
    text = models.TextField(blank=False)
    owner = models.ForeignKey('accounts.User', related_name='comments', on_delete=models.CASCADE)
    post = models.ForeignKey('posts.Post', related_name='comments', on_delete=models.CASCADE)

    class Meta:
        ordering = ['-created_date']