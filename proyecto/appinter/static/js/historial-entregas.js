// Cerrar al hacer clic fuera del panel
document.addEventListener('click', (e) => {
    document.querySelectorAll('.update-container').forEach(container => {
      if (!container.contains(e.target)) {
        const panel = container.querySelector('.update-panel');
        if (panel) panel.classList.add('hidden');
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const detailsButtons = document.querySelectorAll('.details');
    const guardarButtons = document.querySelectorAll('.guardar');
    detailsButtons.forEach(button => {
      button.addEventListener('click', function() {
      const updatePanel = this.nextElementSibling;
      updatePanel.classList.toggle('hidden');
    });
  });
  guardarButtons.forEach(button => {
    button.addEventListener('click', function() {
    const select = this.previousElementSibling;
    if (select.value !== '') {
      alert('Usuario asignado correctamente');
      this.parentElement.classList.add('hidden');
    } 
  });
  });
  });
  
  