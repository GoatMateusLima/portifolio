import './Header.css';
import Logo from './logo';

function Header() {
  
  return (
     
    < header >
      <section className='contentHeader backgroundDark'>
        <section className='logo' >
          <Logo/>
        </section>
        <nav className='contentNav'>
          <ul className='linkNav'>
            <li><a href="">Sobre mim</a></li>
            <li><a href="">Formação Acadêmica</a></li>
            <li><a href="">Competências Técnicas</a></li>
            <li><a href="">Projetos</a></li>
            <li><a href="">Certificaçõess</a></li>
          </ul>
          <button className='bcSite '>
            <p>l</p>
          </button>
        </nav>
        
      </section>

    </header>

  )
}

export default Header