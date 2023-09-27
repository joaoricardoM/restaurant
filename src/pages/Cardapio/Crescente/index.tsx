import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import styles from './Crescente.module.scss'

//componente criado para alterar a ordem da listagem, crescente ou decrescente, falta ajustar o css
interface Props {
  ordem: boolean
  setOrdem: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Crescente({ ordem, setOrdem }: Props) {
  return (
    <button className={styles.crescente} onClick={() => setOrdem(!ordem)}>
      {ordem ? <IoIosArrowDown /> : <IoIosArrowUp />}
    </button>
  )
}
