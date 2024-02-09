document.getElementById('searchInput').addEventListener('input', function() {
    var filter = this.value.toLowerCase();
    var elements = document.querySelectorAll('.box');
    
    elements.forEach(function(element) {
        var text = element.textContent.toLowerCase();
        var keywords = filter.split(" ");
        var match = true;
        
        keywords.forEach(function(keyword) {
            if (!text.includes(keyword)) {
                match = false;
            }
        });
        
        if (match) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});

document.querySelectorAll('.filterCheckbox').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        filterBoxes();
    });
});

function filterBoxes() {
    var selectedFilters = [];
    document.querySelectorAll('.filterCheckbox').forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedFilters.push(checkbox.value);
        }
    });
    
    var elements = document.querySelectorAll('.box');
    elements.forEach(function(element) {
        var isVisible = selectedFilters.length === 0; // Si no hay filtros seleccionados, todos los elementos son visibles
        
        selectedFilters.forEach(function(filter) {
            if (element.classList.contains(filter)) {
                isVisible = true;
            }
        });
        
        if (isVisible) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}
