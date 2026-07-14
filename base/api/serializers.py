from rest_framework import serializers
from ..models import Note


class NoteSerializer(serializers.ModelSerializer):
    model = Note
    fields = ['id', 'welcome_message']
