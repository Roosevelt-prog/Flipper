import styles from './Payment.module.scss'

import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { WhatsappLogo, InstagramLogo } from 'phosphor-react';

export default function Payment() {
  const [price, setPrice] = useState(950.90)
  const [QRCode, setQRCode] = useState('')
  const [copyPaste, setCopyPaste] = useState('')

  const cardPrice = 1197

  async function getPix() {

    const formatedPrice = price.toLocaleString('pt-br', { minimumFractionDigits: 2 })

    const response = await axios.post('https://gerador-pix-production.up.railway.app/emvqr-static', {
      amount: `R$ ${formatedPrice}`,
      city: "RJ",
      key: "alessandra.messias.s@hotmail.com",
      key_type: "Email",
      name: "Alessandra",
      reference: "FLIPPERZERO"
    })

    const qrcode = response.data.qrcode_base64
    const copia = response.data.code

    setQRCode(qrcode)
    setCopyPaste(copia)
  }

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <nav>
          <Link to="/">
            <img src="https://static.tildacdn.com/tild3363-3430-4063-b531-323834643038/orange_text_transpar.svg" alt="" />
          </Link>
        </nav>
      </header>

      <div className={styles.main}>
        <h1>Falta pouco para você adquirir seu FlipperZero!</h1>
        <p>*Devido a alta demanda, estamos limitando a quantidade do produto a 1 por cliente.</p>

        <div className={styles.product_wrapper}>
          <img src="https://cdn.shopify.com/s/files/1/0527/9806/2745/products/top.png?v=1671722838" alt="" />
          <div className={styles.product_info}>
            <p>Flipper Zero</p>
            <div>
              <span className={styles.price}>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} no PIX <br />ou<br /> {cardPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} no cartão</span>
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <button onClick={getPix}>PAGAR VIA PIX</button>
          <a target="_blank" href="https://mpago.la/2ZhJJ4L"><button>CARTÃO</button></a>
        </div>

        <div className={styles.pix}>
          <p>
            Faça o pagamento via PIX através de uma das opções abaixo e envie seu comprovante para nosso whatsapp.
          </p>
          {
            QRCode && (
              <>
                <img src={QRCode} />
                <div className={styles.text_wrapper}>
                  <p>{copyPaste}</p>
                </div>
              </>
            )
          }
          <a href="https://api.whatsapp.com/send?phone=+5561986027994&text=Oi Dev!%20Gostaria%20de%20saber%20mais%20sobre%20o%20FlipperZero.">
            <button>
              <WhatsappLogo weight="light" />
              Entrar em contato
            </button>
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        <div>
          <h2>Uly Dev</h2>
          <p>©2022 Flipper.Zero.Brasil</p>
          <p>Todos os direitos reservados.</p>
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=+556198602-79946&text=Oi%!%20Gostaria%20de%20saber%20mais%20sobre%20o%20FlipperZero.">
            <WhatsappLogo weight="light" />
          </a>
          <a href="https://www.instagram/Uly.Alura">
            <InstagramLogo weight="light" />
          </a>
        </div>
      </footer>
    </div>
  )
}
