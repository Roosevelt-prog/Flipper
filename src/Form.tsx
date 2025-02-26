import styles from './Form.module.scss'

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { InstagramLogo, WhatsappLogo } from 'phosphor-react'

export default function Form() {
    const [name, setName] = useState('')
    const [document, setDocument] = useState('')
    const [phone, setPhone] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [publicPlace, setPublicPlace] = useState('')
    const [complement, setComplement] = useState('')
    const [userInfo, setUserInfo] = useState({})

    const navigate = useNavigate()

    function formataCPF(cpf: string){
      cpf = cpf.replace(/[^\d]/g, "");   
      
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    function phoneMask (value: string) {
      if (!value) return ""
      value = value.replace(/\D/g,'')
      value = value.replace(/(\d{2})(\d)/,"($1) $2")
      value = value.replace(/(\d)(\d{4})$/,"$1-$2")
      return value
    }


    function handleSubmit() {
        if (!name || !document || !phone || !zipCode || !publicPlace || !complement) {
            alert('Você deve preencher todos os campos.')
            return
        }

        setUserInfo({
          name: name,
          document: document,
          phone: phone,
        })

        navigate('/checkout')
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
            <h1>Preencha o formulário abaixo para prosseguir com seu pedido :)</h1>

            <form>
                <input
                     value={name} 
                     onChange={(e: any) => setName(e.target.value)}
                     placeholder="Nome completo" 
                     type="text" 
                />
                <input
                     maxLength={14}
                     value={formataCPF(document)} 
                     onChange={(e: any) => setDocument(formataCPF(e.target.value))}
                     placeholder="Documento (CPF)" 
                     type="text" 
                />
                <input
                     maxLength={15}
                     value={phone} 
                     onChange={(e: any) => setPhone(phoneMask(e.target.value))}
                     placeholder="Número de telefone" 
                     type="text" 
                />
                <input
                     value={zipCode} 
                     onChange={(e: any) => setZipCode(e.target.value)}
                     placeholder="CEP" 
                     type="text" 
                />
                <input
                     value={publicPlace} 
                     onChange={(e: any) => setPublicPlace(e.target.value)}
                     placeholder="Logradouro" 
                     type="text" 
                />
                <input
                     value={complement} 
                     onChange={(e: any) => setComplement(e.target.value)}
                     placeholder="Complemento" 
                     type="text" 
                />
                <select name="" id="">
                    <option value="">Escolha seu Firmware</option>
                    <option value="">Unleashed</option>
                    <option value="">RogueMaster</option>
                    <option value="">CarClown</option>
                </select>
                <button onClick={handleSubmit} type="button">Enviar</button>
            </form>
          </div>

          <footer className={styles.footer}>
          <div>
            <h2>Uly Dev</h2>
            <p>©2022 Flipper.Zero.Brasil</p>
            <p>Todos os direitos reservados.</p>
          </div>
          <div>
          <a href="https://api.whatsapp.com/send?phone=+551191649-4496&text=Oi%20Dandara!%20Gostaria%20de%20saber%20mais%20sobre%20o%20FlipperZero.">
              <WhatsappLogo weight="light" />
            </a>
            <a href="https://www.instagram.com/Uly.Alura">
              <InstagramLogo weight="light" />
            </a>
          </div>
        </footer>
        </div>
    )
}
