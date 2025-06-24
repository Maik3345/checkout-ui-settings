// Import necessary functions and types
import { getOrderForm, render } from "@/shared";

// Import global CSS styles
import "./styles/index.css";
import "./styles/reset.css";

// Define global application name
export const APP_NAME = "VTEX Checkout UI Customization";

// Log welcome message to console
console.log(`Yay! You are using the ${APP_NAME}!!`);

try {
  // Fetch the order form and render the application
  // when the data is available
  getOrderForm((orderForm: VtexOrderForm | undefined) => render(orderForm));
} catch (error) {
  // Handle any errors that occur during initialization
  console.error(`Error initializing ${APP_NAME}: `, error);
}
