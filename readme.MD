# Future Work Network

Aplicação web em React + Tailwind CSS que simula uma rede profissional voltada ao **futuro do trabalho**, conectando pessoas, competências e propósito.

O projeto faz parte da Global Solution de Front-End Design – Web Development (2º semestre/2025)

## Resumo do projeto

A *Future Work Network* é uma Single Page Application (SPA) que apresenta uma listagem de profissionais fictícios, permitindo:

- Visualizar cards com nome, foto, cargo e principais skills
- Abrir um **modal detalhado** de cada profissional
- Simular ações de **"Recomendar profissional"** e **"Enviar mensagem"**
- Pesquisar por nome/cargo/skills
- Filtrar por **área**, **cidade** ou **tecnologia**
- Navegar em um layout **responsivo**, com **Dark Mode**
- Consumir dados de um **JSON local** com pelo menos 60 perfis

## Como executar o projeto

### 1. Pré-requisitos

- Node.js instalado (versão 18+ recomendada)
- Gerenciador de pacotes npm (já vem com o Node)

### 2. Instalação das dependências

No terminal, dentro da pasta do projeto:

```bash
npm install
```
### 3. Rodar em ambiente de desenvolvimento

```bash
npm run dev
```

O Vite mostrará no terminal o endereço local (geralmente `http://localhost:5173`).

### 4. Build para produção

```bash
npm run build
npm run preview
```

---

## Estrutura principal

- `src/App.jsx` — componente principal da SPA
- `src/data/profiles.json` — base local com ~60 perfis simulados
- `src/components/ProfileCard.jsx` — cards dos profissionais
- `src/components/ProfileModal.jsx` — modal com dados detalhados
- `src/components/SearchBar.jsx` — barra de busca
- `src/components/FiltersBar.jsx` — filtros por área, cidade e tecnologia
- `src/components/ThemeToggle.jsx` — botão de Dark Mode
- `src/components/Header.jsx` e `Footer.jsx` — cabeçalho e rodapé

---

## Usuários e senhas

A aplicação não possui autenticação real. Todos os perfis são fictícios e exibidos diretamente a partir do JSON local.

---

## Deploy

https://gs-front-end-web-dev-2rhg.vercel.app/

## Repositório

https://github.com/JoaoVespa/GS_FrontEnd-WebDev.git
---

## Integrante(s)

- João Marcelo Diniz Vespa - RM 564038
- Pedro Henrique da Silva - RM 566235
- William Queiroz de Araujo - RM 565032

