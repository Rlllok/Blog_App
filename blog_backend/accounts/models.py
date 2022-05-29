import uuid

from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from rest_framework_simplejwt.tokens import RefreshToken


class UserManager(BaseUserManager):

    def create_user(self, username, email, password):
        if username is None:
            raise TypeError('Users must have a username.')
        if email is None:
            raise TypeError('Users must hane an email adress.')
        if password is None:
            raise TypeError('Users must have a password.')

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, username, email, password):
        if password is None:
            raise TypeError('Superusers must have a password.')

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.is_active = True
        user.save()

        return user


class User(AbstractBaseUser, PermissionsMixin):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(db_index=True, max_length=255, unique=True)
    email = models.EmailField(db_index=True, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True)
    bio = models.TextField(null=True)
    full_name = models.TextField(max_length=2000, null=True)
    birth_date = models.DateField(null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__(self):
        string = self.email if self.email != '' else self.get_full_name()
        return f'{self.id} {string}'

    @property
    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return {'refresh': str(refresh), 'access':str(refresh.access_token)}

    def get_full_name(self):
        return self.full_name

    def get_username(self):
        return self.username