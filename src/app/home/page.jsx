"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContent}>
                <Image 
                    className={styles.image}
                    src="/images/gtr-r34.jpg"
                    alt="GTR R34"
                    fill
                />
            </div>

            <div className={styles.content}>
                <h1 className={styles.titleContent}>
                    Principais Marcas
                </h1>
            </div>
        </div>
    )
}