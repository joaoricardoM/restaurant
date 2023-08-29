import { ReactComponent as Logo } from '../../assets/logo.svg'
import styles from './Footer.module.scss'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>
          Conecte-se com a JRM La Trattoria: <br />
          <br />
          <FaFacebookF size={18} style={{ cursor: 'pointer' }} href="#" />{' '}
          &nbsp;&nbsp;
          <FaInstagram size={18} style={{ cursor: 'pointer' }} href="#" />
          &nbsp;&nbsp;&nbsp;
          <FaTwitter size={18} style={{ cursor: 'pointer' }} href="#" />
        </p>
        <p>Copyright © @2023</p>
        <Logo />
      </footer>
    </>
  )
}
