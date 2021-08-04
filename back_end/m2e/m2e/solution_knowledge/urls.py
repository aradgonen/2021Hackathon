from django.urls import path
from m2e.m2e.views import SolutionKnowledgeListView, SolutionKnowledgeCreateView

urlpatterns = [
    path('', SolutionKnowledgeListView.as_view()),
    path('create/sk/', SolutionKnowledgeCreateView.as_view()),
]