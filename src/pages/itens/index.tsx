import Cardapio from './itens.json'
import Item from './item'
import styles from './itens.module.scss'

export default function Itens() {
  return (
    <div className={styles.itens}>
      {Cardapio.map((item) => (
        <Item key={item.id} />
      ))}
    </div>
  )
}
