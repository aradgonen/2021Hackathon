from rest_framework import serializers
from django.contrib.auth.models import User

from .models import (
    Subject,
    SolutionKnowledge,
    Answer,
    Question,
    Exam,
    Course,
    Material
)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "first_name", "last_name"]


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ["id", "title", "parent_subject"]


class SolutionKnowledgeSerializer(serializers.ModelSerializer):
    subject = SubjectSerializer(many=False, read_only=True)
    subject_id = serializers.PrimaryKeyRelatedField(source="subject", queryset=Subject.objects.all(), write_only=True)
    user = UserSerializer(many=False, read_only=True)
    user_id = serializers.PrimaryKeyRelatedField(source="user", queryset=User.objects.all(), write_only=True)

    class Meta:
        model = SolutionKnowledge
        fields = ["id", "title", "problem", "symptoms", "subject", "cause", "solution", "date", "user", "subject_id",
                  "user_id"]


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ["id", "answer"]


class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True, read_only=True)
    right_answer = AnswerSerializer(many=False, read_only=True)

    class Meta:
        model = Question
        fields = ["id", "question", "right_answer", "answers"]


class ExamSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Exam
        fields = ["id", "questions", "title"]
