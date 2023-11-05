<script>
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!validateForm()) {
        return;
      }

      const formData = new FormData(form);

      fetch("tu_script_de_procesamiento.php", {
        method: "POST",
        body: formData
      })
      .then(response => {
      })
      .catch(error => {
      });
    });

    function validateForm() {
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
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
    }
  });
</script>
