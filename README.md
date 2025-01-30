# Amigo Secreto - Desafío de Lógica de Programación

Este proyecto tiene como objetivo fortalecer habilidades en lógica de programación a través del desarrollo de una aplicación web para el sorteo de un "Amigo Secreto".

## Enlace a la página
Puedes probar la aplicación en el siguiente enlace:
[Amigo Secreto - Alura](https://kidkezz.github.io/Amigo-secreto-alura/)

## Descripción del Proyecto
La aplicación permite a los usuarios agregar nombres a una lista y luego realizar un sorteo para seleccionar un ganador aleatoriamente. Se asegura que no se repitan nombres en la lista y que el resultado del sorteo se actualice en pantalla sin duplicaciones.

## Funcionalidades

### `agregarAmigo()`
- Obtiene el nombre ingresado en el campo de texto.
- Valida que no esté vacío.
- Llama a `listaAmigos()` para agregar el nombre si es válido.
- Llama a `reset()` para limpiar el campo de entrada.

### `reset()`
- Limpia el campo de entrada después de agregar un nombre.

### `listaAmigos(elemento)`
- Verifica si el nombre ya está en la lista.
- Si no está, lo agrega al arreglo `nombres` y lo muestra en la lista de la interfaz.
- Evita duplicados mostrando una alerta si el nombre ya existe.

### `sortearAmigo()`
- Verifica si hay nombres en la lista antes de realizar el sorteo.
- Selecciona un nombre aleatorio.
- Muestra el nombre sorteado en la interfaz, actualizando el resultado si ya existe.

## Tecnologías Utilizadas
- **HTML** para la estructura de la página.
- **CSS** para el diseño y estilos.
- **JavaScript** para la lógica de programación y la manipulación del DOM.

## Cómo Usarlo
1. Ingresa los nombres de los participantes en el campo de texto y presiona el botón para agregar.
2. Una vez que la lista esté completa, presiona el botón de sorteo.
3. El nombre del ganador se mostrará en la pantalla.

---

Cualquier sugerencia o mejora es bienvenida. ¡Disfruta programando! 🚀

