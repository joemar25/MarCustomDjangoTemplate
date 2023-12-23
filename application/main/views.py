from django.http import HttpResponseNotFound
from django.shortcuts import render
from .helpers.function import try_me


def index(request):
    context = {"data": "content value", "function_data": try_me()}

    """_summary_

    call the context by the variable name they were in:
    e.g. in blogs website, no need for context['data']
    """
    return render(request, "main/index.html", context)


def main(request):
    context = {"data": "hello this is main page", "function_data": try_me()}
    return render(request, "main/guest/index.html", context)


def settings(request):
    return render(request, "main/settings.html")
