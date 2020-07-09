const btnSwithch = document.querySelector('#switch');

btnSwithch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwithch.classList.toggle('active');

    // GUARDAR MODO EN LOCALSTORAGE
// localStorage.setItem (Key, Value) = STRINGS
if ( document.body.classList.contains('dark') ) { // contains permite comprueba si la lista de clases del body contiene la clase de DARK
        localStorage.setItem('dark-mode', 'true');  // el primer parametro colocas el nombre del espacio de almacenamientp (Variable), el segundo parameetro es el valor a guardar (SOLO GUARDA STRINGS)
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});

// Obtenemos el modo actual.

if ( localStorage.getItem('dark-mode') === 'true' ) {
    document.body.classList.add('dark');
    btnSwithch.classList.add('active');
} else {
    document.body.classList.remove('dark');
    btnSwithch.classList.remove('active');
}