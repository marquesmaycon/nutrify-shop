# VSL Page

Landing page de VSL com foco em conversao, seccoes de produto e fluxo de compra.

## 📖 Sobre o projeto

Projeto em Next.js com App Router, componentes reutilizaveis e paginas auxiliares
(checkout, terms, privacy). A base e pensada para campanhas com UTM e foco em CTA.

## ✨ Funcionalidades

- 🧩 Seccoes: hero, video, produtos e depoimentos
- 🛒 Carrinho com botao de compra e contexto compartilhado
- 🧭 UTM tracking com persistencia entre rotas
- 🌓 Tema claro/escuro com `next-themes`
- 🧾 Paginas auxiliares: checkout, terms, privacy
- 🎨 UI components reutilizaveis (Shadcn UI base)
- ⚡ App Router + TypeScript

## 🛠️ Stack tecnologica

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Radix UI
- Lucide Icons

## 🧩 Arquitetura do projeto

```
app/
	page.tsx
	checkout/page.tsx
	privacy/page.tsx
	terms/page.tsx
components/
	layout/
	sections/
		hero/
		video/
		products/
		testimonials/
	ui/
features/
	cart/
	products/
	utm/
lib/
	utils.ts
```

## 🚀 Como executar

### Pre-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun

### Instalacao

```bash
npm install
# ou
yarn
# ou
pnpm install
# ou
bun install
```

### Desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🧪 Comandos disponiveis

```bash
npm run dev     # servidor local
npm run build   # build de producao
npm run start   # server do build
npm run lint    # lint do projeto
```

## 🎯 Destaques tecnicos

- ✅ Seccoes desacopladas para facil reuso em outras VSLs
- ✅ Componentes UI com variacoes via `class-variance-authority`
- ✅ Persistencia de UTM para tracking de campanhas
- ✅ Layout pronto para CTA acima da dobra

## 📌 Observacoes

- A pagina principal fica em `app/page.tsx`.
- As seccoes ficam em `components/sections`.
- Nao ha variaveis de ambiente obrigatorias no momento.

## 📄 Licenca

Projeto privado. Ajuste esta secao se desejar publicar.
