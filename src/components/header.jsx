import './Header.css'
import './Geometric.css'
function Header() {

  return (
    < header className="header" >
      <section className='containerHeader'>
        <section className='titulo'><h1>LIMA-DEV</h1></section>
        <nav>
          <ul>
            <li><a href="">Sobre mim</a></li>
            <li><a href="">Tecnologias</a></li>
            <li><a href="">Idiomas</a></li>
            <li><a href="">Projetos</a></li>
            <li><a href="">Contato</a></li>

            <li><a href="">Formação Acadêmica</a></li>
            <li><a href="">GitHub</a></li>
            <li><a href="">Linkedin</a></li>
            <li><a href="">Youtube</a></li>
            <li><a href="">Curriculo</a></li>


          </ul>
        </nav>
      
      <div className='geometric'>
        <div className='custom-shape-divider-bottom-1769303355'>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className='shape-fill'></path>
            
          </svg>
        </div>
      </div>
      </section>

    </header>

  )
}

export default Header