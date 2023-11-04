# My Vite Preact App

Este es un proyecto creado con Vite, Preact y Typescript, se empleará para crear el código personalizado del checkout de la tienda y poder usarlo en conjunto con la app `checkout-ui-settings` la cual vincula al workspace los cambios que se realicen en este proyecto.

## Configuración del proyecto

El proyecto está configurado para generar los archivos de build en la carpeta `checkout-ui-custom`. Los nombres de los archivos de salida son:

- checkout6-custom.css
- checkout6-custom.js

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

```bash
npm install or yarn install
```

## Ejecución en modo desarrollo

Para ejecutar el proyecto en modo desarrollo, ejecuta el siguiente comando:

```bash
npm run build:watch
```

Se emplea el comando `build:watch` en lugar de `dev` porque el comando `dev` no genera los archivos de salida en la carpeta `checkout-ui-custom` mientras estamos haciendo cambios en el código

## Generación del build

Para generar el build del proyecto, ejecuta el siguiente comando:

```bash
npm run build
```

El build se generará en la carpeta `checkout-ui-custom`.

## Nota
