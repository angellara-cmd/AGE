// Archivo de lógica de la aplicación
// Nota: Para tener las 100 preguntas exactas con los recuentos parciales, 
// te recomiendo renombrar el archivo 'test_completo.html' que te generé antes a 'index.html' 
// y subirlo directamente a GitHub junto al README.md. 

document.addEventListener('DOMContentLoaded', () => {
    // Si prefieres usar la versión separada en archivos, puedes pegar aquí el contenido 
    // de la etiqueta <script> del HTML generado anteriormente.
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '<div class="bg-blue-50 p-4 rounded text-blue-800 text-center"><b>Nota:</b> Para un funcionamiento óptimo y tener las 100 preguntas completas, sustituye el archivo <code>index.html</code> de esta carpeta por el HTML que te generé en el paso anterior (renombrándolo a <code>index.html</code>) antes de subirlo a GitHub.</div>';
});
