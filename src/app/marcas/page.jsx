"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CarrosselMarcas from "../../components/cardMarcas";
import styles from "./Marcas.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export default function Marcas() {
  const [marcas, setMarcas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMarcas() {
      try {
        const response = await axios.get(`${API_URL}/api/marcas`);
        setMarcas(response.data || []);
      } catch (err) {
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
