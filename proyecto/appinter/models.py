from django.db import models

class Usuario(models.Model):
    id = models.CharField(primary_key=True, max_length=50)  # username
    password = models.CharField(max_length=100)
    rol = models.CharField(max_length=20)  # administrador o mensajero

    def __str__(self):
        return f"{self.id} ({self.rol})"

class Trabajador(models.Model):
    cedula = models.CharField(primary_key=True, max_length=20)
    nombre = models.CharField(max_length=100)
    telefono = models.CharField(max_length=20)
    estado = models.BooleanField(default=True)  # activo o desactivado

    def __str__(self):
        return self.nombre

class Paquete(models.Model):
    id = models.CharField(primary_key=True, max_length=50)  # número de guía
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    fecha = models.DateField(auto_now_add=True)
    trabajador = models.ForeignKey(Trabajador, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"Paquete {self.id} - ${self.valor}"


