const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    if (nombre === "" || email === "") {
        mensaje.style.color = "red";
        mensaje.textContent = "❌ Por favor, completa todos los campos.";
    } else {
        mensaje.style.color = "lightgreen";
        mensaje.textContent = "✅ Formulario enviado correctamente.";
        formulario.reset();
    }
});
