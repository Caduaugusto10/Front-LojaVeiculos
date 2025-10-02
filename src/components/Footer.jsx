import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Caduzada Veículos</h3>
                        <p className={styles.footerText}>
                            Sua concessionária de confiança especializada em veículos de alta performance.
                        </p>
                        <div className={styles.footerContact}>
                            <p>📍 Rua dos Automóveis, 123 - Centro</p>
                            <p>📞 (19) 98765-4321</p>
                            <p>✉️ contato@caduzadaveiculos.com.br</p>
                        </div>
                    </div>
                    
                    <div className={styles.footerSection}>
                        <h4 className={styles.footerSubtitle}>Nossos Serviços</h4>
                        <ul className={styles.footerList}>
                            <li>Venda de veículos novos e seminovos</li>
                            <li>Financiamento facilitado</li>
                            <li>Avaliação de troca</li>
                            <li>Manutenção e revisões</li>
                        </ul>
                    </div>
                    
                    <div className={styles.footerSection}>
                        <h4 className={styles.footerSubtitle}>Horário de Funcionamento</h4>
                        <div className={styles.footerHours}>
                            <p><strong>Segunda à Sexta:</strong> 08h às 18h</p>
                            <p><strong>Sábado:</strong> 08h às 16h</p>
                            <p><strong>Domingo:</strong> Fechado</p>
                        </div>
                    </div>
                </div>
                
                <div className={styles.footerBottom}>
                    <p>&copy; 2025 Caduzada Veículos. Todos os direitos reservados.</p>
                </div>
            </footer>
    )
}
 
 