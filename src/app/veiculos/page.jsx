"use client";

import { useEffect, useState } from "react";
import axios from "axios";

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
                <ul>
                    {veiculos.map((v) => (
                        <li key={v.id}>
                            <b>{v.modelo}</b> - {v.marca} - {v.ano} - {v.cor}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
