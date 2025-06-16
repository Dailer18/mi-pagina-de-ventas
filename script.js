document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('salesVideo');
    const hiddenContent = document.getElementById('hiddenContent');
    let contentRevealed = false;

    // Función para revelar el contenido
    function revealContent() {
        if (contentRevealed) return; // No hacer nada si ya se reveló
        contentRevealed = true;
        hiddenContent.classList.add('revealed');
        
        // Opcional: Desplazar suavemente hacia el contenido revelado
        setTimeout(function() {
            hiddenContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300); // Pequeño retraso para que la transición de opacidad comience
    }

    // Evento que se dispara continuamente mientras el video se reproduce
    video.addEventListener('timeupdate', function() {
        // Calcular el porcentaje de video visto
        const percentComplete = (video.currentTime / video.duration) * 100;
        
        // Condición: Si el video ha superado el 85% y el contenido no ha sido revelado aún
        if (percentComplete >= 85 && !contentRevealed) {
            revealContent();
        }
    });

    // Como respaldo, si el video termina, también revelamos el contenido
    video.addEventListener('ended', function() {
        revealContent();
    });

    // Para pruebas: Si quieres que el contenido aparezca a los 5 segundos sin importar qué,
    // puedes descomentar la siguiente línea.
    // setTimeout(revealContent, 5000); 
});
