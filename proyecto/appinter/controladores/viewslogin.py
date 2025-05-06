from django.shortcuts import render,redirect
from appinter.models import Usuario 

def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        try:
            usuario = Usuario.objects.get(id=username)
            if usuario.password == password:
                request.session['usuario'] = usuario.id
                request.session['rol'] = usuario.rol
                return redirect('index')  # Cambia 'index' por el nombre real de tu vista principal
            else:
                error = 'Contraseña incorrecta.'
        except Usuario.DoesNotExist:
            error = 'El usuario no existe.'

        return render(request, 'login.html', {'error': error})

    return render(request, 'login.html')

