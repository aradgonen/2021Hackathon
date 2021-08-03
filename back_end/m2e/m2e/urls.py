from django.urls import path
from rest_framework import mixins

from .views import (
    ExampleView,
    SubjectViewSet
)

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'subject', SubjectViewSet, basename='subject')

urlpatterns = [
    *router.urls
]