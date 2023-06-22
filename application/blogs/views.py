from django.http import HttpResponseNotFound
from django.shortcuts import render

def index(request):
    context = {'blogs': 'blogs'}
    return render(request, 'blogs/index.html', context)