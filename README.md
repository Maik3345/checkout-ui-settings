# Checkout UI Settings

## 📋 Overview

Checkout UI Settings es una aplicación para personalizar y extender la interfaz de usuario del proceso de checkout de VTEX. Esta aplicación permite modificar el comportamiento y apariencia del checkout mediante componentes construidos con Preact, incorporando una arquitectura moderna y mantenible.

## 🚀 Características principales

- **Sistema de enrutamiento personalizado**: Gestiona la navegación entre las distintas pantallas del proceso de checkout.
- **Integración reactiva con OrderForm**: Actualización automática de la interfaz cuando cambian los datos del pedido.
- **Componentes modulares por sección**: Cada paso del checkout (carrito, envío, pago, etc.) tiene componentes específicos.
- **Arquitectura basada en atoms con Jotai**: Estado global reactivo y eficiente.
- **Compatible con el ecosistema VTEX**: Se integra perfectamente con los eventos y estructura de VTEX.

## 🏗️ Arquitectura

La aplicación está construida con [Preact](https://preactjs.com/), una alternativa ligera a React, y utiliza [Vite](https://vitejs.dev/) como herramienta de construcción. La estructura del proyecto está diseñada para ser modular y fácil de mantener:

```
/
├── preact/                 # Código fuente principal
│   ├── main.tsx            # Punto de entrada de la aplicación
│   ├── src/
│   │   ├── components/     # Componentes de UI organizados por sección
│   │   │   ├── cart/       # Componentes para la sección de carrito
│   │   │   ├── email/      # Componentes para la sección de email
│   │   │   ├── payment/    # Componentes para la sección de pago
│   │   │   ├── profile/    # Componentes para la sección de perfil
│   │   │   ├── shipping/   # Componentes para la sección de envío
│   │   │   └── summary/    # Componentes para el resumen del pedido
│   │   ├── shared/         # Código compartido entre componentes
│   │   │   ├── atoms/      # Estado global con Jotai
│   │   │   ├── hooks/      # Hooks personalizados 
│   │   │   ├── models/     # Modelos de datos y tipos
│   │   │   └── utils/      # Utilidades varias
│   │   ├── styles/         # Estilos globales
│   │   └── typings/        # Definiciones de tipos
│   └── tests/              # Tests unitarios
├── checkout-ui-custom/     # Archivos de salida para la integración con VTEX
└── manifest.json          # Definición del app para VTEX
```

## 🔄 Flujo de trabajo

1. La aplicación se inicializa cuando se carga el checkout de VTEX.
2. El componente `CheckoutApp` es el punto de entrada que configura el estado global.
3. El sistema de enrutamiento determina qué componentes se deben renderizar según la URL actual.
4. Los componentes específicos de cada sección se insertan en los contenedores definidos mediante selectores CSS.
5. La aplicación escucha eventos de actualización del OrderForm para mantener la UI sincronizada.

## 💼 Componentes principales

### CheckoutApp

Componente principal que inicializa el sistema, configura el router y establece los listeners para eventos del OrderForm.

### Router

Sistema de enrutamiento personalizado que permite la navegación entre las distintas secciones del checkout:

- **cart**: Visualización y edición del carrito
- **shipping**: Selección de opciones de envío
- **payment**: Proceso de pago
- **email**: Captura del correo electrónico
- **profile**: Información del perfil del usuario

La configuración de rutas define los selectores DOM donde se renderizarán los componentes y permite elementos que se renderizan en todas las rutas.

## 🔧 Desarrollo

### Requisitos previos

- Node.js 14.x o superior
- npm 7.x o superior

### Instalación

```bash
# Instalar dependencias del proyecto principal
npm install

# Instalar dependencias de Preact
cd preact
npm install
```

### Scripts disponibles

```bash
# Construir la aplicación
npm run build

# Construir la aplicación en modo watch
npm run build:watch

# Ejecutar tests
npm run test:cov

# Verificar formato
npm run format
```

### Subir los cambios a VTEX
Para subir los cambios a VTEX, asegúrate de tener configurado el CLI de VTEX y ejecuta:

```bash
# Subir la aplicación al workspace actual de VTEX
vtex link
```

### Añadir nuevos componentes

1. Crea un nuevo componente en la carpeta correspondiente dentro de `src/components`.
2. Regístralo en `src/routes.ts` para definir dónde y cuándo debe renderizarse.
3. Exporta el componente en el archivo `index.ts` de su carpeta.

## 📊 Testing

La aplicación incluye tests unitarios para verificar el funcionamiento de los componentes y utilidades. Se recomienda crear tests para cada nueva funcionalidad añadida.

```bash
# Ejecutar todos los tests
npm run test:cov

# Ejecutar tests en modo watch
npm run test:watch

# Ver cobertura de tests en UI
npm run test:ui
```

## 📝 Convenciones de código

Este proyecto utiliza Biome para el linting y formateo del código. Asegúrate de seguir las reglas definidas ejecutando:

```bash
npm run lint
npm run format
```

## 🔖 Versionamiento

El proyecto sigue [Semantic Versioning](http://semver.org/). Para ver las versiones disponibles, consulta los [tags en este repositorio](https://github.com/tu-usuario/checkout-ui-settings/tags).

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu característica (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'feat: add some amazing feature'`)
4. Sube la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

Este proyecto utiliza [Conventional Commits](https://www.conventionalcommits.org/) para las convenciones de mensajes de commit.
