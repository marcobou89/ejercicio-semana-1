# React + Vite

Este proyecto proporciona una configuración mínima para comenzar a trabajar con React en Vite con HMR y algunas reglas de ESLint.

## App.jsx

El componente `App` es el punto de entrada de la aplicación. Aquí se encuentra la lógica principal para renderizar el contenido de la aplicación.

### Uso

El componente `App` utiliza el estado para almacenar la frase aleatoria y la imagen seleccionada. El estado se inicializa con una frase aleatoria y una imagen aleatoria al cargar la aplicación.

El componente `App` también utiliza los componentes `Boton` y `Frase` para mostrar la frase y el botón correspondientes.

### Estructura

La estructura del componente `App` consta de un contenedor principal `.contenedor_app` que contiene un título `h1` y los componentes `Boton` y `Frase`.

## Boton.jsx

El componente `Boton` representa un botón que cambia la frase y la imagen al hacer clic en él.

### Uso

El componente `Boton` utiliza el estado del componente `App` para obtener la frase actual y la imagen actual. Al hacer clic en el botón, se actualiza el estado de `App` con una nueva frase y una nueva imagen.

### Estructura

La estructura del componente `Boton` consta de un botón `button` que muestra el texto "Cambiar frase" y un icono de una carita sonriente.

## Frase.jsx

El componente `Frase` representa una frase aleatoria seleccionada al azar.

### Uso

El componente `Frase` utiliza el estado del componente `App` para obtener la frase actual. Muestra la frase en un elemento `p` con un estilo personalizado.

### Estructura

La estructura del componente `Frase` consta de un elemento `p` que muestra la frase actual.

## README.md - Realizado por Marco Cruz
