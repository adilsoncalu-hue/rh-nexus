# RH Nexus - Plataforma de Talentos

## 🌐 Visão Geral

A **RH Nexus** é uma plataforma digital moderna focada em:

- Desenvolvimento profissional
- Divulgação de vagas
- Recrutamento
- Conexão entre talentos e empresas
- Serviços profissionais
- Crescimento de carreira

## 🎯 Frase Principal

> "Ligamos talentos preparados às oportunidades certas."

## 🎨 Identidade Visual

### Paleta de Cores
- **Azul Escuro** (#0F172A) - Principal: navbar, dashboard, títulos, footer
- **Laranja** (#F97316) - Destaque: botões CTA, ações importantes, hover effects
- **Branco** (#FFFFFF) - Base: fundo principal, formulários, cards
- **Cinza Claro** (#F1F5F9) - Secundário
- **Cinza Médio** (#64748B) - Textos secundários
- **Verde Sucesso** (#22C55E) - Estados positivos
- **Vermelho Alerta** (#EF4444) - Estados de erro

### Tipografia
- **Inter** ou **Poppins** - Fontes principais

## ⚙️ Stack Tecnológico

### Frontend
- Next.js 14 (App Router)
- React 18
- TypeScript
- TailwindCSS
- Framer Motion (animações)
- Lucide React (ícones)

### Estado & Formulários
- Zustand (gestão de estado)
- React Hook Form
- Zod (validação)

### UI Components
- Radix UI (primitives)
- shadcn/ui (design system)

## 📁 Estrutura do Projeto

```
rh-nexus/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Grupo de rotas de autenticação
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   └── recover/page.tsx
│   ├── (dashboard)/              # Grupo de rotas do dashboard
│   │   ├── layout.tsx
│   │   ├── dashboard/page.tsx
│   │   ├── admin/page.tsx
│   │   ├── perfil/page.tsx
│   │   └── configuracoes/page.tsx
│   ├── vagas/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── talentos/page.tsx
│   ├── empresas/page.tsx
│   ├── servicos/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── contato/page.tsx
│   ├── sobre/page.tsx
│   ├── layout.tsx
│   ├── page.tsx                  # Home Page
│   └── globals.css
├── components/
│   ├── ui/                       # Componentes UI (shadcn)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   ├── avatar.tsx
│   │   ├── dialog.tsx
│   │   ├── tabs.tsx
│   │   ├── select.tsx
│   │   ├── textarea.tsx
│   │   ├── label.tsx
│   │   ├── separator.tsx
│   │   ├── scroll-area.tsx
│   │   ├── skeleton.tsx
│   │   └── switch.tsx
│   ├── layout/                   # Componentes de layout
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── ai-assistant.tsx
│   └── sections/                 # Seções da Home
│       ├── hero-section.tsx
│       ├── about-section.tsx
│       ├── how-it-works-section.tsx
│       ├── featured-jobs-section.tsx
│       ├── services-section.tsx
│       ├── blog-section.tsx
│       └── cta-section.tsx
├── hooks/                        # Custom hooks
│   ├── useAuth.ts
│   └── useNotifications.ts
├── lib/                          # Utilitários e dados
│   ├── utils.ts
│   └── data.ts
├── types/                        # Tipos TypeScript
│   └── index.ts
├── middleware.ts                 # Autenticação
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

## 🚀 Funcionalidades

### Público
- [x] Home Page com Hero, Sobre, Como Funciona, Vagas em Destaque, Serviços, Blog, CTA
- [x] Portal de Vagas com filtros e busca
- [x] Detalhe da Vaga com candidatura
- [x] Área de Talentos
- [x] Para Empresas
- [x] Serviços Profissionais
- [x] Blog & Conteúdo
- [x] Contactos
- [x] Quem Somos

### Autenticação
- [x] Login com email/senha
- [x] Registro (Profissional/Empresa)
- [x] Recuperação de senha
- [x] Middleware de proteção de rotas

### Dashboard
- [x] Visão geral com estatísticas
- [x] Gestão de vagas
- [x] Gestão de candidaturas
- [x] Estatísticas de performance

### Perfil
- [x] Informações pessoais
- [x] Experiência profissional
- [x] Formação académica
- [x] Certificações
- [x] Idiomas
- [x] Serviços oferecidos
- [x] Upload de CV com histórico

### Admin
- [x] Gestão de utilizadores
- [x] Gestão de vagas
- [x] Gestão de empresas
- [x] Gestão de conteúdo
- [x] Estatísticas da plataforma

### AI Assistant
- [x] Chat flutuante
- [x] Sugestões inteligentes
- [x] Quick actions
- [x] Respostas contextualizadas

## 🛡️ Segurança
- Proteção de rotas via middleware
- Autenticação simulada com Zustand
- Validação de formulários
- Controle de permissões por role

## 📱 Responsividade
- Mobile-first design
- Breakpoints: sm, md, lg, xl
- Menu mobile com drawer
- Cards adaptativos

## 🎭 Animações
- Fade up on scroll (Framer Motion)
- Hover effects em cards e botões
- Skeleton loading states
- Pulse animations para notificações
- Slide transitions

## 🚀 Deploy

### Requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
# Clonar o projeto
cd rh-nexus

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

### Deploy na Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📝 Credenciais de Demonstração

| Email | Senha | Role |
|-------|-------|------|
| admin@rhnexus.com | 123456 | Super Admin |
| empresa@rhnexus.com | 123456 | Empresa |
| profissional@rhnexus.com | 123456 | Profissional |

## 📞 Contactos
- 📞 +244 937 541 472
- 📞 +244 956 013 700
- 📍 Luanda, Angola

## 📄 Licença
© 2024 RH Nexus. Todos os direitos reservados.

---

**RH Nexus** - Ligamos talentos preparados às oportunidades certas.
