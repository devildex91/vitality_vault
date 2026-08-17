from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from .models import Exercise
from .serializers import ExerciseSerializer, WorkoutPlanSerializer
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def getExercises(request):
    models = Exercise.objects.all()
    serializer = ExerciseSerializer(models, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def createWorkoutPlan(request):
    serializer = WorkoutPlanSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
