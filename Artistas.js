document.querySelectorAll('input[name="category"]').forEach((radio) => {
    radio.addEventListener('change', (event) => {
        const categoria = event.target.value;
        // Ocultar todas las tarjetas de imágenes
        document.querySelectorAll('.card').forEach((card) => {
            card.style.display = 'none';
        });
        // Mostrar solo las tarjetas de la categoría seleccionada
        document.querySelectorAll(`[id^="tarjeta${categoria}"]`).forEach((card) => {
            card.style.display = 'block';