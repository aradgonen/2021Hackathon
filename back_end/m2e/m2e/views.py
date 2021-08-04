from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.permissions import (
    IsAuthenticated,
    BasePermission
)
from rest_framework.response import Response
from rest_framework.views import APIView
from django.forms.models import model_to_dict
from rest_framework.generics import ListAPIView, CreateAPIView
from .models import Subject
from .serializers import SubjectSerializer
from .models import SolutionKnowledge
from .serializers import SolutionKnowledgeSerializer
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)

def get_tree(category):
    tree = model_to_dict(category, fields=['category_name', 'status', 'id'])
    if category.children.all().exists():
        children = list()
        for child in category.children.all():
            children.append(get_tree(child))
        tree['children'] = children
    return tree


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


class ExampleView(APIView):
    permission_classes = [IsAuthenticated, ]

    def get(self, request, format=None):
        content = {
            'status': 'request was permitted'
        }
        return Response(content)

class SolutionKnowledgeListView(ListAPIView):
    serializer_class = SolutionKnowledgeSerializer

    def get_queryset(self):
        queryset = SolutionKnowledge.objects.all()
        username = self.request.query_params.get('username', None)
        if username is not None:
            queryset = queryset.filter(student__username=username)
        return queryset


class SolutionKnowledgeCreateView(CreateAPIView):
    serializer_class = SolutionKnowledgeSerializer
    queryset = SolutionKnowledge.objects.all()

    def post(self, request):
        print(request.data)
        serializer = SolutionKnowledgeSerializer(data=request.data)
        serializer.is_valid()
        graded_assignment = serializer.create(request)
        if graded_assignment:
            return Response(status=HTTP_201_CREATED)
        return Response(status=HTTP_400_BAD_REQUEST)