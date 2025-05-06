from django.shortcuts import render, redirect
from appinter.models import Usuario, Trabajador
from django.contrib import messages

def registerUsuario(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        cedula = request.POST.get('cedula')
        telefono = request.POST.get('telefono')
        rol = request.POST.get('rol')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')

        if password != confirm_password:
            messages.error(request, "Las contraseñas no coinciden.")
            return render(request, 'registrar-usuarios.html')

        if Usuario.objects.filter(id=cedula).exists() or Trabajador.objects.filter(cedula=cedula).exists():
            messages.error(request, "Este usuario ya está registrado.")
            return render(request, 'registrar-usuarios.html')

        trabajador = Trabajador(cedula=cedula, nombre=nombre, telefono=telefono)
        trabajador.save()

        usuario = Usuario(id=cedula, password=password, rol=rol)
        usuario.save()

  
        return render(request, 'registrar-usuarios.html', {
            'registro_exitoso': True,
            'nombre': nombre
        })

    return render(request, 'registrar-usuarios.html')