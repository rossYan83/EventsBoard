import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;500;600&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --bg-deep: #050a14;
    --bg-card: #0d1a2e;
    --bg-card-hover: #122240;
    --accent-cyan: #00e5ff;
    --text-primary: #e2e8f0;
    --text-secondary: #94a3b8;
    --text-dim: #475569;
    --border-glow: rgba(0, 229, 255, 0.15);
    --shadow-glow: 0 0 30px rgba(0, 229, 255, 0.08);
    --free-color: #10b981;
    --paid-color: #f59e0b;
    --vip-color: #7c3aed;
  }

  body {
    font-family: 'Exo 2', sans-serif;
    background-color: var(--bg-deep);
    background-image:
      radial-gradient(ellipse at 20% 50%, rgba(124, 58, 237, 0.05) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 20%, rgba(0, 229, 255, 0.04) 0%, transparent 50%),
      repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,229,255,0.02) 39px, rgba(0,229,255,0.02) 40px),
      repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,229,255,0.02) 39px, rgba(0,229,255,0.02) 40px);
    color: var(--text-primary);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3 {
    font-family: 'Orbitron', monospace;
  }

  ul { list-style: none; }
`;

export default GlobalStyles;