import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/preact';
import { EmptyCart } from './index';

describe('EmptyCart', () => {
  it('should render correctly with initial state', () => {
    render(<EmptyCart />);
    
    // Verificar que el título se muestra correctamente
    const titleElement = screen.getByText(/I am the custom empty cart/, { exact: false });
    expect(titleElement).toBeTruthy();
    
    // Verificar que el botón está presente
    const buttonElement = screen.getByRole('button', { name: /Click me/ });
    expect(buttonElement).toBeTruthy();
    
    // Verificamos que el componente contenga el texto del contador
    const h2Element = screen.getByRole('heading', { level: 2 });
    expect(h2Element.textContent).toContain('0');
  });

  it('should increment counter when the button is clicked', async () => {
    render(<EmptyCart />);
    
    // Obtiene el botón
    const button = screen.getByRole('button', { name: /Click me/ });
    
    // Simula un clic en el botón
    fireEvent.click(button);
    
    // Verifica que el contador incrementó a 1
    const h2Element = screen.getByRole('heading', { level: 2 });
    expect(h2Element.textContent).toContain('1');
    
    // Simula otro clic
    fireEvent.click(button);
    
    // Verifica que el contador incrementó a 2
    expect(h2Element.textContent).toContain('2');
  });

  it('should have the correct CSS class', () => {
    const { container } = render(<EmptyCart />);
    
    // Verifica que el contenedor tiene la clase CSS correcta
    const containerElement = container.firstChild as HTMLElement;
    expect(containerElement.className).toContain('notFoundContainer');
  });

  it('should match snapshot', () => {
    const { container } = render(<EmptyCart />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
