from rest_framework import serializers
from .models import Subject


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ["id", "title", "parent_subject"]
class SolutionKnowledgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ["title","subject","problem","symptoms","cause","solution","date","user"]
