"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Marcas() {
    const [marcas, setMarcas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMarcas() {
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/marcas`);
                setMarcas(data);
            } catch (err) {
                setMarcas([]);
            } finally {
                setLoading(false);
            }
        }
        fetchMarcas();
    }, []);

    if (loading) return <p>Carregando marcas...</p>;

    return (
        <div style={{ padding: 24 }}>
            <h1>Marcas</h1>
            {marcas.length === 0 ? (
                <p>Nenhuma marca encontrada.</p>
            ) : (
                <ul>
                    {marcas.map((m) => (
                        <li key={m.id}>
                            <b>{m.nome}</b> - {m.descricao}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
