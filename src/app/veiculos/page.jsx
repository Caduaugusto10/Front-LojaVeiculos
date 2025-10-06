"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CardVeiculos from "../../components/cardVeiculos";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export default function Veiculos() {
    const [veiculos, setVeiculos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchVeiculos() {
            try {
                const { data } = await axios.get(`${API_URL}/api/veiculos`);
                setVeiculos(data || []);
            } catch (err) {
                console.error("Erro ao buscar veículos:", err);
                setVeiculos([]);
            } finally {
                setLoading(false);
            }
        }
        fetchVeiculos();
    }, []);

    if (loading) return <p style={{ textAlign: 'center', padding: '50px', color: 'white' }}>Carregando veículos...</p>;

    return (
        <div style={{ padding: '24px', minHeight: '100vh', background: '#0f172a' }}>
            <h1 style={{ 
                color: 'white', 
                textAlign: 'center', 
                marginBottom: '30px',
                fontSize: '2.5rem'
            }}>
                Nossos Veículos
            </h1>
            
            {veiculos.length === 0 ? (
                <p style={{ 
                    color: 'white', 
                    textAlign: 'center',
                    fontSize: '1.2rem'
                }}>
                    Nenhum veículo encontrado.
                </p>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '24px',
                    maxWidth: '1400px',
                    margin: '0 auto'
                }}>
                    {veiculos.map((veiculo) => (
                        <CardVeiculos key={veiculo.id} veiculo={veiculo} />
                    ))}
                </div>
            )}
        </div>
    );
}
