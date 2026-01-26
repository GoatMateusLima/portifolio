import './Header.css'
import './Geometric.css'
function Header() {

  return (
    < header className="header" >
      <section className='containerHeader'>
        <section className='titulo'><div className='fundo-titulo'><h1>LIMA-DEV</h1></div></section>
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
      </section>

    </header>

  )
}

export default Header