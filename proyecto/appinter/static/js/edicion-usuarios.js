document.addEventListener('DOMContentLoaded', function() {
    // Para manejar el click en "editar"
    document.querySelectorAll('.edit').forEach(button => {
      button.addEventListener('click', function() {
        const updatePanel = this.nextElementSibling;
        updatePanel.classList.toggle('hidden');
        
        // Convertiendo spans en inputs editables
        updatePanel.querySelectorAll('.editable').forEach(span => {
          const value = span.innerText;
          const input = document.createElement('input');
          input.type = 'text';
          input.value = value;
          input.className = 'input-editable';
          span.replaceWith(input);
        });
      });
    });
  
    // Para manejar el click en "guardar"
    document.querySelectorAll('.guardar').forEach(button => {
      button.addEventListener('click', function() {
        const select = this.previousElementSibling;
        if (select.value !== '') {
          alert('Datos Actualizados Correctamente');
          this.parentElement.classList.add('hidden');
        }
      });
    });
  
    // Para cerrar si hacen click fuera del panel
    document.addEventListener('click', (e) => {
      document.querySelectorAll('.update-container').forEach(container => {
        if (!container.contains(e.target)) {
          const panel = container.querySelector('.update-panel');
          if (panel) panel.classList.add('hidden');
        }
      });
    });
  });
  