# Generated by Django 4.0.4 on 2022-06-02 08:23

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('chat', '0002_connectedusers'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ConnectedUsers',
            new_name='OnlineUsers',
        ),
    ]
