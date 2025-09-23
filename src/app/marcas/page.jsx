"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CardMarcas from "../../components/cardMarcas";

export default function Marcas() {
  const [marcas, setMarcas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMarcas() {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/marcas`);
        setMarcas(data || []);
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
      <h1 style={{ color: "#fff", marginBottom: 16 }}>Marcas</h1>

      {marcas.length === 0 ? (
        <p style={{ color: "#ddd" }}>Nenhuma marca encontrada.</p>
      ) : (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
              gap: 16,
              maxWidth: 720,
              width: "100%",
            }}
          >
            {marcas.map((m) => (
              <CardMarcas key={m.id ?? m.nome} marca={m} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
