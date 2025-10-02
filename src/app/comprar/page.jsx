"use client";

import { useState } from "react";
import styles from "./Comprar.module.css";

export default function Comprar() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        cpf: "",
        dataNascimento: "",

        cep: "",
        endereco: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        
        marca: "",
        modelo: "",
        ano: "",
        cor: "",
        combustivel: "",
        
        tipoCompra: "avista",
        valorEntrada: "",
        parcelas: "12",
        renda: "",
        
        seguro: false,
        garantiaEstendida: false,
        observacoes: ""
    });

    const [loading, setLoading] = useState(false);
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        setTimeout(() => {
            setLoading(false);
            setEnviado(true);
            console.log("Dados do formulário:", formData);
        }, 2000);
    };

    if (enviado) {
        return (
            <div className={styles.container}>
                <div className={styles.sucessoCard}>
                    <h1 className={styles.sucessoTitle}>🎉 Proposta Enviada!</h1>
                    <p className={styles.sucessoText}>
                        Sua proposta de compra foi enviada com sucesso! 
                        Nossa equipe entrará em contato em até 24 horas.
                    </p>
                    <button 
                        onClick={() => setEnviado(false)}
                        className={styles.voltarBtn}
                    >
                        Nova Proposta
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Formulário de Compra</h1>
                <p className={styles.subtitle}>
                    Preencha os dados abaixo para simular sua compra
                </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>📋 Dados Pessoais</h2>
                    <div className={styles.row}>
                        <div className={styles.field}>
                            <label className={styles.label}>Nome Completo *</label>
                            <input
                                type="text"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                className={styles.input}
                                required
                            />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                                required
                            />
                        </div>
                    </div>
                    
                    <div className={styles.row}>
                        <div className={styles.field}>
                            <label className={styles.label}>Telefone *</label>
                            <input
                                type="tel"
                                name="telefone"
                                value={formData.telefone}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="(11) 99999-9999"
                                required
                            />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>CPF *</label>
                            <input
                                type="text"
                                name="cpf"
                                value={formData.cpf}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="000.000.000-00"
                                required
                            />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Data de Nascimento</label>
                            <input
                                type="date"
                                name="dataNascimento"
                                value={formData.dataNascimento}
                                onChange={handleChange}
                                className={styles.input}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>🚗 Veículo de Interesse</h2>
                    <div className={styles.row}>
                        <div className={styles.field}>
                            <label className={styles.label}>Marca *</label>
                            <select
                                name="marca"
                                value={formData.marca}
                                onChange={handleChange}
                                className={styles.select}
                                required
                            >
                                <option value="">Selecione a marca</option>
                                <option value="bmw">BMW</option>
                                <option value="audi">Audi</option>
                                <option value="mercedes">Mercedes-Benz</option>
                                <option value="nissan">Nissan</option>
                                <option value="toyota">Toyota</option>
                                <option value="honda">Honda</option>
                                <option value="volkswagen">Volkswagen</option>
                            </select>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Modelo *</label>
                            <input
                                type="text"
                                name="modelo"
                                value={formData.modelo}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Ex: Civic, Corolla, A3..."
                                required
                            />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Ano *</label>
                            <select
                                name="ano"
                                value={formData.ano}
                                onChange={handleChange}
                                className={styles.select}
                                required
                            >
                                <option value="">Ano</option>
                                {Array.from({length: 10}, (_, i) => 2025 - i).map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.field}>
                            <label className={styles.label}>Cor Preferida</label>
                            <select
                                name="cor"
                                value={formData.cor}
                                onChange={handleChange}
                                className={styles.select}
                            >
                                <option value="">Selecione a cor</option>
                                <option value="branco">Branco</option>
                                <option value="preto">Preto</option>
                                <option value="prata">Prata</option>
                                <option value="azul">Azul</option>
                                <option value="vermelho">Vermelho</option>
                                <option value="cinza">Cinza</option>
                            </select>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Combustível</label>
                            <select
                                name="combustivel"
                                value={formData.combustivel}
                                onChange={handleChange}
                                className={styles.select}
                            >
                                <option value="">Tipo de combustível</option>
                                <option value="flex">Flex (Gasolina/Etanol)</option>
                                <option value="gasolina">Gasolina</option>
                                <option value="diesel">Diesel</option>
                                <option value="hibrido">Híbrido</option>
                                <option value="eletrico">Elétrico</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>💳 Forma de Pagamento</h2>
                    <div className={styles.row}>
                        <div className={styles.field}>
                            <label className={styles.label}>Tipo de Compra *</label>
                            <div className={styles.radioGroup}>
                                <label className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="tipoCompra"
                                        value="avista"
                                        checked={formData.tipoCompra === "avista"}
                                        onChange={handleChange}
                                    />
                                    À Vista
                                </label>
                                <label className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="tipoCompra"
                                        value="financiado"
                                        checked={formData.tipoCompra === "financiado"}
                                        onChange={handleChange}
                                    />
                                    Financiado
                                </label>
                            </div>
                        </div>
                    </div>

                    {formData.tipoCompra === "financiado" && (
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label className={styles.label}>Valor da Entrada (R$)</label>
                                <input
                                    type="number"
                                    name="valorEntrada"
                                    value={formData.valorEntrada}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="20000"
                                />
                            </div>
                            <div className={styles.field}>
                                <label className={styles.label}>Parcelas</label>
                                <select
                                    name="parcelas"
                                    value={formData.parcelas}
                                    onChange={handleChange}
                                    className={styles.select}
                                >
                                    <option value="12">12x</option>
                                    <option value="24">24x</option>
                                    <option value="36">36x</option>
                                    <option value="48">48x</option>
                                    <option value="60">60x</option>
                                </select>
                            </div>
                            <div className={styles.field}>
                                <label className={styles.label}>Renda Mensal (R$)</label>
                                <input
                                    type="number"
                                    name="renda"
                                    value={formData.renda}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="5000"
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>🛡️ Serviços Adicionais</h2>
                    <div className={styles.checkboxGroup}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                name="seguro"
                                checked={formData.seguro}
                                onChange={handleChange}
                            />
                            Seguro Total (12 meses)
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                name="garantiaEstendida"
                                checked={formData.garantiaEstendida}
                                onChange={handleChange}
                            />
                            Garantia Estendida (3 anos)
                        </label>
                    </div>
                    
                    <div className={styles.field}>
                        <label className={styles.label}>Observações</label>
                        <textarea
                            name="observacoes"
                            value={formData.observacoes}
                            onChange={handleChange}
                            className={styles.textarea}
                            placeholder="Observações adicionais sobre sua compra..."
                            rows="4"
                        />
                    </div>
                </div>

                <div className={styles.submitSection}>
                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={loading}
                    >
                        {loading ? "🔄 Enviando..." : "🚗 Enviar Proposta"}
                    </button>
                    <p className={styles.disclaimer}>
                        * Campos obrigatórios. Seus dados estão seguros conosco.
                    </p>
                </div>
            </form>
        </div>
    );
}