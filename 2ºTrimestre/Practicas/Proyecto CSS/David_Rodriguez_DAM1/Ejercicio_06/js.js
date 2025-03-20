document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Modo Oscuro";
    document.body.prepend(toggleBtn);

    toggleBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});

