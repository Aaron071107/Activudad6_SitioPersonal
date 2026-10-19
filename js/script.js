const formulario = document.getElementById('formContacto');
const mensajeFormulario = document.getElementById('mensajeFormulario');
if (formulario && mensajeFormulario) {
  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    formulario.classList.add('was-validated');
    mensajeFormulario.classList.add('d-none');
    if (!formulario.checkValidity()) return;
    mensajeFormulario.textContent = '¡Formulario completado correctamente! Esta es una demostración y los datos no se envían.';
    mensajeFormulario.classList.remove('d-none');
  });
  formulario.addEventListener('reset', function () {
    formulario.classList.remove('was-validated');
    mensajeFormulario.textContent = '';
    mensajeFormulario.classList.add('d-none');
  });
}
