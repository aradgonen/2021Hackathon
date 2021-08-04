from django.urls import path
from rest_framework import mixins

from .views import (
    SubjectViewSet,
    SolutionKnowledgeView,
    ExamView
)

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'subjects', SubjectViewSet, basename='subject')
router.register(r'solution-knowledge', SolutionKnowledgeView, basename='solution-knowledge')
router.register(r'exam', ExamView, basename='exam')

urlpatterns = [
    *router.urls
]
