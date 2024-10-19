import { useState } from 'react'
import fd from './assets/fd.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
        <div className='icono'>
          <a href="https://development-one1.github.io/felipe_sofware/" target="_blank">
            <img src={fd} className="logo" alt="felipe develop" />
          </a>
          <h1 className='texto'>Felipe_Develop</h1>
        </div>
      </header>

        <section>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>
        </section>

      <footer>
        <p className="read-the-docs">
          Portafolio
          <a href='https://github.com/development-one1/pokemons-redux/'>
          Pokemons
          </a>
        </p>

        <p>&copy; 2025 Felipe_develop. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App
