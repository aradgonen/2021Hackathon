from rest_framework import serializers
from django.contrib.auth.models import User

from .models import (
    Subject,
    SolutionKnowledge,
    Answer,
    Question,
    Exam,
    Course,
    Material,
    Progress,
    Step
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


class CourseSerializer(serializers.ModelSerializer):
    subject = SubjectSerializer(many=False, read_only=True)
    # own_group = models.ForeignKey(Group, on_delete=models.CASCADE, related_name='courses', null=True, blank=True)

    class Meta:
        model = Progress
        fields = ["id", "title", ""]

class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Progress
        fields = ["id", "title", "file_path", "description"]


class StepSerializer(serializers.ModelSerializer):
    materials = MaterialSerializer(many=True, read_only=True)
    materials_ids = serializers.PrimaryKeyRelatedField(source="materials", queryset=Material.objects.all(), write_only=True)

    class Meta:
        model = Progress
        fields = ["id", "title", "description", "index", "materials", "materials_ids"]

class ProgressSerializer(serializers.ModelSerializer):
    course = SubjectSerializer(many=False, read_only=True)
    course_id = serializers.PrimaryKeyRelatedField(source="subject", queryset=Subject.objects.all(), write_only=True)
    user = UserSerializer(many=False, read_only=True)
    user_id = serializers.PrimaryKeyRelatedField(source="user", queryset=User.objects.all(), write_only=True)

    class Meta:
        model = Progress
        fields = ["id", "is_finished", "started_date", "finished_date", "course", "course_id", "user", "current_step",
                  "date"]
