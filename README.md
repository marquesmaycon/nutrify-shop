# 💊 Nutrify Shop -  VSL Page

Landing page de VSL com foco em conversao, seccoes de produto e fluxo de compra.

## 📖 Sobre o projeto

Projeto em Next.js com App Router, componentes reutilizaveis e paginas auxiliares
(checkout, terms, privacy). A base e pensada para campanhas com UTM e foco em CTA.

## 🌐 Demo Online

**[👉 VER PROJETO AO VIVO](https://nutrify-shop.vercel.app/)**

## ✨ Funcionalidades

- 🧩 Seções: hero, video, produtos e depoimentos
- 🛒 Carrinho com botao de compra e contexto compartilhado
- 🧭 UTM tracking com persistencia entre rotas
- 🌓 Tema claro/escuro com `next-themes`
- 🧾 Paginas auxiliares: checkout, success, terms, privacy
- 🎨 UI components reutilizaveis (Shadcn UI base)
- ⚡ App Router + TypeScript

## 🛠️ Stack tecnologica

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Radix UI

## 🎨 Decisões Técnicas

### Por que Next.js 16?
- **App Router nativo**: Melhor performance com renderização otimizada e suporte a Server Components
- **Streaming & Suspense**: Renderização progressiva reduz First Contentful Paint
- **Built-in Optimizations**: Image, Font, Script otimização automática
- **API Routes**: Backend integrado para ações de UTM tracking

### Por que Context + SSR?
- O carrinho usa React Context para persistência simples e previsível
- Hidratação segura com `next-themes` previne mismatch
- Evita dependência de bibliotecas externas pesadas (Redux/Zustand)

### Por que Tailwind CSS v4?
- **Containerização**: Estilos scoped reduzem conflitos CSS
- **JIT Compiler**: Gera apenas CSS necessário
- **Size Otimizado**: ~15kb gzipped (vs 50kb+ com alternativas)

### Por que Radix UI?
- **Acessibilidade W3C**: Componentes com ARIA nativa
- **Headless**: Sem estilos obrigatórios, total controle
- **Performance**: Sem JavaScript desnecessário vs Material UI

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

## 🚀 Estratégias de Otimizações Implementadas

### Performance
- **Code Splitting**: Componentes separados por rota reduzem bundle inicial
- **Dynamic Imports**: Seções lazy-loaded apenas quando necessárias
- **Image Optimization**: Next.js Image com Lazy Loading e srcset automático
- **Font Loading**: Preload de fontes críticas, display: optional para fallbacks

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: Hero section renderizada no servidor
- **FID (First Input Delay)**: Minimized JavaScript com Server Components
- **CLS (Cumulative Layout Shift)**: Dimensões explícitas em imagens e media queries

### Bundle Size
- **Tree Shaking**: Imports específicos de Radix UI (sem tudo)
- **CSS Purging**: Tailwind v4 remove classes não utilizadas
- **Production Build**: Minificação automática e gzip compression


## 📊 Métricas LightHouse

![Lighthouse Metrics](/public/image.png)

### Comandos para Análise

```bash
# Build analysis
npm run build

# Lighthouse CLI
npx lighthouse http://localhost:3000 --view

# Bundle analysis
npm run build -- --profile
```

## 📌 Observações

- A pagina principal fica em `app/page.tsx`.
- As seccoes ficam em `components/sections`.
- Nao ha variaveis de ambiente obrigatorias no momento.

## 👨‍💻 Autor

<div align="center">
  <img src="https://github.com/marquesmaycon.png" width="100px" style="border-radius: 50%"/>
  <br/>
  <strong>Maycon Marques</strong>
  <br/>
  <br/>
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mayconhenrique/)
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/marquesmaycon)
  [![Email](https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:mayconmarquesh@gmail.com)

  ### Feito com ❤️ e muita 🎵
</div>