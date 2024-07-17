let boton = document.getElementById('boton-login');

boton.addEventListener('click', (e) => {
    e.preventDefault();
    
    let usuario = document.querySelector('.input-usuario').value;
    let contraseña = document.querySelector('.input-contraseña').value;

    const UserCuenta = {
        usuario : usuario,
        contraseña : contraseña
    }

    const enJSON = JSON.stringify(UserCuenta);

    if (usuario && contraseña) {
        sessionStorage.setItem('UserCuenta', enJSON);
        window.location.href = '../pages/inicio.html';
    }
        else {
            alert('Por favor, ingrese usuario y contraseña.');
        }
    }
);

