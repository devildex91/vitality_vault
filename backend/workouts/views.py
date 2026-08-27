from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Exercise, WorkoutDay, WorkoutExercise, WorkoutPlan
from .serializers import ExerciseSerializer, WorkoutPlanSerializer
from rest_framework.response import Response
from rest_framework import status
# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def getExercises(request):
    models = Exercise.objects.all()
    serializer = ExerciseSerializer(models, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def createWorkoutPlan(request):
    serializer = WorkoutPlanSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getusersworkoutPlans(request):
    workout_plans = WorkoutPlan.objects.filter(user=request.user).prefetch_related('days__exercises')
    serializer = WorkoutPlanSerializer(workout_plans, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateusersworkoutPlan(request):
    workout_plan_id = request.data.get("id")

    if not workout_plan_id:
        return Response(
            {"error": "Workout plan id is required."},
            status=status.HTTP_400_BAD_REQUEST
        )
     # user=request makes sure its the users workout so cant supply id of someone elses workout   
    try:
        workout_plan = WorkoutPlan.objects.get(
            id=workout_plan_id,
            user=request.user
        )
    except WorkoutPlan.DoesNotExist:
        return Response(
            {"error": "Workout  plan not found"},
            status=status.HTTP_404_NOT_FOUND
        ) 
#workout plan is existing plan and data is new data coming in
    serializer = WorkoutPlanSerializer(
        workout_plan,
        data=request.data
    )
#calls serializer if valid
    if serializer.is_valid():
        serializer.save()

        return Response(
            serializer.data,
            status=status.HTTP_200_OK
        )

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )
#pk allows plan allows id lookup from URL 
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteusersworkoutPlan(request, pk):
   
    try:
        workout_plan = WorkoutPlan.objects.get(
             id=pk,
             user=request.user
                )
        
        workout_plan.delete()
        return Response(
                status=status.HTTP_204_NO_CONTENT
                )

    except WorkoutPlan.DoesNotExist:
        return Response(
                {"error": "Workout  plan not found"},
                status=status.HTTP_404_NOT_FOUND,
                )    