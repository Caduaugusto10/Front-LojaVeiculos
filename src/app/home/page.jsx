"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>Caduzada Veículos</div>

            <Image className={styles.image} 
            src="/images/jetta-gli.jpg" 
            alt="Carro Jetta GLI" 
            width={100} 
            height={300}
            quality={100}
            />
        </div>
    );
}
