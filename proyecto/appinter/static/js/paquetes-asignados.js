const inputSearch = document.querySelector(".input-search");
        inputSearch.addEventListener("blur", () => {
          inputSearch.value = ""; 
        });


// Mostrar u ocultar el panel al hacer clic en el botón
  document.querySelectorAll('.update').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      panel.classList.toggle('hidden');
    });
  });

  // Cerrar al hacer clic fuera del panel
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.update-container').forEach(container => {
      if (!container.contains(e.target)) {
        const panel = container.querySelector('.update-panel');
        if (panel) panel.classList.add('hidden');
      }
    });
  });

  // Evento del botón guardar
  document.querySelectorAll('.guardar').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const panel = e.target.closest('.update-panel');
      const estado = panel.querySelector('.estado-select').value;
      const info = panel.querySelector('.info-package').value;
      const adjunto = panel.querySelector('.adjunto').files[0];

      // Aquí puedes hacer lo que necesites (por ahora mostramos en consola)
      console.log("Estado:", estado);
      console.log("Info:", info);
      console.log("Archivo:", adjunto?.name || "ninguno");

      alert("Estado actualizado correctamente");

      // Ocultamos el panel
      panel.classList.add('hidden');
    });
  });

