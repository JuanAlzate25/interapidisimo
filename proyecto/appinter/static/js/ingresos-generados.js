document.addEventListener('DOMContentLoaded', function() {
  // Buscar todos los date-info y package-details dentro de cada package-entry
  const packageEntries = document.querySelectorAll('.package-entry');

  packageEntries.forEach(entry => {
      const packageId = entry.querySelector('.package-id');
      const packageDetails = entry.querySelector('.package-details');

      packageId.addEventListener('click', function(event) {
          event.stopPropagation(); // Evita cerrar inmediatamente
          packageDetails.classList.toggle('hidden');
      });

      // Cerrar detalles si hacen click fuera de este paquete
      document.addEventListener('click', function(e) {
          if (!entry.contains(e.target)) {
              packageDetails.classList.add('hidden');
          }
      });
  });
}); 
  