import fd from './assets/fd.jpg'
import pokemons from './assets/pokemons.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import './App.css'

function App() {

  return (
    <>
    <header>
    <div className="container">
            <div className='icono'>
              <a href="https://development-one1.github.io/felipe_sofware/" target="_blank">
                <img src={fd} className="logo" alt="felipe develop" />
              </a>
                <h1 className='texto'>Felipe_Develop</h1>
            </div>
            <div className='social'>
              <a href=''>
                <FontAwesomeIcon icon={faFacebook} size="2x" color="#3b5998"/>
              </a>
              <a href='https://www.linkedin.com/in/camacho-rodriguez/'>
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077B5" />
              </a>
              <a href='https://www.instagram.com/felipe_develop/'>
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#E1306C"/>
              </a>
            </div>
          </div>
        

      </header>

        <section>
              <div className="card">
               
                  <p className="read-the-docs">
                    Portafolio
                  </p>
                  <div className='platzi-experiencia'>
                    <a href='https://github.com/development-one1/pokemons-redux/'>                  
                        <img 
                        className='pokemons'
                        src={pokemons} 
                        alt="pokemons" 
                        />
                        </a>
                  </div>
                  
              </div>    
        </section>

    <br />

      <footer>
        <p>&copy; 2025 Felipe_develop. Todos los derechos reservados.</p>
      </footer>

    </>
  )
}

export default App
