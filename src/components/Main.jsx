import './Main.css'

function Main() {
    const Perfil = "https://media.licdn.com/dms/image/v2/D4D03AQHS0jDL9ZOteA/profile-displayphoto-scale_200_200/B4DZsDRmmnKIAk-/0/1765286507651?e=1770249600&v=beta&t=dSv02Ur5VuV_NxWYlsGd25kDDf9tGbHkl2Lm3g86U4k";
    return (
        <main className='main'>
            <section className='corpo_esquerda'>
                sjdjsajjasjdjj
            </section>
            <aside className='coluna_direita'>
                <figure>
                    <img src={Perfil} alt="perfil" />
                </figure>
                <h2>Mateus Lima Bispo</h2>
            </aside>
            

        </main>
    )
}

export default Main