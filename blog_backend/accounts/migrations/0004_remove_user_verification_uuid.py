# Generated by Django 4.0.4 on 2022-06-02 11:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_user_verification_uuid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='verification_uuid',
        ),
    ]
