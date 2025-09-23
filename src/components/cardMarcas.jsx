import React from "react";
import Image from "next/image";
import styles from "../styles/CardMarcas.module.css";

export default function CardMarcas({ marca }) {
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