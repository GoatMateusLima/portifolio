import './Main.css'
import minhaFoto from '../assets/img/mateus.png';

function Main() {

    return (
        <main className='main'>
            <section className='secSegundary'>
                <div className='cir2'></div>
                <div className='cir2'></div>
                <div className='cir2'></div>
            </section>
            <section className="secPrimary" id="about">
                <figure class="perfil">
                    <img src={minhaFoto} alt="Foto de Mateus Lima Bispo" />
                </figure>
                <div className="collum-info" >
                    <h1 className="name">Mateus Lima <span>Bispo</span></h1>
                    <p className="area">Desenvolvedor <span>Web</span></p>
                    <div class="row">
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>PostgreSQL</li>
                    </div>

                    <p className='description'>Desenvolvedor com experiência em criação de sistemas web completos, do frontend ao backend, com foco em soluções escaláveis e boas práticas.</p>
                    <div className="buttons">
                        <a className="button pj">Ver projetos</a>
                        <a className="button cv">Baixar CV</a>
                    </div>
                </div>
                

            </section>
            <div></div>
            <section className='Section2'>
                <aside>
                    <div>
                        <li><a href="">Ver projetos</a></li>
                        <li><a href="">Curriculo</a></li>

                    </div>
                    <div class="row">
                        <li><a href="">GitHub</a></li>
                        <li><a href="">Linkedin</a></li>
                        <li><a href="">Youtube</a></li>
                    </div>
                </aside>
                <h2>Sobre mim</h2>
            </section>


        </main>
    )
}

export default Main