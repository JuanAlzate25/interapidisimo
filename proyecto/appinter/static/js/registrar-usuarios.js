document.getElementById('register-form').addEventListener('submit', registerUser);

function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const type = document.getElementById('type').value;
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    if (username === '' || email === '' || type === 'Rol' || password === '' || confirmPassword === '') {
        alert('Por favor completa todos los campos.');
        return;
    }
    
    alert('¡Usuario registrado exitosamente!');
    document.getElementById('register-form').reset();
}
