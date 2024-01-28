var totalPages = 2; // Ajusta este valor según el número total de páginas
var currentPage = 1; // Página inicial

// Función para cambiar de página
function changePage(direction) {
    if (direction === 'next' && currentPage < totalPages) {
        currentPage++;
    } else if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    }
}    