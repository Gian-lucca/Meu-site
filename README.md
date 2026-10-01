# Portfólio 3D — Gianlucca Augusto

Portfólio pessoal de página única (SPA) com visual 3D interativo: planeta girando,
campo de estrelas, animações de entrada e seções de skills, experiência, projetos,
formação e contato.

## Requisitos

| Ferramenta | Versão mínima |
| ---------- | ------------- |
| Node.js    | 16 (testado com 20.x) |
| npm        | 8+            |

> O projeto usa `react-scripts` 5, então não é necessário instalar nenhuma
> ferramenta de build separada.

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

O projeto está configurado para GitHub Pages via `gh-pages`:

```bash
npm run deploy
```

A configuração relevante fica no `package.json`:

- `homepage` — caminho base da aplicação (ex.: `https://usuario.github.io/repo`)
  para que os assets funcionem em subdiretórios.
- `predeploy` / `deploy` — build automático + publicação na branch `gh-pages`.

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

### Formulário de contato

O formulário usa EmailJS e hoje está com as credenciais fixas no código em
`src/components/sections/Contact.jsx` (`serviceID`, `templateID` e `publicKey`).
Se você publicar este site, **substitua essas chaves pelas suas** e considere mover
o `publicKey` para uma variável de ambiente:

```bash
REACT_APP_EMAILJS_PUBLIC_KEY=sua_chave
```

## Stack completa

| Categoria   | Bibliotecas                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------- |
| Base        | `react`, `react-dom`, `react-router-dom`, `react-scripts`                                       |
| 3D          | `three`, `@react-three/fiber`, `@react-three/drei`, `maath`                                     |
| Estilo/UI   | `styled-components`, `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled` |
| Animação    | `framer-motion`, `react-tilt`, `react-scroll`, `typewriter-effect`                             |
| Extras      | `@emailjs/browser`, `react-vertical-timeline-component`, `react-icons`                         |
| Deploy/Test | `gh-pages`, `@testing-library/react`, `@testing-library/jest-dom`, `web-vitals`                 |

## Licença

Uso pessoal/portfólio. O template base é MIT — mantenha os créditos acima ao
redistribuir.