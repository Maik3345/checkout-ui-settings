// Import necessary functions and types
import { getOrderForm, initializeApp } from "@/shared";

// Import global CSS styles
import pkg from "../package.json";
import "./src/styles/index.css";
import "./src/styles/reset.css";

// Define global application name
// Import package.json to access the project name

// Define global application name using the name from package.json
const APP_NAME = pkg.name;
const APP_VERSION = pkg.version;

// Log welcome message to console
console.log(`🎉 Yay! You are using the ${APP_NAME} version ${APP_VERSION}!!`);

try {
  // Fetch the order form and render the application
  // when the data is available
  getOrderForm((orderForm: VtexOrderForm | undefined) => initializeApp(orderForm));
} catch (error) {
  // Handle any errors that occur during initialization
  console.error(
    `❌ Error initializing ${APP_NAME} version ${APP_VERSION}: `,
    error
  );
}
