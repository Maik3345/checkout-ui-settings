import { h } from 'preact';
import { CheckoutApp } from '@/components';

/**
 * Initializes the application by creating a container element and rendering the root component
 *
 * @param orderForm - The VTEX order form data or undefined if not available
 *
 * This function performs the following steps:
 * 1. Creates a div element to serve as the application container
 * 2. Sets an ID attribute on the container
 * 3. Appends the container to the document body
 * 4. Asynchronously imports the render function from Preact to avoid loading issues
 * 5. Renders the Render component with the provided orderForm (or null if not provided)
 */
export const initializeApp = (orderForm: VtexOrderForm | undefined, appName: string) => {
  // Render our root component that handles routes
  const appContainer = document.createElement('div');
  appContainer.setAttribute('id', `${appName}-app-container`);
  document.body.appendChild(appContainer);

  // Import render asynchronously to avoid loading issues
  import('preact').then(({ render }) => {
    render(
      h(CheckoutApp, {
        orderForm: orderForm || null, // Pass the orderForm to the component
      }),
      appContainer
    );
  });
};
