from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from .models import Exercise
from .serializers import ExerciseSerializer
from rest_framework.response import Response
# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def getExercises(request):
    models = Exercise.objects.all()
    serializer = ExerciseSerializer(models, many=True)
    return Response(serializer.data)