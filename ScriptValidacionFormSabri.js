<script>
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevenir el envío por defecto del formulario

      // Validación personalizada - aquí puedes agregar más validaciones según tus requisitos
      if (!validateForm()) {
        return;
      }

      // Si la validación es exitosa, puedes enviar el formulario aquí
      // Puedes usar el objeto FormData para recopilar los datos del formulario y enviarlos a través de una solicitud AJAX o similar.
      // Por ejemplo:
      const formData = new FormData(form);

      // Aquí puedes realizar una solicitud AJAX para enviar los datos del formulario al servidor
      // Por ejemplo:
      /*
      fetch("tu_script_de_procesamiento.php", {
        method: "POST",
        body: formData
      })
      .then(response => {
        // Manejar la respuesta del servidor aquí
      })
      .catch(error => {
        // Manejar errores de la solicitud aquí
      });
      */
    });

    function validateForm() {
      // Puedes agregar lógica de validación personalizada aquí.
      // Por ejemplo, validar que los campos requeridos no estén en blanco y que el correo electrónico sea válido.
      // Retorna true si la validación es exitosa, de lo contrario, muestra un mensaje de error y retorna false.
      const nombre = form.querySelector('[name="nombre"]').value;
      const email = form.querySelector('[name="email"]').value;

      if (nombre.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
      }

      if (!validateEmail(email)) {
        alert("Por favor, ingresa una dirección de correo electrónico válida.");
        return false;
      }

      return true;
    }

    function validateEmail(email) {
      // Validación simple de correo electrónico
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
    }
  });
</script>
