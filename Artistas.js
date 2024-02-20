$(document).ready(function() {
    // Manejo del cambio en los botones de radio de categoría
    $('input[type=radio][name=categoria]').change(function() {
        var categoria = $(this).val(); // Obtener el valor del botón de radio seleccionado
        
        // Si se selecciona "Todo", mostrar todos los elementos de contenido y texto de categoría
        if (categoria === "todo") {
            $('.contenido').show();
            $('.card-body').show(); // Mostrar todos los textos de categoría
        } else {
            // Ocultar todos los elementos de contenido y texto de categoría
            $('.contenido').hide();
            $('.card-body').hide();
            
            // Mostrar solo los elementos de contenido y texto de categoría que coincidan con la categoría seleccionada
            $('.' + categoria).show();
            $('.' + categoria).prev('.card-body').show();
        }
    });

    // Manejo del cambio en el campo de búsqueda
    $('#input-src').on('input', function() {
        var searchText = $(this).val().toLowerCase(); // Obtener el valor del campo de búsqueda en minúsculas
        
        // Ocultar todos los elementos de contenido
        $('.contenido').hide();
        // Ocultar todos los textos de categoría
        $('.card-body.categoria').hide();
        
        // Mostrar solo los elementos de contenido y texto de categoría que coincidan con la búsqueda
        $('.card-title').each(function() {
            if ($(this).text().toLowerCase().includes(searchText)) {
                $(this).closest('.contenido').show();
                $(this).closest('.card-body.categoria').show(); // Mostrar el texto de la categoría
            }
        });
    });
});







