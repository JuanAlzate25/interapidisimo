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
    const disableButtons = document.querySelectorAll('.disable');
    const guardarButtons = document.querySelectorAll('.guardar');
    disableButtons.forEach(button => {
      button.addEventListener('click', function() {
      const updatePanel = this.nextElementSibling;
      updatePanel.classList.toggle('hidden');
    });
  });
  guardarButtons.forEach(button => {
    button.addEventListener('click', function() {
    const switchBtn = document.getElementById("switch-btn");
    if (!switchBtn.checked) {
      alert('Usuario Activado correctamente');
      this.parentElement.classList.add('hidden');
    } else {
      alert('Usuario Desactivado correctamente');
      this.parentElement.classList.add('hidden');
    }
  });
  });
  });
  
  