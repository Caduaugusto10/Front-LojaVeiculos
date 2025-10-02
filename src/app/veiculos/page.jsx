"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CardVeiculos from "@/components/cardVeiculos";

export default function Veiculos() {
    const [veiculos, setVeiculos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchVeiculos() {
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/veiculos`);
                setVeiculos(data);
            } catch (err) {
                setVeiculos([]);
            } finally {
                setLoading(false);
            }
        }
        fetchVeiculos();
    }, []);

    if (loading) return <p>Carregando veículos...</p>;

    return (
        <div style={{ padding: 24 }}>
            <h1>Veículos</h1>
            {veiculos.length === 0 ? (
                <p>Nenhum veículo encontrado.</p>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '1rem'
                }}>
                    {veiculos.map((veiculo) => (
                        <CardVeiculos key={veiculo.id} />
                    ))}
                </div>
            )}
        </div>
    );
}
