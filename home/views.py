from django.shortcuts import render

# Create your views here.
def home(request):
    context = {
        'page': 'homepage',
    }
    return render(request, 'index.html', context)

def page1(request):
    context = {
        'page': 'page1',
    }
    return render(request, 'page1.html', context)