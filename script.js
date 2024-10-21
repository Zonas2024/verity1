function verificarDocumento() {
    const documentId = document.getElementById('documentId').value;
    const resultado = document.getElementById('resultado');

    // Mapa de documentos válidos y sus URL
    const documentos = {
        '1193238729': 'documento1193238729.html' // Redirección para el ID
    };

    if (documentos[documentId]) {
        // Redirige a la URL del documento
        window.location.href = documentos[documentId];
    } else {
        resultado.textContent = 'Documento no válido.';
        resultado.style.color = 'red';
    }
}
