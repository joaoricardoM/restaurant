import Cardapio from '../../data/cardapio.json'
import styles from './home.module.scss'
import stylesTema from '../../styles/Tema.module.scss'
import nossaCasa from '../../assets/nossa_casa.png'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  let pratosRecomendados = [...Cardapio]
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3)

  const navigate = useNavigate()

  function redirect(prato: (typeof Cardapio)[0]) {
    navigate(`/prato/${prato.id}`, { state: { prato }, replace: true })
  }

  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirect(item)}
            >
              {' '}
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa Casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa Italiana" />
        <div className={styles.nossaCasa__endereco}>
          forest, 4357 <br /> <br /> Pigneto, italy
        </div>
      </div>
    </section>
  )
}
