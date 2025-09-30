import React from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.title}>Caduzada Veículos</h1>
                <nav className={styles.nav}>
                    <a href="/" className={styles.navLink}>Home</a>
                    <a href="/marcas" className={styles.navLink}>Marcas</a>
                    <a href="/veiculos" className={styles.navLink}>Veículos</a>
                </nav>
            </div>
        </header>
    );
}