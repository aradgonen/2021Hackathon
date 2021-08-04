from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.permissions import (
    IsAuthenticated,
    BasePermission
)
from rest_framework.response import Response
from rest_framework.views import APIView
from django.forms.models import model_to_dict

from .models import (
    Subject,
    Material,
    Question,
    SolutionKnowledge,
    Exam,
    Answer,
)
from .serializers import (
    SubjectSerializer,
    SolutionKnowledgeSerializer,
    UserSerializer,
    ExamSerializer
)


class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        all_subjects = list(serializer.data)

        parent_to_children = {}
        for subject in all_subjects:
            parent_id = subject["parent_subject"]
            subject_id = subject["id"]
            if parent_id:
                if parent_id not in parent_to_children:
                    parent_to_children[parent_id] = []
                parent_to_children[parent_id].append(subject_id)

        id_to_subject = {subject["id"]: subject for subject in all_subjects}

        # This recursive function doest take into acount loops
        def create_subject_hierarchy(root_subject_id):
            input_subject = id_to_subject[root_subject_id]
            root_subject = {
                "id": input_subject["id"],
                "title": input_subject["title"],
            }

            # does the subject has children
            children = []
            if root_subject["id"] in parent_to_children:
                for child_id in parent_to_children[root_subject["id"]]:
                    child_subject = create_subject_hierarchy(child_id)
                    children.append(child_subject)

            root_subject["children"] = children
            return root_subject

        # starts with the ids of root subjects (without parent)

        root_subject_ids = [subject["id"] for subject in all_subjects if not subject["parent_subject"]]
        subject_hierarchy = []

        for root_id in root_subject_ids:
            subject = create_subject_hierarchy(root_id)
            subject_hierarchy.append(subject)

        return Response(subject_hierarchy)


class SolutionKnowledgeView(viewsets.ModelViewSet):
    queryset = SolutionKnowledge.objects.all()
    serializer_class = SolutionKnowledgeSerializer

    def create(self, request, *args, **kwargs):
        serializer = SolutionKnowledgeSerializer(data=request.data)

        if serializer.is_valid():
            serializer.subject = SubjectSerializer(1)
            serializer.user = UserSerializer()
            serializer.save()
            return Response({'data': serializer.data})
        else:
            return Response({'data': serializer.errors})


class ExamView(viewsets.ModelViewSet):
    queryset = Exam.objects.all()
    serializer_class = ExamSerializer

    def create(self, request, *args, **kwargs):
        data = request.data
        exam = Exam(title=data["title"])
        exam.save()

        for question in data["questions"]:
            q = Question(question=question["question"])
            q.exam = exam
            q.save()

            for answer in question["answers"]:
                a = Answer(answer=answer)
                a.question = q

                if question["right_answer"] == answer:
                    q.right_answer = a

                a.save()

            q.save()
        exam.save()
        return Response({'status': "ok"})


@api_view(['GET'])
def get_materials_by_subject(request):
    pass