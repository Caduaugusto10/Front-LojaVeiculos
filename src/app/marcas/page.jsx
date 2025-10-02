"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CarrosselMarcas from "../../components/cardMarcas";
import styles from "./Marcas.module.css";

export default function Marcas() {
  const [marcas, setMarcas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMarcas() {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/marcas`);
        console.log("Marcas recebidas:", response.data);
        setMarcas(response.data || []);
      } catch (err) {
        console.error("Erro ao buscar marcas:", err);
        console.error("URL tentativa:", `${process.env.NEXT_PUBLIC_API_URL}/api/marcas`);
        setMarcas([]);
      } finally {
        setLoading(false);
      }
    }
    fetchMarcas();
  }, []);

  if (loading) return <p className={styles.loading}>Carregando marcas...</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Explore Nossas Marcas</h1>
      <p className={styles.subtitle}>
        Encontre o veículo dos seus sonhos navegando pelas melhores marcas disponíveis
      </p>

      <CarrosselMarcas marcas={marcas} />
    </div>
  );
}
