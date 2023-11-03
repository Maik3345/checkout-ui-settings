import { useState } from 'preact/hooks'
import styles from './index.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className={styles.AppLink} href="https://preactjs.com" target="_blank" rel="noopener noreferrer">
          Learn Preact
        </a>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>count is: {count}</button>
        </p>
      </header>
    </div>
  )
}

export default App
