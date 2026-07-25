from django.contrib import admin
# model imports here 
from .models import User


# Register your models here.
class userAdmin(admin.ModelAdmin):

    # Sign up fields here
    register_display = ("user_name", "email", "first_name", "last_name", "password") 


admin.site.register(User, userAdmin)