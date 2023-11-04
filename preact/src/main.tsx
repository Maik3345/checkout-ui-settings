import { render } from 'preact'
import App from './components/App'
import './index.css'

setTimeout(() => {
  const container = document.getElementById('cart-choose-products')

  render(<App />, container!)
}, 3000)
