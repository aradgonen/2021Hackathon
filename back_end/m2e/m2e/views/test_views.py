from rest_framework.permissions import IsAuthenticated, BasePermission
from rest_framework.response import Response
from rest_framework.views import APIView


class ExampleView(APIView):
    permission_classes = [IsAuthenticated, ]

    def get(self, request, format=None):
        content = {
            'status': 'request was permitted'
        }
        return Response(content)
