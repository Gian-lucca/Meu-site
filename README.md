# Portfólio 3D — Gianlucca Augusto

Portfólio pessoal de página única (SPA) com visual 3D interativo: planeta girando,
campo de estrelas, animações de entrada e seções de skills, experiência, projetos,
formação e contato.

## Requisitos

| Ferramenta | Versão    |
| ---------- | --------- |
| Node.js    | 24.x      |
| npm        | 10+       |

> O projeto usa `react-scripts` 5, então não é necessário instalar nenhuma
> ferramenta de build separada.
>
> A versão do Node está fixada em `engines.node` no `package.json`. A Vercel
> **recusa** builds com Node 16 (`Found invalid or discontinued Node.js Version`),
> então mantenha os dois em sincronia: no `package.json` e nas Project Settings
> do projeto na Vercel.

## Como rodar localmente

```bash
# 1. Instalar as dependências
npm install

# 2. Subir o servidor de desenvolvimento
npm start
```

Abra <http://localhost:3000> no navegador. O servidor recarrega a página
automaticamente a cada alteração nos arquivos.

Para escolher outra porta ou rodar em outro host:

```bash
PORT=3001 npm start          # PowerShell: $env:PORT=3001; npm start
BROWSER=none npm start       # não abre o navegador automaticamente
```

## Scripts disponíveis

| Script          | Descrição                                              |
| --------------- | ------------------------------------------------------ |
| `npm start`     | Sobe o servidor de desenvolvimento (hot reload)        |
| `npm run build` | Gera o build de produção em `build/`                   |
| `npm test`      | Roda os testes em modo interativo (watch)              |
| `npm run deploy`| Faz o build e publica na branch `gh-pages` (GitHub Pages) |

## Publicação

O deploy de produção é feito pela **Vercel**, conectada ao repositório no GitHub.
A cada push na `main` a Vercel roda `npm run build` e publica sozinha.

O projeto **não** tem campo `homepage` no `package.json`, e isso é intencional.
Sem ele, o CRA monta os assets na raiz (`/static/...`), que é o que a Vercel
espera. Se você um dia adicionar um `homepage`, o build passa a prefixar todos os
caminhos e o site quebra na Vercel.

Antes do primeiro deploy, confira em **Project Settings → Node.js Version** que
está em `24.x`. Esse ajuste fica no painel da Vercel e não no repositório, então
é o que costuma continuar travando o build mesmo com o `package.json` correto.

### GitHub Pages (alternativa, não usado hoje)

O script continua disponível via `gh-pages`, mas a branch `gh-pages` não existe
no repositório, ou seja, nunca foi usado:

```bash
npm run deploy
```

Para esse caminho funcionar seria preciso adicionar de volta
`"homepage": "https://<usuario>.github.io/<repo>"` ao `package.json`.

## Estrutura do projeto

```
.
├── public/                  # Arquivos estáticos servidos como estão
│   ├── index.html
│   └── planet/              # Modelo 3D do planeta (gltf + texturas)
├── src/
│   ├── App.js               # Layout principal, tema e rotas
│   ├── index.js             # Entry point
│   ├── index.css            # Estilos globais
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── canvas/          # Stars.jsx, Earth.jsx (cenas three.js)
│   │   ├── cards/           # Cards de experiência, formação e projetos
│   │   ├── Dialog/          # Modal de detalhes do projeto
│   │   ├── HeroBgAnimation/ # Background animado do Hero
│   │   └── sections/        # Hero, Skills, Experience, Projects,
│   │                        # Education, Contact, Footer
│   ├── data/
│   │   └── constants.js     # ⭐ Conteúdo do site (veja abaixo)
│   ├── images/              # Logos de empresas, projetos e assets
│   └── utils/
│       ├── Themes.js        # Paletas darkTheme / lightTheme
│       └── motion.js        # Variantes de animação do Framer Motion
└── package.json
```

## Personalizando o site

Quase todo o conteúdo fica em **`src/data/constants.js`**, com cinco exports:

| Export       | Onde é usado                                          |
| ------------ | ---------------------------------------------------- |
| `Bio`        | Nome, roles, descrição e links sociais do Hero       |
| `skills`     | Cards de skills com ícone e URL da imagem             |
| `experiences`| Timeline de experiência profissional                  |
| `education`  | Cards de formação                                     |
| `projects`   | Cards de projetos e o conteúdo do modal de detalhes  |

Outros pontos comuns de ajuste:

- **Cores:** edite `darkTheme` / `lightTheme` em `src/utils/Themes.js`.
- **Imagens:** substitua os arquivos em `src/images/` e referencie-os com
  `require()` dentro de `constants.js`.
- **Seções:** edite a ordem dos componentes em `src/App.js`.

## Seção de contato

A seção "Contato" mostra apenas o planeta 3D, o título e uma descrição. **Não há
formulário.** Para falar com você, os caminhos são os links do navbar e do rodapé
(WhatsApp, LinkedIn, Instagram, GitHub), que saem do objeto `Bio` em
`src/data/constants.js`.

## Stack completa

| Categoria   | Bibliotecas                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------- |
| Base        | `react`, `react-dom`, `react-router-dom`, `react-scripts`                                       |
| 3D          | `three`, `@react-three/fiber`, `@react-three/drei`, `maath`                                     |
| Estilo/UI   | `styled-components`, `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled` |
| Animação    | `framer-motion`, `react-tilt`, `react-scroll`, `typewriter-effect`                             |
| Extras      | `react-vertical-timeline-component`, `react-icons`                                           |
| Deploy/Test | `gh-pages`, `@testing-library/react`, `@testing-library/jest-dom`, `web-vitals`                 |

## Créditos

Projeto baseado no template
[3D Portfolio Website](https://github.com/rishavchanda/3d-portfolio-website) de
**Rishav Chanda** (MIT), adaptado para o portfólio de Gianlucca Augusto.

## Licença

Uso pessoal/portfólio. O template base é MIT — mantenha os créditos acima ao
redistribuir.