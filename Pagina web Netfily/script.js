const toggleButton = document.getElementById("themeToggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        toggleButton.textContent = "☀️ Modo claro";
    } else {
        toggleButton.textContent = "🌙 Modo oscuro";
    }
});
