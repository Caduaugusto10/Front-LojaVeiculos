import style from "../styles/CardVeiculos.module.css";
import React from "react";
import { Card } from "antd";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export default function CardVeiculos({ veiculo }) {
    console.log("🚗 VEICULO COMPLETO:", veiculo);
    console.log("💰 PRECO:", veiculo?.preco);
    console.log("💰 TIPO DO PRECO:", typeof veiculo?.preco);
    
    const {
        id,
        modelo,
        ano,
        preco,
        cor,
        marca_id,
        descricao,
        photo
    } = veiculo;

    const imageUrl = photo 
        ? `${API_URL}/uploads/${photo}`
        : "/images/200.svg";

    const precoNumerico = typeof preco === 'string' ? parseFloat(preco) : preco;
    
    console.log("💰 PRECO NUMERICO:", precoNumerico);
    
    const precoFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(precoNumerico || 0);
    
    console.log("💰 PRECO FORMATADO:", precoFormatado);

    return (
        <Card
            hoverable
            className={style.cardVeiculos}
            cover={
                <div className={style.imageContainer}>
                    <img
                        src={imageUrl}
                        alt={modelo}
                        className={style.carImage}
                        onError={(e) => {
                            e.target.src = "/images/200.svg";
                        }}
                    />
                </div>
            }
        >
            <div className={style.cardContent}>
                <h2 className={style.modeloTitle}>{modelo}</h2>
                
                <div className={style.anoContainer}>
                    <span className={style.anoLabel}>Ano:</span>
                    <span className={style.anoValue}>{ano}</span>
                </div>

                <div className={style.priceContainer}>
                    <span className={style.price}>{precoFormatado}</span>
                </div>
            </div>
        </Card>
    );
}