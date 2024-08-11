# BSnapZen

generar una imagen aleatoria a partir de un texto ingresado por el usuario. Utiliza la API de Unsplash para obtener imágenes y la biblioteca Axios para realizar solicitudes HTTP.

## Aquí está el desglose del código:
Constante ACCESS_KEY: Esta constante almacena la clave de acceso necesaria para hacer solicitudes a la API de Unsplash.
Función generarImagen(): Esta es una función asíncrona que se activa cuando el usuario hace clic en un botón en la interfaz de usuario.

## Realiza lo siguiente:
Obtiene el texto ingresado por el usuario desde un elemento HTML con el ID "textoInput".
Obtiene dos elementos HTML: uno con el ID "resultado" y otro con el ID "urlCaja", donde se mostrarán la imagen y el URL respectivamente.

![image](https://github.com/AvastrOficial/BSnapZen/assets/91764815/c139b89a-cb65-4310-9a14-3cf9a3f7dd0d)

Utiliza Axios para hacer una solicitud GET a la API de Unsplash, pasando el texto ingresado por el usuario y la clave de acceso.
clave de la api : const ACCESS_KEY = 'GN00Y0EfLL6P6vfKWwZlv8kRFxVG2L1nrK4_9e5lsVM';

Una vez que se recibe la respuesta, selecciona una imagen aleatoria de los resultados y extrae la URL de la imagen regular.
Inserta la imagen generada dentro del elemento con el ID "resultado" para que el usuario la vea.

![image](https://github.com/AvastrOficial/BSnapZen/assets/91764815/4188ed84-951b-452c-82b9-3010f95b72d5)

Crea un enlace con el URL de la imagen generado y lo inserta dentro del elemento con el ID "urlCaja".

![image](https://github.com/AvastrOficial/BSnapZen/assets/91764815/db8b38ba-ad28-490b-a3c2-6721a69a0838)

En caso de error al obtener la imagen, muestra un mensaje de error en el elemento con el ID "resultado" y limpia el contenido del elemento "urlCaja".

## API utilizada : 
https://api.unsplash.com/
## libreria https peticiones 
https://cdnjs.cloudflare.com/ajax/libs/axios/0.24.0/axios.min.js

## Resumen del codigo : 
Es una forma simple de obtener imágenes aleatorias de Unsplash y mostrarlas en una página web

## pagina web funcionado el codigo conpartido : 
https://toolapikey.foroactivo.com/h7-bsnapzen	

![image](https://github.com/AvastrOficial/BSnapZen/assets/91764815/1c0279ea-9672-440c-817d-1141037b67b3)
