"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.mainSection}>
                <div className={styles.welcomeSection}>
                    <h1 className={styles.welcomeTitle}>Bem-vindo à Caduzada Veículos</h1>
                    <p className={styles.welcomeDescription}>
                        Sua concessionária de confiança especializada em veículos de alta performance. 
                        Oferecemos uma seleção exclusiva de carros esportivos, clássicos e modernos, 
                        com qualidade garantida e atendimento personalizado.
                    </p>
                    <p className={styles.welcomeSubtext}>
                        Há mais de 10 anos realizando o sonho de ter o veículo perfeito. 
                        Venha descobrir nossa paixão por veículos excepcionais.
                    </p>
                </div>

                <div className={styles.imageContent}>
                    <Image 
                        className={styles.image}
                        src="/images/gtr-r34-png.png"
                        alt="GTR R34"
                        fill
                    />
                </div>
            </div>
        </div>
    )
}