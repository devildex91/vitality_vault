from django.urls import reverse
from django.contrib.auth import get_user_model
from rest_framework.test import APITestCase
from rest_framework import status
from user.models import UserProfile

User = get_user_model()

class UserViewsTestCase(APITestCase):

    @classmethod
    def setUpTestData(cls):
    
        cls.user = User.objects.create_user(username="testuser", password="password123")
        
        cls.create_url = reverse('user_create')       
        cls.detail_url = reverse('user_detail')       
        cls.profile_url = reverse('user-profile')     

    

    def test_create_user_success(self):
        """Verify that an anonymous user can sign up successfully via POST."""
        data = {"username": "newuser", "password": "securepassword"}
        response = self.client.post(self.create_url, data)
        
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['username'], "newuser")
        self.assertNotIn('password', response.data)


    def test_get_user_detail_authenticated(self):
        """Verify an authenticated user can retrieve their own details."""
        self.client.force_authenticate(user=self.user)
        response = self.client.get(self.detail_url)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['username'], "testuser")

    def test_get_user_detail_unauthenticated(self):
        """Verify unauthenticated requests are blocked from user details."""
        response = self.client.get(self.detail_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)



    def test_get_profile_creates_automatically_if_missing(self):
        """Verify the view automatically gets or creates a user profile on the fly."""
        self.client.force_authenticate(user=self.user)
        
      
        UserProfile.objects.filter(user=self.user).delete()
        
        response = self.client.get(self.profile_url)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
        self.assertEqual(response.data['preferred_theme'], 'nord')
        self.assertTrue(UserProfile.objects.filter(user=self.user).exists())
