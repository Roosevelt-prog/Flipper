import styles from './Home.module.scss'

import { WhatsappLogo, InstagramLogo } from 'phosphor-react';

import { Link } from 'react-router-dom'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/scss';
import 'swiper/css/pagination';

// import { useRef, useState } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// const Model = () => {
//   const gltf = useLoader(GLTFLoader, "./src/flp.glb");
//   return (
//     <>
//       <primitive object={gltf.scene} scale={0.4} />
//     </>
//   );
// };

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <img src="https://static.tildacdn.com/tild3363-3430-4063-b531-323834643038/orange_text_transpar.svg" />
        <nav>
          <a href="#main">Início</a>
          <a href="#flipper">Flipper Zero</a>
          <a href="#about">Sobre nós</a>
          <a href="#testimonials">Depoimentos</a>
       {/*    <Link to="/form">
            <button type="button">
              Comprar
              <small> R$ 950,90</small>
            </button>
          </Link> */}
        </nav>
      </header>

      <div id="main" className={styles.main}>
        <div className={styles.title_wrapper}>
          <h1 className={styles.tipewriter}>Hack the Planet</h1>
        </div>
        <img
          src="https://i.imgur.com/FicT6aM.png"
          alt=""
        />
        {/* <Canvas>
            <Model />
            <ambientLight intensity={0.1} />
            <mesh>
              <boxGeometry />
              <meshStandardMaterial />
            </mesh>
          </Canvas> */}
        <h2>
          Adquira seu Flipper diretamente no Brasil com dev @Joao.Alura!
        </h2>
        <p>
          Envio prático e frete grátis para todo país.
        </p>
        <p>
          R$950,90 no PIX ou R$1.210,00 até 12x.
        </p>
        <div>
          <a
            href="https://flipperseek.carrinho.app/one-checkout/ocmtb/24092694"
            target="_blank"
          >
            <button>
              Comprar
            </button>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+5561986027994&text=Oi Dev!%20Gostaria%20de%20saber%20mais%20sobre%20o%20FlipperZero."
            target="_blank"
          >
            <button>
              Entrar em contato
            </button>
          </a>
         {/* <a
            href="https://api.whatsapp.com/send?phone=+5561986027994&text=Oi Dev!%20Gostaria%20de%20saber%20mais%20sobre%20o%20FlipperZero."
            target="_blank"
          >
            <button>
              Comprar
            </button>
          </a>*/}
        </div>
      </div>
  
  <div id="flipper" className={styles.flipper}>
        <div className={styles.text_wrapper}>
          <h2>O que é o Flipper Zero?</h2>
          <p>Flipper Zero é uma multi-ferramenta portátil para engenheiros e geeks em um corpo semelhante a um brinquedo. Ele adora pesquisar coisas digitais como protocolos de rádio, sistemas de controle de acesso, hardware e muito mais. É totalmente de código aberto e personalizável, para que você possa estendê-lo da maneira que quiser. Características do Flipper Zero:</p>
          <ul>
            <li>- Sub-GHz - Use como um controle remoto de rádio com muitos protocolos.</li>
            <li>- NFC - Armazene todos os seus mifare, NTAG e outros cartões e tags NFC.</li>
            <li>- RFID - Armazene, emule e escreva seus keyfobs LF RFID, cartões e muito mais.</li>
            <li>- Transceptor IR - Controle remoto Universal IR para sua TV e outros aparelhos.</li>
            <li>- Animal de estimação virtual - Um golfinho fofo com personalidade.</li>
            <li>- Firmware de código aberto - Código seus próprios aplicativos e plugins.</li>
            <li>- Bluetooth LE - Ampliar recursos com aplicativos móveis Flipper.</li>
            <li>- U2F Security Token - autenticar em todos os lugares com sua Flipper via FIDO</li>
            <li>- BadUSB - Execute quaisquer scripts de emulação de teclado</li>
            <li>- iButton - Armazene todas as suas chaves Dallas, Cyfral e Metakom</li>
          </ul>
        </div>
      </div>

      <div id="about" className={styles.about}>
        <div className={styles.text_wrapper}>
          <h2>Sobre mim</h2>
          <p>
            Como Pentester profissional, TOP 6 Mundial em CTF's pela plataforma Tryhackme e professor de Back-end na Alura.Online,   Eu (@Joao.Alura) conquistei diversos clientes em todo o Brasil, os quais você pode consultar na central/grupo de referências!

          </p>
          <p>Estas são algumas das vantagens que terá adquirindo seu Flipper Zero:</p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.img_wrapper}>
              <img src="https://user-images.githubusercontent.com/10697207/186202043-26947e28-b1cc-459a-8f20-ffcc7fc0c71c.png" alt="" />
            </div>
            <strong>Melhores Firmwares</strong>
            <p>Fica a seu critério decidir no momento da compra o firmware que o acompanhará. Contando com Unleashed, RogueMaster, CarClown e outros...</p>
          </div>

          <div className={styles.card}>
            <div className={styles.img_wrapper}>
              <img src="https://cdn-icons-png.flaticon.com/512/411/411780.png" alt="" />
            </div>
            <strong>Frete grátis</strong>
            <p>Envio rápido e gratuito para todo o pais na compra do seu Flipper Zero (consultar a estima de entrega no ato da compra)</p>
          </div>

          <div className={styles.card}>
            <div className={styles.img_wrapper}>
              <img className={styles.wpp} src="https://cdn-icons-png.flaticon.com/512/152/152740.png" alt="" />
            </div>
            <strong>Acesso ao grupo</strong>
            <p>Obtenha acesso ao nosso grupo vip onde compartilhamos conhecimento, diversos firmwares e formas de usar seu Flipper!</p>
          </div>
        </div>
      </div>

      <div id="testimonials" className={styles.testimonials}>
        <h2>
          Depoimentos de clientes
        </h2>
        <Swiper
          className={styles.swiper}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          mousewheel={true}
        >
          <SwiperSlide className={styles.slide}>
            <blockquote>
              <p>
                <span>&ldquo;</span>
                Cumpre o prometido e funciona muito bem, resolveu minhas cópias de chave, estacionamento e escritório.
              </p>
              <cite>
                <img
                  src="https://flipper-zero-brasil.vercel.app/assets/fotos/71.jpg"
                />
                Claudio Sales
              </cite>
            </blockquote>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <blockquote>
              <p>
                <span>&ldquo;</span>
                Agradecer ao João pelo unleashed configurado, chegou em 8 dias. Obrigado pelo suporte com firmware.
              </p>
              <cite>
                <img
                  src="https://flipper-zero-brasil.vercel.app/assets/fotos/70.jpg"
                />
                Lucas Castro
              </cite>
            </blockquote>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <blockquote>
              <p>
                <span>&ldquo;</span>
                Recebi o produto rapidamente e fui muito bem atendido! Recomendo a todos desde já!
              </p>
              <cite>
                <img
                  src="https://flipper-zero-brasil.vercel.app/assets/fotos/45.jpg"
                />
                Rodrigo Canela
              </cite>
            </blockquote>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <blockquote>
              <p>
                <span>&ldquo;</span>
                9 dias até o rio de janeiro, obrigado por toda a atenção e meus parabéns pelo trabalho joão! :)
              </p>
              <cite>
                <img
                  src="https://flipper-zero-brasil.vercel.app/assets/fotos/75.jpg"
                />
                Sara Rodrigues
              </cite>
            </blockquote>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <blockquote>
              <p>
                <span>&ldquo;</span>
                Uma mão na roda para os testes de segurança do meu trabalho. Já estou estudando o código do dispositivo
              </p>
              <cite>
                <img
                  src="https://flipper-zero-brasil.vercel.app/assets/fotos/73.jpeg"
                />
                Marcos Andrade
              </cite>
            </blockquote>
          </SwiperSlide>
        </Swiper>
      </div>


      <footer className={styles.footer}>
        <div>
            <h2>João C. Dev</h2>
          <p>©2021 @Joao.Alura</p>
          <p>Todos os direitos reservados.</p>
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=+556198602-7994&text=Oi!%20Gostaria%20de%20saber%20mais%20sobre%20o%20FlipperZero.">
            <WhatsappLogo weight="light" />
          </a>
          <a href="https://www.instagram.com/joao.alura">
            <InstagramLogo weight="light" />
          </a>
        </div>
      </footer>
    </>
  )
}
