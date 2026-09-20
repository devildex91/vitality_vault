"""API views for the public exercise catalog and user workout plans."""

from django.db.models import Q
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .models import Exercise, ExerciseImage, WorkoutPlan
from .serializers import (
    ExerciseImageSerializer,
    ExerciseListSerializer,
    WorkoutPlanSerializer,
)


@api_view(["GET"])
@permission_classes([AllowAny])
def getExercises(request):
    """Return the public exercise catalog with a slim, read-only payload."""
    models = Exercise.objects.only("id", "name")
    serializer = ExerciseListSerializer(models, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getExerciseImages(request):
    """Return exercise images for a list of requested exercise names or IDs."""
    exercise_values = request.query_params.getlist("exercises")

    if exercise_values:
        queryset = ExerciseImage.objects.filter(
            Q(exercise__name__in=exercise_values) | Q(exercise_id__in=exercise_values)
        )
    else:
        queryset = ExerciseImage.objects.none()

    serializer = ExerciseImageSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def createWorkoutPlan(request):
    """Create a workout plan for the authenticated user from nested payload data."""
    serializer = WorkoutPlanSerializer(data=request.data, context={"request": request})

    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getusersworkoutPlans(request):
    """List only the workout plans owned by the authenticated user."""

    workout_plans = WorkoutPlan.objects.filter(user=request.user).prefetch_related(
        "days__exercises"
    )
    serializer = WorkoutPlanSerializer(workout_plans, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def updateusersworkoutPlan(request):
    """Update a workout plan only when it belongs to the authenticated user."""

    workout_plan_id = request.data.get("id")

    if not workout_plan_id:
        return Response(
            {"error": "Workout plan id is required."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    try:
        workout_plan = WorkoutPlan.objects.get(
            id=workout_plan_id,
            user=request.user,
        )
    except WorkoutPlan.DoesNotExist:
        return Response(
            {"error": "Workout plan not found"}, status=status.HTTP_404_NOT_FOUND
        )

    serializer = WorkoutPlanSerializer(workout_plan, data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def deleteusersworkoutPlan(request, pk):
    """Delete a workout plan only when it belongs to the authenticated user."""

    try:
        workout_plan = WorkoutPlan.objects.get(
            id=pk,
            user=request.user,
        )

        workout_plan.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    except WorkoutPlan.DoesNotExist:
        return Response(
            {"error": "Workout plan not found"},
            status=status.HTTP_404_NOT_FOUND,
        )
