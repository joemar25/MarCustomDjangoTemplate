from django.http import HttpResponseNotFound
from django.shortcuts import render

def index(request):
    context = {'blogs': 'blogs'}

    """_summary_

    call the context by the variable name they were in:
    e.g. blogs, no need for context['blogs']
    """
    return render(request, 'blogs/index.html', context)
