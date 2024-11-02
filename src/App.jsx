import pokemons from './assets/pokemons.png'
import fd from './assets/fd.jpg';



import './App.css'
import SocialMedia from './components/Social/SocialMedia';
import Program from './components/Code/Program';
import Database from './components/Base/Database';




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
            <SocialMedia />
      </div>

      <div>
         <Program />
         <br/>
         <Database />
      </div>
      </header>

      <br/>
      
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

      <footer >
        <p>&copy; 2025 Felipe_develop. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App
