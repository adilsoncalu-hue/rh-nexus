# RH Nexus - Plataforma de Recrutamento e Desenvolvimento Profissional

## 🚀 Sobre o Projeto

A **RH Nexus** é uma plataforma web profissional e completa focada em:
- 🎯 Desenvolvimento profissional
- 💼 Divulgação de vagas
- 🤝 Conexão entre talentos e empresas
- 📊 Gestão de oportunidades
- 📝 Serviços especializados

## 🛠️ Tecnologias

- **React 18** - Framework UI
- **Vite** - Build tool
- **React Router** - Navegação
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **Context API** - Estado global

## 📁 Estrutura

```
rh-nexus/
├── public/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Toast.jsx
│   ├── context/        # Estado global
│   │   └── AppContext.jsx
│   ├── pages/          # Páginas da aplicação
│   │   ├── Home.jsx
│   │   ├── Vagas.jsx
│   │   ├── VagaDetalhe.jsx
│   │   ├── Talentos.jsx
│   │   ├── Empresas.jsx
│   │   ├── Servicos.jsx
│   │   ├── Blog.jsx
│   │   ├── Artigo.jsx
│   │   ├── Login.jsx
│   │   ├── Registro.jsx
│   │   ├── RegistroEmpresa.jsx
│   │   ├── Dashboard.jsx
│   │   ├── PublicarVaga.jsx
│   │   ├── Candidatura.jsx
│   │   ├── Perfil.jsx
│   │   ├── Sobre.jsx
│   │   ├── Contato.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Como Executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar servidor de desenvolvimento
```bash
npm run dev
```

### 3. Build para produção
```bash
npm run build
```

## 🌐 Como Publicar

### Opção 1: Vercel (Recomendado)
1. Crie conta em [vercel.com](https://vercel.com)
2. Instale o CLI: `npm i -g vercel`
3. Execute: `vercel`

### Opção 2: Netlify
1. Crie conta em [netlify.com](https://netlify.com)
2. Arraste a pasta `dist` para o dashboard

### Opção 3: GitHub Pages
1. Suba o código para um repositório GitHub
2. Ative GitHub Pages nas configurações

## 🔐 Acesso ao Painel Admin

Na página de login, clique em **"Entrar como Admin"** para aceder ao painel administrativo completo com:
- Dashboard com estatísticas
- Gestão de vagas (publicar, editar, remover, destacar)
- Gestão de utilizadores
- Gestão de empresas
- Gestão de conteúdo

## 🎨 Identidade Visual

- **Cores:** Azul escuro + Laranja + Branco
- **Tipografia:** Inter
- **Design:** Mobile-first, responsivo, moderno

## 📱 Funcionalidades Principais

✅ Portal de vagas com filtros avançados
✅ Área de talentos com perfis completos
✅ Sistema de candidatura
✅ Publicação de vagas para empresas
✅ Blog com conteúdo profissional
✅ Serviços especializados
✅ Sistema de autenticação (login/registro)
✅ Painel administrativo completo
✅ Perfil de utilizador editável
✅ Design 100% responsivo

---

**RH Nexus** - Ligamos talentos preparados às oportunidades certas.
