from django.urls import path

from .views import ExampleView

urlpatterns = [
    path('test/', ExampleView.as_view(), name='test'),
]