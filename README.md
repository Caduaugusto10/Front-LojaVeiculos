# Front-LojaVeiculos

Projeto frontend de uma loja de veículos (Caduzada Veículos) desenvolvido com Next.js.

## Descrição do Projeto

Este é o frontend de uma aplicação de e-commerce para uma concessionária de veículos especializada em carros de alta performance. A aplicação permite aos usuários navegar por marcas, visualizar veículos disponíveis e preencher propostas de compra.

## Tecnologias Utilizadas

Next.js 15.5.3
React 19.1.0
Axios (para consumo de API)
Ant Design (componentes UI)
CSS Modules (estilos componentizados)

## Estrutura do Projeto

### Páginas Principais

**/home** - Página inicial com apresentação da concessionária Caduzada Veículos
**/marcas** - Exibe carrossel com as marcas de veículos disponíveis
**/veiculos** - Lista todos os veículos cadastrados no sistema
**/comprar** - Formulário completo para proposta de compra de veículo

### Componentes

**Header** - Cabeçalho com navegação entre as páginas
**Footer** - Rodapé da aplicação
**cardVeiculos** - Card para exibição de cada veículo (modelo, ano, preço, foto)
**cardMarcas** - Card/carrossel para exibição das marcas

### Funcionalidades

#### Página Home
Apresentação da concessionária
Mensagem de boas-vindas
Imagem destaque

#### Página Marcas
Consumo de API para buscar marcas cadastradas
Exibição em formato carrossel
Estado de loading durante carregamento

#### Página Veículos
Consumo de API para buscar todos os veículos
Grid responsivo de cards de veículos
Exibição de: modelo, ano, preço formatado, cor, foto
Estado de loading durante carregamento
Tratamento para quando não há veículos

#### Página Comprar
Formulário completo dividido em seções:
  - Dados Pessoais (nome, email, telefone, CPF, data nascimento)
  - Endereço (CEP, logradouro, número, complemento, bairro, cidade, estado)
  - Dados do Veículo (marca, modelo, ano, cor, combustível)
  - Forma de Pagamento (à vista ou financiado, valor entrada, parcelas, renda)
  - Serviços Adicionais (seguro, garantia estendida)
  - Observações
Simulação de envio de proposta
Tela de confirmação após envio

### Middleware

O projeto possui um middleware que redireciona a rota raiz (/) automaticamente para /home.

### Integração com Backend

A aplicação consome uma API REST para:
Buscar lista de marcas
Buscar lista de veículos
Exibir fotos dos veículos

A URL da API é configurável via variável de ambiente NEXT_PUBLIC_API_URL (padrão: http://localhost:3000).

## Como Executar

Instalar dependências:
npm install

Executar em modo desenvolvimento:
npm run dev

Build para produção:
npm build

Executar build de produção:
npm start

## Variáveis de Ambiente

NEXT_PUBLIC_API_URL - URL da API backend (padrão: http://localhost:3000)

## Imagens

O projeto inclui imagens na pasta public/images:
Placeholder (200.svg)
Capa do site (Capa-Site.png)
GTR R34 (gtr-r34-png.png e gtr-r34.jpg)