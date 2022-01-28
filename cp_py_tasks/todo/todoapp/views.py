from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.utils import timezone
from .models import Todo
# Create your views here.
def index(request):
    todo_items = Todo.objects.all().order_by('-added_date')
    return render(request, 'todoapp/index.html', {
    'items': todo_items,
    })

def add(request):
    if request.method == "POST":
        added_date = timezone.now()
        content = request.POST['content']
        Todo.objects.create(added_date=added_date,text=content)
    return HttpResponseRedirect('/')

def delete(request, id):
    Todo.objects.get(id=id).delete()
    return HttpResponseRedirect('/')
