# 🦷 SorrisON — Conectando Sorrisos, Transformando Vidas

> Plataforma inteligente de gestão para triagem odontológica e voluntários, otimizando o atendimento a comunidades carentes.

---

## 📋 Descrição do Projeto

O **SorrisON** é uma aplicação web desenvolvida para facilitar a gestão de atendimentos odontológicos voluntários. A plataforma conecta ONGs, pacientes e dentistas voluntários, organizando filas de espera com triagem inteligente baseada em urgência, condições socioeconômicas e idade.

O projeto foi desenvolvido como parte da **Sprint 03** da disciplina de **Front-End Design Engineering** da FIAP, com foco na migração para uma arquitetura moderna utilizando React + Vite + TypeScript.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [React](https://react.dev/) | 19.x | Interface e componentização |
| [Vite](https://vitejs.dev/) | 8.x | Build e performance |
| [TypeScript](https://www.typescriptlang.org/) | 5.9.x | Tipagem estática |
| [TailwindCSS](https://tailwindcss.com/) | 4.x | Estilização da interface |
| [React Router DOM](https://reactrouter.com/) | 7.x | Navegação SPA entre páginas |
| [React Hook Form](https://react-hook-form.com/) | 7.x | Validação de formulários |

---

## 📁 Estrutura de Pastas

```
sorrison-fiap/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/          # Imagens e recursos estáticos
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── data/            # Dados estáticos da aplicação
│   │   └── integrantes.ts
│   ├── pages/           # Páginas da aplicação (rotas)
│   │   ├── Home.tsx
│   │   ├── Sobre.tsx
│   │   ├── Solucao.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contato.tsx
│   │   ├── Integrantes.tsx
│   │   └── IntegranteDetalhe.tsx
│   ├── App.tsx          # Configuração de rotas
│   ├── main.tsx         # Entry point da aplicação
│   └── index.css        # Estilos globais
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 Páginas da Aplicação

- **Home** `/` — Apresentação do projeto e funcionalidades principais
- **Sobre** `/sobre` — Missão, história e roadmap do SorrisON
- **Solução** `/solucao` — Detalhamento técnico da proposta
- **FAQ** `/faq` — Perguntas frequentes com accordion interativo
- **Contato** `/contato` — Formulário com validação via React Hook Form
- **Integrantes** `/integrantes` — Equipe do projeto com cards clicáveis
- **Perfil do Integrante** `/integrantes/:id` — Rota dinâmica com dados individuais

---

## ⚙️ Como Executar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm ou yarn

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/GuilhermeMarques200/sorrison-fiap.git

# 2. Acesse a pasta do projeto
cd sorrison-fiap

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. Acesse no navegador
# http://localhost:5173
```

### Build para produção

```bash
npm run build
npm run preview
```

---

## 🔗 Links do Projeto

- 📁 **Repositório GitHub:** [https://github.com/GuilhermeMarques200/sorrison-fiap](https://github.com/GuilhermeMarques200/sorrison-fiap)
- 🎥 **Vídeo de Apresentação (YouTube):** _em breve_

---

## 👥 Integrantes do Grupo

### Guilherme Marques
- **RM:** 568054
- **Turma:** 1TDSPB
- **GitHub:** [github.com/GuilhermeMarques200](https://github.com/GuilhermeMarques200)
- **LinkedIn:** [linkedin.com/in/guilherme-marques-15670b307](https://www.linkedin.com/in/guilherme-marques-15670b307)

### Guilherme de Sousa Leopoldino
- **RM:** 567242
- **Turma:** 1TDSPB
- **GitHub:** [github.com/GuiDSLeopoldino](https://github.com/GuiDSLeopoldino)
- **LinkedIn:** _a preencher_

### Erick Ramos
- **RM:** 567837
- **Turma:** 1TDSPB
- **GitHub:** [github.com/erickramossantoser-create](https://github.com/erickramossantoser-create)
- **LinkedIn:** _a preencher_

### Lucas Cunha Maia Vila Nova
- **RM:** 566742
- **Turma:** 1TDSPB
- **GitHub:** [github.com/lucascunhamaia](https://github.com/lucascunhamaia)
- **LinkedIn:** _a preencher_

---

## 📞 Contato

Em caso de dúvidas sobre o projeto, entre em contato através do formulário disponível na página [/contato](http://localhost:5173/contato) ou diretamente pelo LinkedIn dos integrantes.

---

<p align="center">
  Desenvolvido com 💙 pela equipe SorrisON — FIAP 2025
</p>
