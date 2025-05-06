from django.shortcuts import render


def edicion_paquete(request):
    return render(request, 'edicion-paquetes.html')
