"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div>

            <header className={styles.header}>
                <div className={styles.logo}>
                    <span className={styles.crown}>👑</span>
                    <div>
                        <div className={styles.logoTitle}>CADUZADA</div>
                        <div className={styles.logoSubtitle}>VEÍCULOS</div>
                    </div>
                </div>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/marcas" className={styles.navLink}>Marcas</Link>
                    <Link href="/veiculos" className={styles.navLink}>Veículos</Link>
                    <Link href="/depoimentos" className={styles.navLink}>Compras</Link>

                </nav>
            </header>

            <div className={styles.container}>
                <Image 
                    className={styles.image} 
                    src="/images/Capa-Site.png" 
                    alt="Carro Jetta GLI"
                    fill
                    priority
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                />
                
                <div className={styles.content}>
                    <div className={styles.textSection}>
                        <h1 className={styles.mainHeading}>A Paixão por Carros em Primeiro Lugar</h1>
                        <p className={styles.description}>
                            Na Caduzada Veículos, sua satisfação é nosso maior objetivo. Conquistamos a 
                            confiança de que você precisa através da excelência na venda de veículos, oferecendo aos nossos na Finacasa 
                            Criadas à Família Caduzas.
                        </p>
                    </div>

                    <div className={styles.destacuesSection}>
                        <h2 className={styles.sectionTitle}>Nossos Destaques</h2>
                        <div className={styles.carGrid}>
                            <div className={styles.carCard}>
                                <img src="/images/jetta-gli.jpg" alt="Jetta GLI" />
                                <div className={styles.carInfo}>
                                    <h3>Jetta GLI</h3>
                                    <p>R$ 165.000</p>
                                    <button className={styles.detailsBtn}>MAIS DETALHES</button>
                                </div>
                            </div>
                            <div className={styles.carCard}>
                                <img src="/images/jetta-gli-red.jpg" alt="Jetta GLI" />
                                <div className={styles.carInfo}>
                                    <h3>Jetta GLI</h3>
                                    <p>R$ 168.000</p>
                                    <button className={styles.detailsBtn}>MAIS DETALHES</button>
                                </div>
                            </div>
                            <div className={styles.carCard}>
                                <img src="/images/suv-premium.jpg" alt="SUV Premium" />
                                <div className={styles.carInfo}>
                                    <h3>SUV Premium</h3>
                                    <p>R$ 89.000</p>
                                    <button className={styles.detailsBtn}>MAIS DETALHES</button>
                                </div>
                            </div>
                            <div className={styles.carCard}>
                                <img src="/images/suv.jpg" alt="SUV" />
                                <div className={styles.carInfo}>
                                    <h3>SUV</h3>
                                    <p>R$ 108.000</p>
                                    <button className={styles.detailsBtn}>MAIS DETALHES</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactSection}>
                        <h2 className={styles.sectionTitle}>Fale Conosco</h2>
                    </div>
                </div>
            </div>
            
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerLogo}>
                        <span className={styles.crown}>👑</span>
                        <div>
                            <div className={styles.logoTitle}>CADUZADA</div>
                            <div className={styles.logoSubtitle}>VEÍCULOS</div>
                        </div>
                    </div>
                    <div className={styles.footerInfo}>
                        <div className={styles.footerColumn}>
                            <h3>Telefone</h3>
                            <p>Saldanha de Responsabilidade</p>
                            <p>Horário de Funcionamento</p>
                        </div>
                        <div className={styles.footerColumn}>
                            <h3>Cadastre Gonosco</h3>
                            <p>Seja o Primeiro Cara a Saber da Para</p>
                            <p>Promoções por Email e WhatsApp sms</p>
                        </div>
                    </div>
                    <div className={styles.socialIcons}>
                        <span>📘</span>
                        <span>📷</span>
                        <span>🎵</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
