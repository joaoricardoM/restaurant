import styles from './Sobre.module.scss'
import stylesTema from '../../styles/Tema.module.scss'
import Casa from '../../assets/sobre/casa.png'
import massa1 from '../../assets/sobre/massa1.png'
import massa2 from '../../assets/sobre/massa2.png'
import { useState } from 'react'

export default function Sobre() {
  const imagens = [massa1, massa2]
  const [isDarkMode] = useState(false)

  return (
    <section>
      <h3 className={`__titulo ${isDarkMode ? 'dark' : stylesTema.titulo}`}>
        Sobre
      </h3>
      <div className={styles.sobreNos}>
        <img src={Casa} alt="casa Italiana" />
        <div className={styles.sobreNos__texto}>
          <p>
            Nós da JRM La Trattoria oferecemos a vocês, nossos queridos
            clientes, a Massa Italiana Caseira mais saborosa e sofisticada de
            Pigneto! Prezamos pelos ingredientes tradicionais da culinária
            Italiana, frescos e de excelente qualidade para que sua experiência
            seja ainda mais intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, possuímos uma reserva de vinhos
            especiais, que harmonizam perfeitamente com o seu parto, seja carne
            ou massa!
          </p>
        </div>
      </div>
      <div className={styles.imagens}>
        {imagens.map((imagem, index) => (
          <div key={index} className={styles.imagens__imagem}>
            <img src={imagem} alt="imagem massa" />
          </div>
        ))}
      </div>
    </section>
  )
}
