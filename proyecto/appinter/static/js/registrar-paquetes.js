document.getElementById('register-form').addEventListener('submit', registerUser);

function registerUser(event) {
    event.preventDefault();
    const guideNumber = document.getElementById('guide-number').value.trim();
    const origin = document.getElementById('origin').value.trim();
    const destination = document.getElementById('destination').value.trim();
    const sender = document.getElementById('sender').value.trim();
    const addressee = document.getElementById('addressee').value.trim();
    const value = document.getElementById('value').value.trim();
    const initialState = document.getElementById('initial-state').value;
    const type = document.getElementById('type').value;

    if (guideNumber === '' || origin === '' || destination === '' || sender === '' || addressee === '' || value === '' || initialState === 'Estado Inicial' || type === 'Tipo' ) {
        alert('Por favor completa todos los campos.');
        return;
    } else {
        alert('¡Paquete registrado exitosamente!');
        document.getElementById('register-form').reset();
    }
}
