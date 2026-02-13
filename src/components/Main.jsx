import './Main.css'
import minhaFoto from '../assets/img/mateus.png';

function Main() {
    
    return (
        <main className='main'>
            <section class="row container-info" id="about">
                <figure class="perfil">
                    <img src={minhaFoto} alt="Foto de Mateus Lima Bispo" />
                </figure>
                <div class="collum info" >
                    <h2 class="name">Mateus Lima Bispo</h2>
                    <p class="description"></p>
                    <div class="row">
                        <a href="" class="button primary circle linkedin t" ></a>
                        <a href="" class="button segundary circle gmail t"></a>

                    </div>

                </div>

            </section>


        </main>
    )
}

export default Main