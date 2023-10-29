from django.http import HttpResponseNotFound
from django.shortcuts import render


def index(request):
    context = {"data": "content value"}

    """_summary_

    call the context by the variable name they were in:
    e.g. in blogs website, no need for context['data']
    """
    return render(request, "main/index.html", context)
