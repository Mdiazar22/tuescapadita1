<script>
    body{
  document.querySelector(".form").addEventListener("submit", function (e) {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (nombre === "" || apellido === "" || email === "" || password === "") {
      alert("Por favor, complete todos los campos.");
      e.preventDefault(); // Evita que el formulario se envíe si hay campos vacíos
    } else {
      // Puedes agregar aquí más validaciones si es necesario
    }
  })}
</script>
