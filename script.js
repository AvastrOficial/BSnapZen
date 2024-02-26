    const ACCESS_KEY = 'GN00Y0EfLL6P6vfKWwZlv8kRFxVG2L1nrK4_9e5lsVM';

async function generarImagen() {
    var texto = document.getElementById("textoInput").value;
    var resultadoDiv = document.getElementById("resultado");
    var urlCaja = document.getElementById("urlCaja");

    try {
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${texto}&client_id=${ACCESS_KEY}`);
        
        // Obtener una imagen aleatoria de la respuesta
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        const imageUrl = response.data.results[randomIndex].urls.regular;

        // Mostrar la imagen generada en resultadoDiv
        resultadoDiv.innerHTML = `<img src="${imageUrl}" alt="Imagen generada">`;

        // Mostrar el URL generado en urlCaja
        urlCaja.innerHTML = `<p>URL Generado: <a href="${imageUrl}" target="_blank">${imageUrl}</a></p>`;
    } catch (error) {
        console.error('Error al obtener la imagen:', error);
        resultadoDiv.innerHTML = '<p class="error-message">Hubo un error al obtener la imagen. Por favor, intenta de nuevo.</p>';
        urlCaja.innerHTML = ''; // Limpiar la caja del URL en caso de error
    }
}
   
