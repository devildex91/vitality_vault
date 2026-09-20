from django.contrib import admin

from .models import UserProfile


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
	list_display = ("user", "preferred_theme", "current_workout")
	list_filter = ("preferred_theme",)
	search_fields = ("user__username", "user__email")
	autocomplete_fields = ("user",)
	raw_id_fields = ("current_workout",)
