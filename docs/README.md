# Checkout UI Settings - With Vite, Preact and Typescript

This is a project created with Vite, Preact, and Typescript, designed for creating custom checkout code for your store. It can be used in conjunction with the 'checkout-ui-settings' app, which links the changes made in this project to your workspace.

## Project Configuration

The project is configured to generate build files in the `checkout-ui-custom` folder. The output file names are:

- `checkout6-custom.css`
- `checkout6-custom.js`

## Installation

To install the project's dependencies, execute the following command in your terminal:

```bash
npm install
# OR
yarn install
```

## Running in Development Mode

To run the project in development mode, use the following command:

```bash
npm run build:watch
```

We use the build:watch command instead of dev because dev does not generate output files in the checkout-ui-custom folder while making code changes.

## Building the Project

To build the project, use the following command:

```bash
npm run build
```

The build files will be generated in the checkout-ui-custom folder.

## Note


## How to Upload the Code to VTEX and Continue Real-time Building

To upload the code to VTEX, execute the following command in the project's root folder:

```bash
vtex link
```

To listen for changes and generate output files in the checkout-ui-custom folder, run the following command in another terminal tab while in the project's root folder:

```bash
npm run build:watch
```
