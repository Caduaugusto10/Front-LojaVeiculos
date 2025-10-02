import React from "react";
import Image from "next/image";
import { Carousel, Card } from "antd";
import styles from "../styles/CardMarcas.module.css";

export function CardMarcaIndividual({ marca }) {
  const nome = marca?.nome || marca?.name || "Marca";
  const logo =
    marca?.logo || marca?.logoUrl || marca?.imagem || "/images/logo-placeholder.png";
  const descricao = marca?.descricao;

  return (
    <div className={styles.CardMarcas} title={descricao || nome}>
      <div className={styles.logoWrap}>
        <Image
          src={logo}
          alt={nome}
          width={96}
          height={96}
          className={styles.marcas}
        />
      </div>
      <h3 className={styles.title}>{nome}</h3>
      {descricao && <p className={styles.desc}>{descricao}</p>}
    </div>
  );
}

export default function CarrosselMarcas({ marcas = [] }) {
  console.log("CarrosselMarcas recebeu:", marcas);
  
  if (!marcas || marcas.length === 0) {
    return (
      <div className={styles.carouselWrapper}>
        <p className={styles.noMarcas}>Nenhuma marca encontrada.</p>
      </div>
    );
  }

  return (
    <div className={styles.carouselWrapper}>
      <h3 style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>
        {marcas.length} marcas encontradas
      </h3>
      <Carousel
        autoplay
        dots={true}
        infinite={true}
        speed={500}
      >
        {marcas.map((marca, index) => {
          const nome = marca?.nome || marca?.name || "Marca";
          const logo = marca?.logo || marca?.logoUrl || marca?.imagem || "/images/gtr-r34-png.png";
          const descricao = marca?.descricao || `Marca ${nome}`;
          
          return (
            <div key={marca.id ?? index} style={{ padding: '20px' }}>
              <Card
                hoverable
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px'
                }}
                cover={
                  <div style={{
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.2))'
                  }}>
                    <Image 
                      src={logo}
                      alt={nome}
                      width={120}
                      height={120}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                }
              >
                <Card.Meta 
                  title={<span style={{ color: '#60a5fa', fontSize: '1.1rem' }}>{nome}</span>} 
                  description={<span style={{ color: '#d1d5db' }}>{descricao}</span>}
                />
              </Card>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}