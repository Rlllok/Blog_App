from django.urls import path
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.urls import include, path

from .views import (
    CommentsViewSet,
    PostCommentsView,
)

app_name = 'comments'

router = DefaultRouter()
router.register(r'comments', CommentsViewSet, basename="comments")

urlpatterns = [
    path('', include(router.urls)),
    path('posts/<int:post_id>/comments/', PostCommentsView.as_view()),
]