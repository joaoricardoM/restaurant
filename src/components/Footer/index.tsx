import styles from './Footer.module.scss'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>
          Conecte-se com a La Trattoria: <br />
          <br />
          <FaFacebookF size={18} style={{ cursor: 'pointer' }} href="#" />{' '}
          &nbsp;&nbsp;
          <FaInstagram size={18} style={{ cursor: 'pointer' }} href="#" />
          &nbsp;&nbsp;&nbsp;
          <FaTwitter size={18} style={{ cursor: 'pointer' }} href="#" />
        </p>
        <p>Copyright © @2023</p>
        <p>
          Desenvolvido com
          <span style={{ fontSize: 28, color: '#ffcce5' }}> &#9825;</span>
          <span style={{ marginLeft: '8px' }}>by&nbsp;</span>
          <a href="https://github.com/joaoricardoM">João</a>
        </p>
      </footer>
    </>
  )
}
