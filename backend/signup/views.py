from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Email
import json

@csrf_exempt
def register_email(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')

        if email is None:
            return JsonResponse({'error': 'Email not provided'}, status=400)

        # Create a new email object and save it
        Email.objects.get_or_create(email=email)

        return JsonResponse({'success': 'Email received!!!'})

    return JsonResponse({'error': 'Invalid request'}, status=400)


